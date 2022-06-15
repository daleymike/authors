const Authors = require('../models/authors.model');

module.exports.index = (req, res) => {
  res.json({ message: "Hello World" });
}

module.exports.createAuthor = (req, res) => {
    Authors.create(req.body)
    .then(author => res.json(author))
    .catch(err => res.json(err));
}

module.exports.showAuthors = (req, res) => {
    Authors.find({})
    .then(author => res.json(author))
    .catch(err => res.json(err))
}
