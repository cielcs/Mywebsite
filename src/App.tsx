

import React, { useState, useEffect } from 'react';
import './App.css';
import ParticleBackground from './components/Particlebackground';
import VideoPlayer from './components/VideoPlayer';

function App() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

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
      <h1 style={{ marginTop: '80px',fontFamily: "Kdam Thmor Pro"}}>Shota Miyagawa</h1>
      <ul style={{ listStyleType: 'none', padding: 0, textAlign: 'center', margin: '0 auto', maxWidth: '1000px', lineHeight: '1.5' }}>
        1st year master course student(NAIST)<br/>🐈‍⬛<a href="https://github.com/cielcs">Github</a><br/>
        miyagawa.shota.mw3@naist.ac.jp</ul>
      <div className="Education">
        <h2 style={{ marginTop: '80px',fontFamily: "Kdam Thmor Pro"}}>Education</h2>
        <ul style={{ listStyleType: 'none', padding: 0, textAlign: 'left', margin: '0 auto', maxWidth: '1000px', lineHeight: '2.5' }}>
          <li>2017 - 2022 : National Institute of Technology, Suzuka College(Electronic and Information Engineering)<br/></li>
          <ul><li>Laboratory : Aoyama Lab.</li></ul>
          <li>2022 - 2024 : National Institute of Technology, Suzuka College(Advanced Engineering Course)</li>
          <ul><li>Laboratory : Aoyama Lab.</li></ul>
          <li>2024 - : <a href="https://www.naist.jp">Nara Institute of Science and Technology</a>(Information Science)<br /></li>
          <ul><li>Laboratory : <a href="http://isw3.naist.jp/Research/ai-mi-ja.html">Mathematical Informatics Lab.</a></li></ul>
        </ul>
      </div>
      <div className='Research Interests'>
        <h2 style={{ marginTop: '80px',fontFamily: "Kdam Thmor Pro"}}>Research Interests  </h2>
        <ul style={{ listStyleType: 'none', padding: 0, textAlign: 'left', margin: '0 auto', maxWidth: '1000px', lineHeight: '2.5' }}>
          <li>Deep Learning, Anomaly detection, Generative model, Image Processing, <br/></li>
        </ul>
      </div>
      <div className='Certification'>
        <h2 style={{ marginTop: '80px',fontFamily: "Kdam Thmor Pro"}}>Certifications  </h2>
        <ul style={{ padding: 0, textAlign: 'left', margin: '0 auto', maxWidth: '1000px', lineHeight: '2.5' }}>
          <li>Information Security Management Examination(SG)<br/></li>
          <li>TOEIC Listening & Reading Test 795<br/></li>
        </ul>
      </div>
      <div className='Works'>
        <h2 style={{ marginTop: '80px',fontFamily: "Kdam Thmor Pro"}}>Works  </h2>
        <ul style={{ padding: 0, textAlign: 'center', margin: '0 auto', maxWidth: '1000px', lineHeight: '2.5' }}>
          <div>
            <VideoPlayer videoId="VsHFjEQZr2E" headerText="PHANTOM TALE" Description='このゲームはPHANTOMTALEという名前のゲームで高専4年生の時に仲のいい友達と開発しました。'/>
          </div>
        </ul>
      </div>
      </div>
      <div className="cursor" style={{ left: cursorPosition.x, top: cursorPosition.y }} />
      <ParticleBackground></ParticleBackground> 
    </div>
  );
}

export default App;
