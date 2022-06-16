const Authors = require("../models/authors.model");

module.exports.index = (req, res) => {
  res.json({ message: "Hello World" });
};

module.exports.createAuthor = (req, res) => {
  Authors.create(req.body)
    .then((author) => res.json(author))
    .catch((err) => res.status(400).json(err));
};

module.exports.showAuthors = (req, res) => {
  Authors.find({})
    .then((author) => res.json(author))
    .catch((err) => res.json(err));
};

module.exports.getOneAuthor = (req, res) => {
  Authors.findOne({ _id: req.params._id })
    .then((author) => res.json(author))
    .catch((err) => res.json(err));
};

module.exports.updateAuthors = (req, res) => {
  Authors.findOneAndUpdate({ _id: req.params._id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedAuthor) => res.json(updatedAuthor))
    .catch((err) => res.status(400).json(err));
};

module.exports.destroyAuthor = (req, res) => {
  Authors.deleteOne({ _id: req.params._id })
    .then((confirmDelete) => res.json(confirmDelete))
    .catch((err) => res.json(err));
};
