const { Router } = require("express");

const NotesController = require("../controllers/NotesController")

const ensureAuthenticated = require("../middleware/ensureAuthenticated");

const notesController = new NotesController();

const notesRoutes = Router();

//passando o middleware para todas as rotas de uma vez
notesRoutes.use(ensureAuthenticated);

notesRoutes.post('/', notesController.create);
notesRoutes.get('/', notesController.index);
notesRoutes.get('/:id', notesController.show);
notesRoutes.delete('/:id', notesController.delete);

module.exports = notesRoutes;