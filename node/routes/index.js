var models  = require('../models');
var express = require('express');
var router = express.Router();

/* Primary lookup route */
router.get('/api/primary/:id', function(req, res) {
  models.Geoname.find(req.params.id).success(function(geoname) {
    res.json(geoname);
  });
});

/* Search query lookup route */
router.get('/api/geoname/:country/:admin1/:name', function(req, res) {
  
  var Sequelize = require("sequelize");
  
  models.Geoname.findAll({
    where: Sequelize.and(
      {country: req.params.country},
      {admin1: req.params.admin1},
      ["name LIKE ?", "%"+decodeURIComponent(req.params.name)+"%"]
    )
  }).success(function(geonames) {
    res.json(geonames);
  });
  
});

/* GET home page. */
router.get('/', function(req, res) {
  var hostname = req.headers.host;
  res.render('index', { title: 'GeoNode', hostname: hostname});
});

module.exports = router;
