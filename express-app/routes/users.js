const express = require('express');
const router = express.Router();

/* GET users listing. */
let users_id = 3;

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

router.get('/:id', function(req, res, next) {
  const id = parseInt(req.params.id);
  const user = usrs.items.find(u => u.id === id);
  if (user) {
    res.send(user);
  } else {
    res.status(404).send({ error: 'User not found' });
  }
});

router.post('/', function(req, res, next) {
  let new_id = users_id++;
  usrs.items.push({
    "id": new_id,
    "name": req.body.name,
  })

  res.status(201).json(newUser);
})

module.exports = router;
