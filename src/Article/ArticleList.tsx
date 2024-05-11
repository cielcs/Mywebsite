// ArticleList.tsx
import React from 'react';
import { Link } from 'react-router-dom';

interface Article { 
  id: number;
  title: string;
  imageUrl: string;
}

const articles: Article[] = [
  { id: 1, title: '記事1', imageUrl: '/images/article1.jpg' },
  { id: 2, title: '記事2', imageUrl: 'https://via.placeholder.com/150' },
  { id: 3, title: '記事3', imageUrl: 'https://via.placeholder.com/150' },
  { id: 4, title: '記事4', imageUrl: 'https://via.placeholder.com/150' },
  { id: 5, title: '記事5', imageUrl: 'https://via.placeholder.com/150' },
  { id: 6, title: '記事6', imageUrl: 'https://via.placeholder.com/150' },
  { id: 7, title: '記事7', imageUrl: 'https://via.placeholder.com/150' },
  { id: 8, title: '記事8', imageUrl: 'https://via.placeholder.com/150' },
  { id: 9, title: '記事9', imageUrl: 'https://via.placeholder.com/150' },
];

const ArticleList: React.FC = () => {
  return (
    <div>
      {articles.map((article) => (
        <div key={article.id} style={{ display: 'inline-block', margin: '10px', width: '200px' }}>
          <Link to={`/article/${article.id}`}>
            <img src={article.imageUrl} alt={article.title} style={{ width: '100%' }} />
            <h3>{article.title}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ArticleList;
