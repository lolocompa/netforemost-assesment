// dataLoader.js

require('dotenv').config();

const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

const articleSchema = new mongoose.Schema({
  title: String,
  url: String,
  author: String,
  description: String,
  urlToImage: String,
  publishedAt: String
});

const Article = mongoose.model('Article', articleSchema);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });

// Load data from data.json
const loadData = async () => {
  try {
    const filePath = path.join(__dirname, 'data.json');
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

    // Insert the data into the collection
    await Article.insertMany(data);
    console.log('Data successfully loaded into the database');
  } catch (error) {
    console.error('Error loading data:', error);
  } finally {
    mongoose.connection.close();
  }
};

// Call the loadData function
loadData();
