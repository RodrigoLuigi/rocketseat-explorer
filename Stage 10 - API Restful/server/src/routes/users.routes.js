const { Router } = require("express");
const multer = require("multer");
const uploadConifg = require("../configs/upload");

const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const UserAvatarController = require("../controllers/UserAvatarController");
const UsersController = require('../controllers/UsersController');

const usersController = new UsersController();
const userAvatarController = new UserAvatarController();

const userRoutes = Router();
const upload = multer(uploadConifg.MULTER);

userRoutes.post("/", usersController.create);
userRoutes.put("/", ensureAuthenticated, usersController.update);
userRoutes.patch("/avatar", ensureAuthenticated, upload.single("avatar"), userAvatarController.update)

module.exports = userRoutes;