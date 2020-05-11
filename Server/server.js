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

router.router(app);
app.listen(PORT, () => {
   console.info("Server is running @:http://localhost:%d", PORT);
});