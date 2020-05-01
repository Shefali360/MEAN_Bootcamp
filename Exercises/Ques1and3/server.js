const express=require('express');
const app=express();
const PORT=3001;
const router=require('./router');
app.use(express.json());
router.router(app);
app.listen(PORT,()=>console.log(`Server listening on port ${PORT}`));