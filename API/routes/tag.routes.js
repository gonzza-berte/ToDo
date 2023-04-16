const {Router} = require('express');
const { createTag, deleteTag } = require('../controllers/tag.controller');

const router = Router();


router.post('/', createTag);

router.delete('/:id', deleteTag);

module.exports = router;