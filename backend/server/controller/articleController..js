
const Article = require('../model/article_model');

// Async handler to wrap asynchronous routes
const asyncHandler = require('express-async-handler');

// Controller function to get articles
exports.get_articles = asyncHandler(async (req, res, next) => {
  try {
    // Fetch all articles from the database
    const articles = await Article.find();
    
    // Respond with the articles in JSON format
    res.json(articles);
  } catch (err) {
    next(err);
  }
});
