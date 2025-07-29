import React from "react";
import "./components.css";
import { faker } from '@faker-js/faker';

// Generate fake tutorials using Faker.js
const generateFakeTutorials = (count) => {
  return Array.from({ length: count }, (_, index) => ({
    image: `https://picsum.photos/300/200?random=${index + 10}`,
    title: `${faker.hacker.noun()} ${faker.lorem.words(2)} Tutorial`,
    date: `Published on ${faker.date.past().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })}`,
    description: `Learn ${faker.hacker.phrase()} in this comprehensive tutorial.`,
    author: faker.person.fullName()
  }));
};

// Generate 3 fake tutorials
const articles = generateFakeTutorials(3);

const TutorialImage = () => {

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

export default TutorialImage;
