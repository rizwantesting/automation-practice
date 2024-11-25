require('dotenv').config();
const express = require('express');
const cors = require('cors');
const PORT = 5000;
const app = express();

app.get('/', async(req, res)=>{
    res.send("i am called hello ....");
});

// Start Server
app.listen(PORT, () =>
    console.log('server started at: ', new Date(), '\nOn port ', PORT),
);