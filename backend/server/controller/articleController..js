
const Article = require('../model/article_model');

// Async handler to wrap asynchronous routes
const asyncHandler = require('express-async-handler');

exports.get_articles = asyncHandler(async (req, res, next) => {
  try {
    const articles = await Article.find();
    
    res.json(articles);
  } catch (err) {
    next(err);
  }
});
