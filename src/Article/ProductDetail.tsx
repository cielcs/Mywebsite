// ArticleDetail.tsx
import React from 'react';
import { useParams,Link } from 'react-router-dom';
import VideoPlayer from '../components/VideoPlayer';
import { styled } from '@mui/system';

interface Product {
  id: number;
  title: string;
  contentLayout: JSX.Element;
}


const Container = styled('div')({
    backgroundColor: 'rgba(20, 27, 30, 0.2)', 
    padding: '10px',
    borderRadius: '0px', // 角を丸める
    backdropFilter: 'blur(0px)', // 背景をぼかす
  });

const products: Product[] = [
  { 
    
    id: 1, 
    title: 'PHANTOMTALE', 
    contentLayout: (
        <div>
            <br></br>
        <img src={'../../'+process.env.PUBLIC_URL+'/images/phantom2.png'} style={{ width: '700px', maxHeight: '350px', objectFit: 'cover' }} />
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <br></br><br></br>
        <h3 style={{ textAlign: 'left',textDecoration: 'underline', textDecorationColor: 'rgba(0, 255, 255, 0.7)',textUnderlineOffset: '8px' }}>概要</h3>
        <p style={{ textAlign: 'left' }}>高専生時代に仲の良い友達と6人で制作したVRアクションRPGゲームです。チームは大まかにメインキャラクター実装班、エネミー実装班、レベルデザイン、音響&Tips制作、チュートリアル作成に分かれて開発を行いましたが、常に勉強会を行い、情報と理解を共有しながら進めました。自分はレベルデザイン全体とゲーム内ギミックの実装、ダメージ処理や当たり判定の実装を主に行いました。VRゴーグル環境を持っていなくても(自宅でも)開発を進めていける役割だったので、ついついサービス残業をしてしまったのが懐かしいですw</p>
        <br></br>
        <h3 style={{ textAlign: 'left',textDecoration: 'underline', textDecorationColor: 'rgba(0, 255, 255, 0.7)',textUnderlineOffset: '8px' }}>使用技術</h3>
        <p style={{ textAlign: 'left' }}>Unreal Engine4,5<br></br>ブループリント</p>
        <br></br>
        <h3 style={{ textAlign: 'left',textDecoration: 'underline', textDecorationColor: 'rgba(0, 255, 255, 0.7)',textUnderlineOffset: '8px' }}>感想</h3>
        <p style={{ textAlign: 'left' }}>初めてのチーム開発だったが、みんなが精一杯頑張ったおかげで最高のゲーム（当社比）を作れたと思う。開発はそれぞれ別の環境で行ったため、統合の段階で引数が違ったりなどのバグが多発して、大変だった。開発経験は少ないけど、ゲーム開発は本当にバグが大量に出ると思う。
        <br></br>また、ブループリントはNode-REDみたいにビジュアルプログラミングで最初のうちは意外と扱いやすかったが、システムが複雑になればなるほど、スパゲッティ化が加速して魔境になるのでc++を使ったほうがいいと思った。しかし、コーディングに抵抗のあるメンバーもブループリントなら自ら勉強するようになったのは本当に素晴らしいと思った。</p>
        <br></br>
        <img src={'../../'+process.env.PUBLIC_URL+'/images/bluep.png'} style={{ width: '500px', maxHeight: '350px', objectFit: 'cover' }} />
        <p style={{ textAlign: 'left' }}>To members:みんなありがとう。元気だといいね。因みに俺は課題が多すぎて元気じゃない()</p>



        <ul style={{ padding: 0, textAlign: 'center', margin: '0 auto', maxWidth: '800px', lineHeight: '2.5' }}>
          <div>
            <VideoPlayer videoId='VsHFjEQZr2E' headerText="" Description="ゲームのデモ映像です。よかったら見てね！"/>
          </div>
        </ul>
      </div>
      </div>
    ) 
  },
  { 
    id: 2, 
    title: 'BERTを用いたSNS上の文章取得&分類', 
    contentLayout: (
        <div>
        <br></br>
    <img src={'../../'+process.env.PUBLIC_URL+'/images/twitter.png'} style={{ width: '700px', maxHeight: '350px', objectFit: 'cover' }} />
  <div style={{ maxWidth: '800px', margin: '0 auto' }}>
    <br></br><br></br>
    <h3 style={{ textAlign: 'left',textDecoration: 'underline', textDecorationColor: 'rgba(0, 255, 255, 0.7)',textUnderlineOffset: '8px' }}>概要</h3>
    <p style={{ textAlign: 'left' }}>SNSである特定の話題を調べるときにあなたはどうするだろう？そう、きっとキーワードをやハッシュタグで検索するだろう。しかし、世の中にはキーワードを付けずに内容をツイートすることが頻繁にあると思う。。そんな情報にアクセスしたくないか？人間は意外とキーワードがなくても相手が何についてツイートしてるか意外とわかるよね？そこで、#検索で得た内容にラベルを付けて、分類機を作ることで新たに取得したラベルの無い文章が何について話しているのかわかるのではないか。そんな思いで遊んでみた。</p>
    <br></br>
    <h3 style={{ textAlign: 'left',textDecoration: 'underline', textDecorationColor: 'rgba(0, 255, 255, 0.7)',textUnderlineOffset: '8px' }}>使用技術</h3>
    <p style={{ textAlign: 'left' }}>Transformer<br></br>BERT<br></br>Python<br></br>TwitterAPI<br></br>csv</p>
    <br></br>
    <h3 style={{ textAlign: 'left',textDecoration: 'underline', textDecorationColor: 'rgba(0, 255, 255, 0.7)',textUnderlineOffset: '8px' }}>感想</h3>
    <p style={{ textAlign: 'left' }}>結果としては特徴的なキーワードを含まない文章、つまりルールベースでは得られない文章でも何について話しているのかを分類することができた。もちろんできない文章もあるし、誤った判断もした。この時はまだでかいモデルが強くなるって分かっていなかったから、GPTとか使ってリベンジしたい。<br></br>この開発を通して、以下のことを副産物的に学んだ。Transformerのなんとなくの理解と実装、APIの使い方、自動化の実装、正規表現、csvデータの扱い方。</p>
    <br></br>
      </div></div>
    ) 
  },
  { 
    id: 3, 
    title: 'Variational Autoencodeによる異常検知', 
    contentLayout: (
        <div>
        <br></br>
    <img src={'../../'+process.env.PUBLIC_URL+'/images/vae.png'} style={{ width: '700px', maxHeight: '350px', objectFit: 'cover' }} />
  <div style={{ maxWidth: '800px', margin: '0 auto' }}>
    <br></br><br></br>
    <h3 style={{ textAlign: 'left',textDecoration: 'underline', textDecorationColor: 'rgba(0, 255, 255, 0.7)',textUnderlineOffset: '8px' }}>概要</h3>
    <p style={{ textAlign: 'left' }}>光沢感を持つ製品の傷を検知するために生成モデルのVAEを用いた。詳細は後日。</p>
    <br></br>
    <h3 style={{ textAlign: 'left',textDecoration: 'underline', textDecorationColor: 'rgba(0, 255, 255, 0.7)',textUnderlineOffset: '8px' }}>使用技術</h3>
    <p style={{ textAlign: 'left' }}>Python<br></br>Tensorflow<br></br>VAE<br></br>OpenCV<br></br>c++</p>
    <br></br>
    <h3 style={{ textAlign: 'left',textDecoration: 'underline', textDecorationColor: 'rgba(0, 255, 255, 0.7)',textUnderlineOffset: '8px' }}>感想</h3>
    <p style={{ textAlign: 'left' }}>後日</p>
    <br></br>
      </div></div>
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

const ProductDetail: React.FC = () => {
    const { id } = useParams<{ id?: string }>();

    const product = id ? products.find(product => product.id === parseInt(id)) : undefined;
    
    if (!product) return <div>記事が見つかりません。</div>;

    return (
      <div style={{ padding: '100px' }}>
        <Container>
        <h2 style={{fontFamily: "Kdam Thmor Pro" ,textDecoration: 'underline', textDecorationColor: 'rgba(0, 255, 255, 0.7)',textUnderlineOffset: '8px'}}>{product.title}</h2>
        {product.contentLayout}
        </Container>
        {/* {product.id !== 1 && (
            <Link to={`/article/${product.id - 1}`}style={{ marginRight: '10px' }}>前のページへ</Link>
          )}
          <Link to="/" style={{ marginRight: '10px' }}  >メインに戻る</Link>
        {product.id !== products.length && (
          <Link to={`/article/${product.id + 1}`}style={{ marginRight: '10px' }}>次のページへ</Link>
        )} */}
      </div>
    );
};

export default ProductDetail;
