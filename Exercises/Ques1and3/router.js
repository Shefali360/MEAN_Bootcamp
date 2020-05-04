const axios=require('axios');
const jwt=require('jsonwebtoken');

const encryptionKey="MEAN_BOOTCAMP_EXPRESS_SESSION";

verifyToken=(req,res,next)=>{
    jwt.verify(req.body.token,encryptionKey,(error)=>{
        if(error){
            res.status(401);
            return res.send("Access Denied!Invalid token received.")
        }
        return next();
    })

}

exports.router=(app)=>{
    // call http://localhost:3001/github/detail/user/vishalbajpaidev
   app.get('/github/detail/user/:username', async (req,res)=>{
       try{
            const response= await axios.get(`https://api.github.com/users/${req.params.username}`)
            res.json(response.data);
       }catch(error){
            res.json({error:true});
       }
    })

    app.post('/login',(req,res)=>{
        const token=jwt.sign(req.body,encryptionKey,{expiresIn:"5m"});
        res.json({token});
    });

    app.post('/authenticated',verifyToken,(req,res)=>{
        res.send("Authentication successful!")
    })
}