const {
  Router
} = require('express');

const userRouter = require("./users.routes");

const routes = Router();

routes.use("/users", userRouter);

module.exports = routes