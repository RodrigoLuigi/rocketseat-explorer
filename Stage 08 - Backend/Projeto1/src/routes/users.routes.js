const {
  Router
} = require("express");

const UsersController = require('../controllers/UsersController');

const usersController = new UsersController();

const userRoutes = Router();

userRoutes.post("/", usersController.create);
userRoutes.put("/:id", usersController.update);

module.exports = userRoutes;