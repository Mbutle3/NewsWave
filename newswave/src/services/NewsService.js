import React, { useEffect, useState } from "react";
const NewsAPI = require("newsapi");

const NewsService = ({
  sources,
  id,
  query,
  description,
  url,
  category,
  language,
  country,
}) => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const api = new NewsAPI("8c7fc3d767634a56ae05209f95528db8");

    // Example: To query /v2/top-headlines
    api.v2
      .topHeadlines({
        sources,
        id,
        q: query,
        description,
        url,
        category,
        language,
        country,
      })
      .then((response) => {
        console.log(response);
        setNewsData(response.articles);
      });

    // You can add similar calls for everything and sources if needed

    // Cleanup function to cancel the API request if the component unmounts
    return () => {
      // Cancel the API request or perform any cleanup if necessary
    };
  }, [sources, query, category, language, country, id, description, url]);

  return (
    <div>
      {/* Render the newsData in your component */}
      {newsData.map((article) => (
        <div key={article.title}>
          <h3>{article.author}</h3>
          <p>{article.description}</p>
          <img src={article.urlToImage} alt={article.title} />
        </div>
      ))}
    </div>
  );
};

export default NewsService;
