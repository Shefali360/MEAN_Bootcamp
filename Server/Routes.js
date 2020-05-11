
adduser=(userdata)=>{
    users.push(userdata);

}

deleteuser=(username)=>{
  const index=users.findIndex(user=>user.username===username);
  if(index>=0)
  users.splice(index,1);

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
    app.post('/deleteuser',(req,res)=>{
        deleteuser(req.body.username);
        res.status(200);
        res.json(users);
    })

}




