const AuthorsController = require("../controllers/authors.controller");

module.exports = (app) => {
  app.get("/api", AuthorsController.index);
  app.get("/api/authors", AuthorsController.showAuthors);
  app.post("/api/authors", AuthorsController.createAuthor);
  app.get("/api/authors/:_id", AuthorsController.getOneAuthor);
  app.put("/api/authors/:_id", AuthorsController.updateAuthors);
  app.delete("/api/authors/:_id", AuthorsController.destroyAuthor);
};
