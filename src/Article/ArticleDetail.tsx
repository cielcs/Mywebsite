// ArticleDetail.tsx
import React from 'react';
import { useParams } from 'react-router-dom';

interface Article {
  id: number;
  title: string;
  contentLayout: JSX.Element;
}
// {process.env.PUBLIC_URL + "/images/root.jpeg"}
const articles: Article[] = [
  { 
    id: 1, 
    title: 'ヨーロッパ周遊＃1', 
    contentLayout: (
      <div>
        <h3 style={{ textAlign: 'left' }}>スケジュールとか</h3>
        <p style={{ textAlign: 'left' }}>2023/03/04 - 2023/03/24の20日間ヨーロッパ周遊してきました。<br></br>
        ルートはこんな感じです。名古屋→韓国→ポーランド（乗り換え）→フランス→ドイツ→スイス→イタリア</p>
        <img src={'../../'+process.env.PUBLIC_URL+'/images/image.png'} style={{ width: '450px' }} alt="root"></img>
        <p style={{ textAlign: 'left' }}>青色:✈️ 赤色:🚌 黒色: 🚃<br></br>
        基本都市間の移動には格安高速バスのFlix Busを利用しました。本当に安くて、お金があまりない学生には最高のバスでした。
        しかし、ヴェネツィア-ローマ間は、精神的にも肉体的にも限界だったためバス代を諦めて、高速鉄道を利用しました。Flix Busの感想は後ほど書こうと思います。
        </p>
      </div>
    ) 
  },
  { 
    id: 2, 
    title: '記事2', 
    contentLayout: (
      <div>
        <h3>記事2のタイトル</h3>
        <p>記事2の内容がここに入ります。</p>
        <p>記事2の詳細情報がここに入ります。</p>
        <img src={process.env.PUBLIC_URL + "/images/image.png"} style={{ width: '450px' }} alt="root"></img>
        <img src={process.env.PUBLIC_URL + "/images/image.png"} style={{ width: '300px' }} alt="root"></img>
        <img src={process.env.PUBLIC_URL + "/images/paris1.jpeg"} style={{ width: '450px' }} alt="root"></img>
      </div>
    ) 
  },
  { 
    id: 3, 
    title: '記事3', 
    contentLayout: (
      <div>
        <h3>記事3のタイトル</h3>
        <p>記事3の内容がここに入ります。</p>
        <p>記事3の詳細情報がここに入ります。</p>
      </div>
    ) 
  },
  { 
    id: 4, 
    title: '記事4', 
    contentLayout: (
      <div>
        <h3>記事4のタイトル</h3>
        <p>記事4の内容がここに入ります。</p>
        <p>記事4の詳細情報がここに入ります。</p>
      </div>
    ) 
  },
];

const ArticleDetail: React.FC = () => {
    const { id } = useParams<{ id?: string }>();

    const article = id ? articles.find(article => article.id === parseInt(id)) : undefined;
    
    if (!article) return <div>記事が見つかりません。</div>;

    return (
      <div style={{ padding: '20px' }}>
        <h2>{article.title}</h2>
        {article.contentLayout}
      </div>
    );
};

export default ArticleDetail;
