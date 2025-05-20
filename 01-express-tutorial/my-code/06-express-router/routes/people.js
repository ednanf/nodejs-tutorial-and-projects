const express = require('express');

const {
  getPeople,
  postPeople,
  postPostmanPeople,
  putPeople,
  deletePeople,
} = require('../controllers/people');

const router = express.Router();

router.get('/', getPeople);
router.post('/', postPeople);
router.post('/postman', postPostmanPeople);
router.put('/:id', putPeople);
router.delete('/:id', deletePeople);

// Alternatively
// router.route('/').get(getPeople).post(postPeople);
// router.route('/postman').post(postPostmanPeople)
// router.route('/:id').put(putPeople).delete(deletePeople)

module.exports = router;
