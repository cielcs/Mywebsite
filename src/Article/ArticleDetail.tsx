// ArticleDetail.tsx
import React from 'react';
import { useParams,Link } from 'react-router-dom';

interface Article {
  id: number;
  title: string;
  contentLayout: JSX.Element;
}

const articles: Article[] = [
  { 
    id: 1, 
    title: 'ヨーロッパ周遊＃1', 
    contentLayout: (
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <br></br><br></br>
        <h3 style={{ textAlign: 'left' }}>旅の背景</h3>
        <p style={{ textAlign: 'left' }}>旅がしたい。新しい世界観を得たい。そんな気持ちで海外旅行をすることにした。旅行先はアジア諸国、アメリカ、リゾート系そしてヨーロッパなど色々な選択肢が考えられたが、やはり街の景色や建物に異世界味を一番感じるヨーロッパの国々を回ることにした。（筆者は大のファンタジー好きである。ちなみに一番好きな異世界アニメは無職転生である。あれはもう「人生」って感じの作品だ。）</p>
        <br></br>
        <h3 style={{ textAlign: 'left' }}>スケジュールとか</h3>
        <p style={{ textAlign: 'left' }}>期間は2023/03/04 - 2023/03/24の20日間です。<br></br>
        ルートはこんな感じです。名古屋→韓国→ポーランド（乗り換え）→フランス→ドイツ→スイス→イタリア<br></br>
        ちなみに韓国に寄っているのは成田からエチオピアやドバイなどを経由する経路よりもトータルで見たら航空券が安かったからです。この当時はコロナウイルスの影響もあって、日本からの国際便が通常時と比べて少なかった。</p>
        <img src={'../../'+process.env.PUBLIC_URL+'/images/image.png'} style={{ width: '450px' }} alt="root"></img>
        <p style={{ textAlign: 'left' }}>青色:✈️ 赤色:🚌 黒色: 🚃<br></br>
        基本都市間の移動には格安高速バスのFlix Busを利用しました。本当に安くて、お金があまりない学生には最高のバスでした。
        しかし、ヴェネツィア-ローマ間は、精神的にも肉体的にも限界だったためバス代を諦めて、高速鉄道を利用しました。詳細は後ほど書こうと思います。<br></br><br></br>
        次回、フランス到着まで
        </p>
        <br></br><br></br><br></br>
      </div>
    ) 
  },
  { 
    id: 2, 
    title: 'ヨーロッパ周遊＃2', 
    contentLayout: (
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <br></br><br></br>
        <h3 style={{ textAlign: 'left' }}>仁川空港&ソウル</h3>
        <p style={{ textAlign: 'left' }}>お昼頃に仁川国際空港へ着陸し、入国検査を受けました。入国検査の待機列では若い女性で溢れかえってました。ちなみにパスポートを確認する人がカッコよかったですw</p>
        <p style={{ textAlign: 'left' }}>夜ご飯は明洞にあるお店でサムギョプサルを食べました。店員さんが日本語をかなり上手に喋っていて驚きました。しかもフレンドリーな対応をしてくださって旅行初っ端から気分が最高でした。感謝します。味に関してはノーコメントでお願いします。ただ、お肉は値段によって味の違いが顕著に出るのでなるべく高い店を選んだ方がいいなって思いました。</p>
        <img src={'../../'+process.env.PUBLIC_URL+'/images/samu.jpg'} style={{ width: '450px' }} alt="root"></img>
        <p style={{ textAlign: 'left' }}>明洞は原宿みたいな感じで若者の街っていう感じがしました。因みに原宿に行ったことないです。 でもこれだけは絶対に言えます。コスメやアイドルが好きな人には最高な空間に違いないです。</p>
        <img src={'../../'+process.env.PUBLIC_URL+'/images/korea1.jpg'} style={{ width: '450px' }} alt="root"></img>
        <br></br><br></br><br></br>
        <h3 style={{ textAlign: 'left' }}>フランスに到着</h3>
        <p style={{ textAlign: 'left' }}>フランスのシャルルドゴール空港に到着しました。因みに入国した国はワルシャワです。EUでは一回入国するとEU国間での移動が検査なしで行えます。<br></br>
        ホテルの最寄駅に行くために、券売機の操作に四苦八苦していたら黒人のお兄さんが急に現れて、内心かなり焦りました。しかし、そのお兄さんは券売機の使い方やバスで行った方が速いよなどいろいろ親切に教えてくれました。正直、フランスの切符の買い方はまじで最初意味が分からなかったので、本当にありがとうございます！<br></br><br></br>
        次回、フランス探索
        </p>
        
        <br></br><br></br><br></br>
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
        {article.id !== 1 && (
            <Link to={`/article/${article.id - 1}`}style={{ marginRight: '10px' }}>前のページへ</Link>
          )}
          <Link to="/" style={{ marginRight: '10px' }}  >メインに戻る</Link>
        {article.id !== articles.length && (
          <Link to={`/article/${article.id + 1}`}style={{ marginRight: '10px' }}>次のページへ</Link>
        )}
      </div>
    );
};

export default ArticleDetail;
