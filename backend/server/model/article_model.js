// models/Article.js

const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  title: String,
  url: String,
  // Add any other fields as per your data.json structure
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
