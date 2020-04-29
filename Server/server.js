"use strict";
const Express = require('express');
const cors=require('cors');
const PORT = 8000;
const app = Express();
const router = require('./Routes'); 
app.use(cors({
   origin:'*'
}
));
app.use(Express.json());

function middleware(req,res,next){
    const today=new Date();
     const date=today.getDate()+"-"+(today.getMonth()+1)+"-"+today.getFullYear();
    req.body['createdOn']=date;
     next();
}
app.use(middleware);

router.router(app);
app.listen(PORT, () => {
   console.info("Server is running @:http://localhost:%d", PORT);
});