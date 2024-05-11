// ArticleDetail.tsx
import React from 'react';
import { useParams } from 'react-router-dom';

interface Article {
  id: number;
  title: string;
  content: string;
}

const ArticleDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // 仮の記事データ
  const article: Article = {
    id: parseInt(id),
    title: `記事${id}`,
    content: '記事の内容がここに入ります。',
  };

  return (
    <div>
      <h2>{article.title}</h2>
      <p>{article.content}</p>
    </div>
  );
};

export default ArticleDetail;
