const BookModel = require("../models/book.model");

const createBook = (req, res) => {
  // Call the create function on the Book model, and pass the data that you receive.

  const {title, author} = req.body;
  BookModel.create({
      title: title,
      authorName: author,
  })
  .then((result) => {
      return res.json({
          message: "Record created successfully!",
      });
  })
  .catch((error) => {
      console.log(error);
      return res.json({
          message: "Unable to create a record!",
      });
  });
};

const getBook = (req, res) => {};
const getAllBooks = (req, res) => {};
const editBook = (req, res) => {};
const deleteBook = (req, res) => {};

module.exports = { createBook, getAllBooks, getBook, editBook, deleteBook };
