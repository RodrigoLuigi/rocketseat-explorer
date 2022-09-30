const {
  Router
} = require("express");

const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const UsersController = require('../controllers/UsersController');

const usersController = new UsersController();

const userRoutes = Router();

userRoutes.post("/", usersController.create);
userRoutes.put("/", ensureAuthenticated, usersController.update);

module.exports = userRoutes;