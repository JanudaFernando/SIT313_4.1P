import React from "react";
import "./components.css";
import { faker } from "@faker-js/faker";

// Generate fake articles using Faker.js
const generateFakeArticles = (count) => {
  return Array.from({ length: count }, (_, index) => ({
    image: `https://picsum.photos/300/200?random=${index + 1}`,
    title: faker.lorem.sentence({ min: 3, max: 6 }),
    date: `Published on ${faker.date.past().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })}`,
    description: faker.lorem.paragraph({ min: 2, max: 4 }),
    author: faker.person.fullName()
  }));
};

// Generate 3 fake articles
const articles = generateFakeArticles(3);

const ArticleImage = () => {

  return (
    <div className="articleContainer">
      <div className="cardGroup">
        {articles.map((article, index) => (
          <div key={index} className="card">
            <>
              <img src={article.image} alt={article.title} className="cardImage" />
              <div className="cardContent">
                <h3 className="cardHeader">{article.title}</h3>
                <p className="cardMeta">{article.date}</p>
                <p className="cardDescription">{article.description}</p>
                <p className="cardAuthor">By {article.author}</p>
              </div>
            </>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleImage;
