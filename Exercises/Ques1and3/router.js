const axios=require('axios');
const jwt=require('jsonwebtoken');

const encryptionKey="MEAN_BOOTCAMP_EXPRESS_SESSION";

verifyToken=(req,res,next)=>{
    jwt.verify(req.body.token,encryptionKey,(error,payload)=>{
        if(error){
            res.status(401);
            return res.send("Acess Denied!Invalid token received.")
        }
        return next();
    })

}

exports.router=(app)=>{
   app.get('/gitData', async (req,res)=>{
       try{
       const response= await axios.get(`https://api.github.com/users/${req.query.username}`)
       const data=await res.json(response.data);
       return data;
       }catch(error){
           await res.json({error:true});
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