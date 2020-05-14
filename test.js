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
  before((done) => {
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
          res.body.length.should.be.eql(2);
          done();
        });
    });
  });

  //Testing the POST route(for insertion)
  it("it should POST items when inserted", (done) => {
    let item = [
      {
        item_name: "toothpaste",
        quantity: 10,
        isSanitized:true,
        unit: "tubes",
      },{
        item_name: "oil",
        quantity: 5,
        isSanitized: false,
        unit: "litres",
      }

    ];
    chai
      .request(server)
      .post("/items")
      .send(item)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object");
        res.body.should.have.property("data");
        res.body.data.should.be.a("array");
        res.body.data.should.have.length(2);
        res.body.data[0].should.have.property("item_name");
        res.body.data[0].should.have.property("quantity");
        res.body.data[0].should.have.property("unit");
        res.body.data[0].item_name.should.equal("toothpaste");
        res.body.data[1].should.have.property("item_name");
        res.body.data[1].should.have.property("quantity");
        res.body.data[1].should.have.property("unit");
        res.body.data[1].item_name.should.equal("oil");
        res.body.data[1].quantity.should.equal(5);
        res.body.data[1].isSanitized.should.equal(false);
        done();
      });
  });


  //Testing the POST route(for updation)
  describe("/POST items", () => {
    it("it should update item if item_name already exists", (done) => {
      let item =[{
        item_name:"oil",
        quantity: 10,
        isSanitized: true,
      }];
      chai
        .request(server)
        .post("/items")
        .send(item)
        .end((err, res) => {
        console.log(res.body);
        res.should.have.status(200);
        res.body.should.be.a("object");
        res.body.should.have.property("data");
        res.body.data.should.be.a("array");
        res.body.data.should.have.length(1);
        res.body.data[0].should.have.property("item_name");
        res.body.data[0].should.have.property("quantity");
        res.body.data[0].item_name.should.equal("oil");
        
          done();
        });
    });
});

//Testing the GET route for changes after POST 
describe("/GET items which are freshly inserted or updated", () => {
  it("it should GET all the items", (done) => {
    chai
      .request(server)
      .get("/items")
      .end((err, res) => {
        console.log(res.body);
        res.should.have.status(200);
        res.body.should.be.a("array");
        res.body.length.should.be.eql(2);
        res.body[1].should.have.property("item_name");
        res.body[1].should.have.property("quantity");
        res.body[1].should.have.property("isSanitized");
        res.body[1].item_name.should.equal("oil");
        res.body[1].quantity.should.equal(10);
        res.body[1].isSanitized.should.equal(true);
        done();
      });
  });
});

//Testing the PATCH route
describe("/PATCH/:id item", () => {
  it("it should UPDATE an item given the id", (done) => {
    let item = new Item({
      item_name: "flour",
      quantity: 5,
      isSanitized: false,
      unit: "kg",
    });
    item.save((err, item) => {
      chai
        .request(server)
        .patch("/item/" + item.id)
        .send({
          item_name: "sugar",
          quantity:12
        })
        .end((err, res) => {
          console.log(res.body);
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("item_name").eql("flour");
          res.body.should.have.property("quantity").eql(5);
          res.body.should.have.property("isSanitized").eql(false);
          done();
        });
    });
  });
});


//Testing the GET route for changes after PATCH
describe("/GET item", () => {
  it("it should GET all the items which are freshly updated using /PATCH(to test /PATCH/:id working or not) ", (done) => {
    chai
      .request(server)
      .get("/items")
      .end((err, res) => {
        console.log(res.body);
        res.should.have.status(200);
        res.body.should.be.a("array");
        res.body.length.should.be.eql(3);
        res.body[2].should.have.property("item_name");
        res.body[2].should.have.property("quantity");
        res.body[2].should.have.property("isSanitized");
        res.body[2].item_name.should.equal("sugar");
        res.body[2].quantity.should.equal(12);
        res.body[2].isSanitized.should.equal(false);
        res.body[2].unit.should.equal("kg");
        done();
      });
  });
});


});

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

