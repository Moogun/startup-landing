const path = require('path')
const publicPath = path.join(__dirname, './public')

const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb://moogun:bwiiml0723@ds255332.mlab.com:55332/geo-shop', { useNewUrlParser: true })

app.use(express.static(publicPath))

app.listen(5000, () => console.log('on 5000'));
