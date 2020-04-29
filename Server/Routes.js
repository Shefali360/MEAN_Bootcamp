const users = [{
    "username": "ingunna",
    "firstname": "Ingunna",
    "lastname": "Litherborough",
    "createdOn":"28-4-2020"
},
{
    "username": "jany",
    "firstname": "Jany",
    "lastname": "Deville",
    "createdOn":"28-4-2020"
},
{
    "username": "almira",
    "firstname": "Almira",
    "lastname": "Melson",
    "createdOn":"28-4-2020"
},
{
    "username": "danya",
    "firstname": "Danya",
    "lastname": "Ordelt",
    "createdOn":"28-4-2020"
},
{
    "username": "biddy",
    "firstname": "Biddy",
    "lastname": "Backsal",
    "createdOn":"28-4-2020"
},
{
    "username": "lemmy",
    "firstname": "Lemmy",
    "lastname": "Fallon",
    "createdOn":"28-4-2020"
},
{
    "username": "prentice",
    "firstname": "Prentice",
    "lastname": "Nickell",
    "createdOn":"28-4-2020"
},
{
    "username": "timotheus",
    "firstname": "Timotheus",
    "lastname": "January 1st",
    "createdOn":"28-4-2020"
},
{
    "username": "patrizio",
    "firstname": "Patrizio",
    "lastname": "Husher",
    "createdOn":"28-4-2020"
},
{
    "username": "beulah",
    "firstname": "Beulah",
    "lastname": "Gowrie",
    "createdOn":"28-4-2020"
},
];

adduser=(userdata)=>{
    users.push(userdata);

}

deleteuser=(username)=>{
   users.filter(user=>{
       return (user.username!==username);
   })

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
    app.delete('/deleteuser',(req,res)=>{
        deleteuser(req.body.username);
        res.status(200);

    })

}




