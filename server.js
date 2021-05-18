// const dbo = require('./api/database/connections')
const express = require('express');
const app = express();
const http = require('http').createServer(app);

const PORT = process.env.PORT || 5000;

const mainAPI = require('./api/main.js');
const loginAPI = require('./api/auth/login.js');
const registerAPI = require('./api/auth/register.js');
const searchUserAPI = require('./api/searchuser');

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.json())

app.use('/api/searchuser/', searchUserAPI);
app.use('/api/login', loginAPI);
app.use('/api/register', registerAPI);
app.use('/api/', mainAPI);


http.listen(PORT, () => console.log(`server started on port ${PORT}`));