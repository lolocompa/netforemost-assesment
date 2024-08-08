
import React, { useState, useEffect } from "react";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log(articles);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch("/articles"); 
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setArticles(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading) return <p>Loading articles...</p>;
  if (error) return <p>Error loading articles: {error}</p>;

  return (
    <div>
      {articles.map((article) => (
          <div
          className="article"
          key={article._id}
          onClick={() => window.open(article.url, "_blank")}
          style={{ cursor: "pointer" }}
        >
          <img src={article.urlToImage} className="article_img"></img>
          <div className="article_info">
            <h3>{article.title}</h3>
            <h6>{article.author}</h6>
            <h5>{article.description}</h5>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArticleList;
