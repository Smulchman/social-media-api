const router = require('express').Router();
const {
  getSinglethought,
  getthoughts,
  createthought,
} = require('../../controllers/thoughtController');

router.route('/').get(getthoughts).thought(createthought);

router.route('/:thoughtId').get(getSinglethought);

module.exports = router;
