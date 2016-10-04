var express = require('express');
var router = express.Router();

var timeline = [
  { name: "Making Games", color: '#f00', time: '2003', icon: 'games' },
  { name: "Experiments", color: '#0f0', time: null, icon: 'labs' },
  { name: "Web", color: '#00f', time: 'Now', icon: 'web' }
];

router.route('/')
  .get(function(req, res) {
    res.json(timeline);
  });

module.exports = router;
