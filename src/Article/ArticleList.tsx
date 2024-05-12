// ArticleList.tsx
import React from 'react';
import { Link } from 'react-router-dom';

interface Article { 
  id: number;
  title: string;
  imageUrl: string;
}

const articles: Article[] = [
  { id: 1, title: 'ヨーロッパ周遊＃1', imageUrl: '/images/korea1.jpg' },
  { id: 2, title: 'ヨーロッパ周遊＃2', imageUrl: '/images/korea1.jpg' },
  { id: 3, title: 'ヨーロッパ周遊＃1', imageUrl: '/images/korea1.jpg' },
  { id: 4, title: 'ヨーロッパ周遊＃1', imageUrl: '/images/korea1.jpg' },
];

const ArticleList: React.FC = () => {
  return (
    <div>
      {articles.map((article) => (
        <div key={article.id} style={{ display: 'inline-block', margin: '10px', width: '380px' }}>
          <Link to={`/article/${article.id}`}>
            <img src={process.env.PUBLIC_URL +  article.imageUrl} alt={article.title} style={{ width: '100%' }} />
            <h3>{article.title}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ArticleList;
