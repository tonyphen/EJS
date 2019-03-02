const express = require('express');
const router = express.Router();

const {singer, arrSinger, domain, domainImg} = require('../models/Singer');

router.get('/',(req,res) => {
  res.render('list',{arrSinger,domainImg,domain});
})

router.get('/add',(req,res) => {
  res.render('add',{arrSinger,domainImg,domain});
})

router.post('/add', (req, res) => {
  const {txtName, txtAvatar, txtLink} = req.body;
  res.send({txtName ,txtAvatar ,txtLink});
  const id = Math.floor(Math.random*1000)
  var newSinger = new Singer(id, txtName, txtAvatar, txtLink);
  arrSinger.push(newSinger);
  res.send('/');
});

module.exports = router;