const router = require('express').Router();
const {
  getSingleThought,
  getThoughts,
  createThought,
} = require('../../controllers/thoughtController');

// /api/thoughts/
router.route('/').get(getThoughts).post(createThought)

// /api/thoughts/:thoughtId
router.route('/:thoughtId').get(getSingleThought).put().delete();

// /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions').post().delete();

module.exports = router;
