// ArticleList.tsx
import React from 'react';
import { Link } from 'react-router-dom';

interface Article { 
  id: number;
  title: string;
  imageUrl: string;
}

const articles: Article[] = [
  { id: 1, title: 'ヨーロッパ周遊＃1', imageUrl: '/images/paris1.jpeg' },
  { id: 2, title: 'ヨーロッパ周遊＃2', imageUrl: '/images/korea1.jpg' },
  { id: 3, title: 'ヨーロッパ周遊＃1', imageUrl: '/images/korea1.jpg' },
  { id: 4, title: 'ヨーロッパ周遊＃1', imageUrl: '/images/korea1.jpg' },
];

// const ArticleList: React.FC = () => {
//   return (
//     <div>
//       {articles.map((article) => (
//         <div key={article.id} style={{ display: 'inline-block', margin: '10px', width: '380px' }}>
//           <Link to={`/article/${article.id}`}>
//             <img src={process.env.PUBLIC_URL +  article.imageUrl} alt={article.title} style={{ width: '100%' }} />
//             <h4>{article.title}</h4>
//           </Link>
//         </div>
//       ))}
//     </div>
//   );
// };
const ArticleList: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {articles.map((article) => (
        <div key={article.id} style={{ margin: '10px', width: '210px', textAlign: 'center', border: '1px solid #ccc', borderRadius: '5px' }}>
          <Link to={`/article/${article.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{ width: '210px', height: '210px', overflow: 'hidden', borderRadius: '5px 5px 0 0' }}>
              <img src={process.env.PUBLIC_URL +  article.imageUrl} alt={article.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <h4 style={{ margin: '1px 0 0 0' }}>{article.title}</h4>
          </Link>
        </div>
      ))}
    </div>
  );
};



export default ArticleList;
