const users = [{
    "username": "ingunna",
    "firstname": "Ingunna",
    "lastname": "Litherborough",
    "password": "ilitherborough0",
},
{
    "username": "jany",
    "firstname": "Jany",
    "lastname": "Deville",
    "password": "jdeville1",
},
{
    "username": "almira",
    "firstname": "Almira",
    "lastname": "Melson",
    "password": "amelson2",
},
{
    "username": "danya",
    "firstname": "Danya",
    "lastname": "Ordelt",
    "password": "dordelt3",
},
{
    "username": "biddy",
    "firstname": "Biddy",
    "lastname": "Backsal",
    "password": "bbacksal4",
},
{
    "username": "lemmy",
    "firstname": "Lemmy",
    "lastname": "Fallon",
    "password": "lfallon5",
},
{
    "username": "prentice",
    "firstname": "Prentice",
    "lastname": "Nickell",
    "password": "pnickell6",
},
{
    "username": "timotheus",
    "firstname": "Timotheus",
    "lastname": "January 1st",
    "password": "tjanuaryst7",
},
{
    "username": "patrizio",
    "firstname": "Patrizio",
    "lastname": "Husher",
    "password": "phusher8",
},
{
    "username": "beulah",
    "firstname": "Beulah",
    "lastname": "Gowrie",
    "password": "bgowrie9",
},
];

adduser=(userdata)=>{
    users.push(userdata);

}

exports.router = (app) => {
    app.get('/home', (req, res) => {
        res.status(200);
        res.json(users);
    });
    app.post('/adduser',(req,res)=>{
       adduser(req.body);
       res.status(200);
    })
    // app.delete('')

}




