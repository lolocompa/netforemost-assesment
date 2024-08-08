
const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  title: String,
  url: String,
  author: String,
  description: String,
  urlToImage: String,
  publishedAt: String
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
