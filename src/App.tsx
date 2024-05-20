// App.tsx
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./App.css";
import "./lungage/configs";
import ParticleBackground from "./components/Particlebackground";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import ArticleList from "./Article/ArticleList";
import ArticleDetail from "./Article/ArticleDetail";

function App() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  const [topPosition, setTopPosition] = useState(0);
  const scrollFactor = 0.5;

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX - 11, y: e.clientY - 11 });
    };
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const newposition = scrollTop*scrollFactor;
      setTopPosition(newposition);
    };

    document.addEventListener("mousemove", updateCursorPosition);
    window.addEventListener('scroll', handleScroll);
    

    return () => {
      document.removeEventListener("mousemove", updateCursorPosition);
      window.removeEventListener('scroll', handleScroll);
    
    };
  }, []);

  return (
    <div className="App">
      <div className="vertical-line" style={{ top: `${topPosition}px` }}></div>
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
