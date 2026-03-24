const express = require('express');
const router = express.Router();

/* GET users listing. */

const usrs = {
  items: []
};

usrs.items.push({
  "id": 1,
  "name": "Чигвинцев Иван"
});
usrs.items.push({
  "id": 2,
  "name": "Ипатов Игорь"
});

router.get('/', function(req, res, next) {
  res.send(usrs);
});

module.exports = router;
