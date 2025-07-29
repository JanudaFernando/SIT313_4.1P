import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import NavBar from "./components/NavBar";
import MainImage from "./components/MainImage";
import "./components/components.css";
import ArticleImage from "./components/ArticleImage";
import ButtonArticle from "./components/ButtonArticle";
import TutorialImage from "./components/TutorialImage";
import EmailSubscribe from "./components/EmailSubscribe";
import Footer from "./components/Footer";
import ButtonTutorial from "./components/ButtonTutorial";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <NavBar />
    <MainImage />
    <h1 className="featuredTitle">Featured Articles</h1>
    <ArticleImage />
    <ButtonArticle />
    <h1 className="featuredTitle">Featured Tutorials</h1>
    <TutorialImage />
    <ButtonTutorial />
    <EmailSubscribe />
    <Footer/>
  </div>
);
