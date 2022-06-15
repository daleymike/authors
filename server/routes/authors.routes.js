const AuthorsController = require('../controllers/authors.controller');

module.exports = (app) => {
    app.get('/api', AuthorsController.index);
    app.get('/api/authors', AuthorsController.showAuthors)
    app.post('/api/authors', AuthorsController.createAuthor)
}