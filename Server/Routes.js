const users = [{
    "username": "ingunna",
    "first_name": "Ingunna",
    "last_name": "Litherborough",
    "password": "ilitherborough0",
},
{
    "username": "jany",
    "first_name": "Jany",
    "last_name": "Deville",
    "password": "jdeville1",
},
{
    "username": "almira",
    "first_name": "Almira",
    "last_name": "Melson",
    "password": "amelson2",
},
{
    "username": "danya",
    "first_name": "Danya",
    "last_name": "Ordelt",
    "password": "dordelt3",
},
{
    "username": "biddy",
    "first_name": "Biddy",
    "last_name": "Backsal",
    "password": "bbacksal4",
},
{
    "username": "lemmy",
    "first_name": "Lemmy",
    "last_name": "Fallon",
    "password": "lfallon5",
},
{
    "username": "prentice",
    "first_name": "Prentice",
    "last_name": "Nickell",
    "password": "pnickell6",
},
{
    "username": "timotheus",
    "first_name": "Timotheus",
    "last_name": "January 1st",
    "password": "tjanuaryst7",
},
{
    "username": "patrizio",
    "first_name": "Patrizio",
    "last_name": "Husher",
    "password": "phusher8",
},
{
    "username": "beulah",
    "first_name": "Beulah",
    "last_name": "Gowrie",
    "password": "bgowrie9",
},
];

exports.router = (app) => {
    app.get('/home', (req, res) => {
        res.status(200);
        res.json(users);
    });
    // app.post('/adduser',(req,res)=>{

    //     res.send();
    // })
    // app.delete('')

}




