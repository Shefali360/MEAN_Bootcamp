"use strict";
const Express = require('express');
const cors=require('cors');
const PORT = 8000;
const app = Express();
const router = require('./Routes'); 
router.router(app);
app.use(cors({
   origin:'*'
}

));
app.listen(PORT, () => {
   console.info("Server is running @:http://localhost:%d", PORT);
});