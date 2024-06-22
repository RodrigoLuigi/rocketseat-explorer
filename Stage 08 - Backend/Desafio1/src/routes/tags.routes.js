const { Router } = require("express");

const TagsController = require("../controllers/TagsController")

const ensureAuthenticated = require("../middleware/ensureAuthenticated");

const tagsController = new TagsController();

const tagsRoutes = Router();

tagsRoutes.get('/', ensureAuthenticated, tagsController.index);

module.exports = tagsRoutes;