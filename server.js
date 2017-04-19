/**
 * Created by 吕堃鹏 on 2017/2/11 0011.
 */
let express = require('express');
let path = require('path');
let app = express();
//解析请求体
let bodyParser = require('body-parser');
app.use(express.static(path.join(__dirname, '/')));
app.use(bodyParser.urlencoded({extended: true}));
app.get('/', function (req, res) {
    res.sendFile(path.resolve('index.html'), function () {
    })
});
app.listen(80, function () {
    console.log(80)
});