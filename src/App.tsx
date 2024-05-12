import React, { useState, useEffect,} from 'react';
import {useTranslation} from 'react-i18next'
import './App.css';
import './lungage/configs'
import ParticleBackground from './components/Particlebackground';
import VideoPlayer from './components/VideoPlayer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ArticleList from './Article/ArticleList';
import ArticleDetail from './Article/ArticleDetail';

function App() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const {t,i18n} = useTranslation();
  const changeLanguage = (lng:string) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX-15, y: e.clientY-15 });
    };

    document.addEventListener('mousemove', updateCursorPosition);

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);

  return (
    <div className="App">
      <div id="wrapper">
      <meta name="viewport" content="width=device-width, initial-scale=0.8"></meta>
        <h1 style={{ marginTop: '80px',fontFamily: "Kdam Thmor Pro"}}>{t('title')}</h1>
        <button onClick={() => changeLanguage('en')}>English</button>
        <button onClick={() => changeLanguage('ja')}>Japanese</button>
        <ul style={{ listStyleType: 'none', padding: 0, textAlign: 'center', margin: '0 auto', lineHeight: '1.5' }}>
          1st year master course student(NAIST)<br/>🐈‍⬛<a href="https://github.com/cielcs">Github</a><br/>
          miyagawa.shota.mw3@naist.ac.jp</ul>
      <div className="Education">
        <h2 style={{ marginTop: '80px',fontFamily: "Kdam Thmor Pro"}}>{t('education.title')}</h2>
        <ul style={{ listStyleType: 'none', padding: 0, textAlign: 'left', margin: '0 auto', lineHeight: '2.5' }}>
          <li>{t('education.text1')}</li>
            <ul><li>{t('education.lab')}{t('education.labText1')}</li></ul>
          <li>{t('education.text2')}</li>
            <ul><li>{t('education.lab')}{t('education.labText1')}</li></ul>
          <li>{t('education.text3')}<a href={t('education.link')}>{t('education.description')}</a></li>
            <ul><li>{t('education.lab')}<a href={t('education.lablink')}>{t('education.labText')}</a></li></ul>
        </ul>
      </div>
      <div className='Research Interests'>
        <h2 style={{ marginTop: '80px',fontFamily: "Kdam Thmor Pro"}}>{t('research_interests.title')}</h2>
        <ul style={{ listStyleType: 'none', padding: 0, textAlign: 'left', margin: '0 auto', lineHeight: '2.5' }}>
          <li>{t('research_interests.interests')} <br/></li>
        </ul>
      </div>
      <div className='Certification'>
        <h2 style={{ marginTop: '80px',fontFamily: "Kdam Thmor Pro"}}>{t('certifications.title')}</h2>
        <ul style={{ padding: 0, textAlign: 'left', margin: '0 auto', lineHeight: '2.5' }}>
          {(t('certifications.items', { returnObjects: true })as any[]).map((item: string, index: number) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
      </div>
      <div className='Works'>
        <h2 style={{ marginTop: '80px',fontFamily: "Kdam Thmor Pro"}}>{t('works.title')}</h2>
        <ul style={{ padding: 0, textAlign: 'center', margin: '0 auto', maxWidth: '800px', lineHeight: '2.5' }}>
          <div>
            <VideoPlayer videoId={t('works.videoId')} headerText={t('works.headerText')} Description={t('works.description')}/>
          </div>
        </ul>
      </div>
      <div className='Diary'>
      <h2 style={{ marginTop: '0px',fontFamily: "Kdam Thmor Pro"}}>Diary</h2><br></br>
        <ul style={{ padding: 0, textAlign: 'center', margin: '0 auto', maxWidth: '800px', lineHeight: '2.5' }}>
        <Router>
          <Routes>
            <Route path="/" element={<ArticleList />} />
            <Route path="/article/:id" element={<ArticleDetail />} />
          </Routes>
        </Router>
        </ul>
      </div>
      </div>
      <div className="cursor" style={{ left: cursorPosition.x, top: cursorPosition.y }} />
      <ParticleBackground></ParticleBackground> 
    </div>
  );
}

export default App;
