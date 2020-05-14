process.env.NODE_ENV = "test";

let mongoose = require("mongoose");
let Item = require("./items/model");
let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("./index");
let should = chai.should();
let expect = chai.expect;

chai.use(chaiHttp);
describe("Items", () => {
  beforeEach((done) => {
    Item.remove({}, (err) => {
      done();
    });
  });

  //Testing the GET route
  describe("/GET items ", () => {
    it("it should GET all the items", (done) => {
      chai
        .request(server)
        .get("/items")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("array");
          res.body.length.should.be.eql(0);
          done();
        });
    });
  });
});

//Testing the POST route
describe("/POST items", () => {
  it("it should not POST items without item name field", (done) => {
    let item =[ {
      quantity: "10",
      isSanitized: "true",
    }];
    chai
      .request(server)
      .post("/items")
      .send(item)
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
  it("it should POST an item", (done) => {
    let item = [
      {
        item_name: "toothpaste",
        quantity: "10",
        isSanitized: "true",
        unit: "tubes",
      },
    ];
    chai
      .request(server)
      .post("/items")
      .send(item)
      .end((err, res) => {
        // console.log(res);
        res.should.have.status(200);
        res.body.should.be.a("object");
        res.body.should.have.property("data");
        res.body.data.should.be.a("array");
        res.body.data.should.have.length(1);
        res.body.data[0].should.have.property("item_name");
        res.body.data[0].should.have.property("quantity");
        res.body.data[0].should.have.property("unit");
        res.body.data[0].item_name.should.equal("toothpaste");
        done();
      });
  });
});

//Testing the PATCH route
// describe("/PATCH/:id item", () => {
//   it("it should UPDATE an item given the id", (done) => {
//     let item = new Item({
//       item_name: "flour",
//       quantity: 5,
//       isSanitized: "false",
//       unit: "kg",
//     });
//     item.save((err, item) => {
//       chai
//         .request(server)
//         .patch("/item/" + item._id)
//         .send({
//           item_name: "sugar",
//           quantity: 5,
//           isSanitized: "false",
//           unit: "kg",
//         })
//         .end((err, res) => {
//           console.log(res.body);
//           res.should.have.status(200);
//           res.body.should.be.a("object");
//           res.body.should.have.property("item_name").eql("sugar");
//           done();
//         });
//     });
//   });
// });


//Testing the DELETE route
describe("/DELETE/:id item", () => {
  it("it should DELETE an item given the id", (done) => {
    let item = new Item({
      item_name: "oil",
      quantity: 5,
      isSanitized: true,
      unit: "litres",
    });
    item.save((err, item) => {
      chai
        .request(server)
        .delete("/item/" + item.id)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("ok").eql(1);
          res.body.should.have.property("n").eql(1);
          res.body.should.have.property("deletedCount").eql(1);
          done();
        });
    });
  });
});
