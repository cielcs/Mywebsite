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
        <p style={{ textAlign: 'left' }}>高専生時代に仲の良い友達と6人で制作したVRアクションRPGゲームです。チームは大まかにメインキャラクター実装班、エネミー実装班、レベルデザイン、音響&Tips制作、チュートリアル作成に分かれて開発を行いましたが、常に勉強会を行い、情報と理解を共有しながら進めました。自分はレベルデザインの全てとゲーム内ギミックの実装、ダメージ処理や当たり判定の実装を主に行いました。VRゴーグル環境を持っていなくても(自宅でも)開発を進めていける役割だったので、ついついサービス残業をしてしまったのが懐かしいですw</p>
        <br></br>
        <h3 style={{ textAlign: 'left',textDecoration: 'underline', textDecorationColor: 'rgba(0, 255, 255, 0.7)',textUnderlineOffset: '8px' }}>使用技術</h3>
        <p style={{ textAlign: 'left' }}>Unreal Engine4,5<br></br>ブループリント</p>
        <br></br>
        <h3 style={{ textAlign: 'left',textDecoration: 'underline', textDecorationColor: 'rgba(0, 255, 255, 0.7)',textUnderlineOffset: '8px' }}>感想</h3>
        <p style={{ textAlign: 'left' }}>初めてのチーム開発だったが、みんなが精一杯頑張ったおかげで最高のゲーム（当社比）を作れたと思う。開発はそれぞれ別の環境で行ったため、統合の段階で引数が違ったりなどのバグが多発して、大変だった。開発経験は少ないけど、ゲーム開発は本当にバグが大量に出ると思う。
        <br></br>また、ブループリントはNode-REDみたいにビジュアルプログラミングで最初のうちは意外と扱いやすかったが、システムが複雑になればなるほど、スパゲッティ化が加速して魔境になるのでc++を使ったほうがいいと思った。しかし、コーディングに抵抗のあるメンバーもブループリントなら自ら勉強するようになったのは本当に素晴らしいと思った。</p>
        <br></br>
        <img src={'../../'+process.env.PUBLIC_URL+'/images/bluep.png'} style={{ width: '500px', maxHeight: '350px', objectFit: 'cover' }} />
        <p style={{ textAlign: 'left' }}>To members:みんなありがとう。元気だといいね。因みに俺は課題が多すぎて元気じゃない。</p>



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
