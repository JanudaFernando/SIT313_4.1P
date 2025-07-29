import React from "react";
import "./components.css";

const articles = [
  {
    image: 'https://via.placeholder.com/300x200/4a90e2/ffffff?text=Article+1',
    title: 'React Development',
    date: 'Published on Dec 15, 2024',
    description: 'Learn the fundamentals of React development and modern JavaScript.',
    author: 'John Doe'
  },
  {
    image: 'https://via.placeholder.com/300x200/50c878/ffffff?text=Article+2',
    title: 'Web Design Trends',
    date: 'Published on Dec 10, 2024',
    description: 'Explore the latest trends in web design and user experience.',
    author: 'Jane Smith'
  },
  {
    image: 'https://via.placeholder.com/300x200/ff6b6b/ffffff?text=Article+3',
    title: 'JavaScript Tips',
    date: 'Published on Dec 5, 2024',
    description: 'Essential JavaScript tips and tricks for better coding.',
    author: 'Mike Johnson'
  }
];

const ArticleImage = () => {

  return (
    <div className="articleContainer">
      <div className="cardGroup">
        {articles.map((article, index) => (
          <div key={index} className="card">
            {(
              <>
                <img src={article.image} alt={article.title} className="cardImage" />
                <div className="cardContent">
                  <h3 className="cardHeader">{article.title}</h3>
                  <p className="cardMeta">{article.date}</p>
                  <p className="cardDescription">{article.description}</p>
                  <p className="cardAuthor">By {article.author}</p>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleImage;
