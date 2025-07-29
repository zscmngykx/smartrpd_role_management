const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/users'); // ✅ 你已有的路由

const testApp = express();

testApp.use(cors());
testApp.use(bodyParser.json());
testApp.use('/users', userRoutes); // ✅ 路由路径一致

module.exports = testApp;
