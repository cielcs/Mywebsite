// App.tsx
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./App.css";
import "./lungage/configs";
import ParticleBackground from "./components/Particlebackground";
import { VerticalLineUp, VerticalLineDown } from './components/Lines';
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import ArticleList from "./Article/ArticleList";
import ArticleDetail from "./Article/ArticleDetail";
import ProductDetail from "./Article/ProductDetail";


function App() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX - 11, y: e.clientY - 11 });
    };
    document.addEventListener("mousemove", updateCursorPosition);
   
    

    return () => {
      document.removeEventListener("mousemove", updateCursorPosition);
    
    };
  }, []);

  return (
    <div className="App">
      <VerticalLineUp />
      <VerticalLineDown />
      <div className="verticaltop_line"></div>
      <div className="verticalbottom_line"></div>
      <div className="verticaltop_line2"></div>
      <div className="verticalbottom_line2"></div>
      <div id="wrapper">  
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <h1 style={{ marginTop: "80px", fontFamily: "Kdam Thmor Pro" }}>
          {t("title")}
        </h1>
        <button onClick={() => changeLanguage("en")}>English</button>
        <button onClick={() => changeLanguage("ja")}>Japanese</button>
        <ul
          style={{
            listStyleType: "none",
            padding: 0,
            textAlign: "center",
            margin: "0 auto",
            maxWidth: "800px",
            lineHeight: "1.5",
          }}
        >
          1st year master course student(NAIST)
          <br />
          🐈‍⬛<a href="https://github.com/cielcs">Github</a>
          <br />
          miyagawa.shota.mw3@naist.ac.jp
        </ul>

        <Router>
          <Routes>
            <Route path="/" element={<ArticleList />} />
            <Route path="/article/:id" element={<ArticleDetail />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
        </Router>
      </div>
      <div
        className="cursor"
        style={{ left: cursorPosition.x, top: cursorPosition.y }}
      />
      <ParticleBackground></ParticleBackground>
    </div>
  );
}

export default App;
