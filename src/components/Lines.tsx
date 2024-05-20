// Lines.tsx

import React, { useEffect, useState } from 'react';
import './Lines.css';

export const VerticalLineUp: React.FC = () => {
  const [topPosition, setTopPosition] = useState(0);
  const [topPosition1, setTopPosition1] = useState(0);
  const scrollFactor = 0.8;
  const scrollFactor1 = 0.6;

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setTopPosition(scrollTop * scrollFactor);
    };
    const handleScroll1 = () => {
        const scrollTop1 = window.scrollY || document.documentElement.scrollTop;
        setTopPosition1(scrollTop1 * scrollFactor1);
      };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleScroll1);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleScroll1);
    };
  }, []);

  return (
    <div>
    <div className="verticalright-line" style={{ top: `${topPosition1}px` }}></div>
    <div className="verticalright-line2" style={{ top: `${topPosition}px` }}></div>

    <div className="verticalleft-line" style={{ top: `${topPosition1}px` }}></div>
    <div className="verticalleft-line3" style={{ top: `${topPosition}px` }}></div>
    </div>
  );
};

export const VerticalLineDown: React.FC = () => {
  const [bottomHeight, setBottomHeight] = useState(0);
  const [bottomHeight1, setBottomHeight1] = useState(0);
  const scrollFactor = 0.8;
  const scrollFactor1 = 0.7;

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPosition = window.scrollY || document.documentElement.scrollTop;
      const newHeight = (documentHeight - windowHeight - scrollPosition) * scrollFactor;
      setBottomHeight(newHeight);
    };

    const handleScroll1 = () => {
        const windowHeight1 = window.innerHeight;
        const documentHeight1 = document.documentElement.scrollHeight;
        const scrollPosition1 = window.scrollY || document.documentElement.scrollTop;
        const newHeight1 = (documentHeight1 - windowHeight1 - scrollPosition1) * scrollFactor1;
        setBottomHeight1(newHeight1);
      };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleScroll1);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleScroll1);
    };
  }, []);

  return (
    <div>
    <div className="verticalright-line" style={{ top: `${bottomHeight1}px` }}></div>
    <div className="verticalright-line3" style={{ top: `${bottomHeight}px` }}></div>
    <div className="verticalleft-line" style={{ top: `${bottomHeight1}px` }}></div>
    <div className="verticalleft-line2" style={{ top: `${bottomHeight}px` }}></div>
    </div>
  );
};
