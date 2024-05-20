// ArticleList.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardMedia, Typography, Grid, CardActionArea } from '@mui/material';
import { styled } from '@mui/system';

interface Article { 
  id: number;
  title: string;
  imageUrl: string;
  description: string;
}
interface Products { 
  id: number;
  title: string;
  imageUrl: string;
  description: string;
}


const StyledCard = styled(Card)({
  width: '300px',
  transition: 'transform 0.2s ease-in-out',
  boxShadow: '0 4px 8px rgba(0, 255, 255, 0.5)', // 白い影を追加
  backgroundColor: 'rgba(20, 27, 30, 0.3)', // カード自体の背景色を少し明るめに設定
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 8px 16px rgba(0, 255, 255, 0.5)', // ホバー時に影を強くする
  },
});

const HorizontalCard = styled(Card)({
  display: 'flex',
  width: '730px',
  transition: 'transform 0.2s ease-in-out',
  boxShadow: '0 4px 8px rgba(0, 255, 255, 0.5)', // 白い影を追加
  backgroundColor: 'rgba(20, 27, 30, 0.3)', // カード自体の背景色を少し明るめに設定
  '&:hover': {
    // transform: 'scale(1.02)',
    // boxShadow: '0 8px 16px rgba(0, 255, 255, 0.5)', // ホバー時に影を強くする
    backgroundColor: 'rgba(120, 127, 130, 0.3)',
  },
});

const Container = styled('div')({
  backgroundColor: 'rgba(20, 27, 30, 0.2)', 
  padding: '30px',
  borderRadius: '0px', // 角を丸める
  backdropFilter: 'blur(0px)', // 背景をぼかす
});

const articles: Article[] = [
  { id: 1, title: 'Europe＃1', imageUrl: '/images/paris1.jpeg',description: '旅の背景、スケジュールとか'},
  { id: 2, title: 'Europe＃2', imageUrl: '/images/korea1.jpg',description: '韓国に経由して、いざフランス' },
  { id: 3, title: 'Europe＃1', imageUrl: '/images/effe.jpg',description: 'xxxxxxxxxx' },
  // { id: 4, title: 'Europe＃1', imageUrl: '/images/oru.jpg' ,description: 'xxxxxxxxxx'},
];
const products: Products[] = [
  { id: 1, title: 'PHANTOMTALE', imageUrl: '/images/phantom2.png',description: '-高専4年性の時の友達と制作したVRゲーム-'},
  { id: 2, title: 'BERTを用いたSNS上の文章取得&分類', imageUrl: '/images/twitter.png',description: '-SNS上の投稿を判別するシステム-' },
  { id: 3, title: 'Variational Autoencodeによる異常検知', imageUrl: '/images/vae.png',description: '-光沢を持つ製品の異常を確立的生成モデルを用いて検知-' },
  // { id: 4, title: 'Europe＃1', imageUrl: '/images/oru.jpg' ,description: 'xxxxxxxxxx'},
];


const ArticleList: React.FC = () => {
  const { t } = useTranslation();
  return (
    
    <div className="MainPage">
      <div className="Education">
      <h2 style={{ marginTop: '80px',fontFamily: "Kdam Thmor Pro"}}></h2>
        <ul style={{ listStyleType: 'none', padding: 0, textAlign: 'left', margin: '0 auto',maxWidth: '800px', lineHeight: '2.5' }}>
        <Container>
        <h2 style={{ marginTop: '0px',fontFamily: "Kdam Thmor Pro", textDecoration: 'underline', textDecorationColor: 'rgba(0, 255, 255, 0.7)',textUnderlineOffset: '8px'}}>{t('education.title')}</h2>
          <li>{t('education.text1')}</li>
            <ul><li>{t('education.lab')}{t('education.labText1')}</li></ul>
          <li>{t('education.text2')}</li>
            <ul><li>{t('education.lab')}{t('education.labText1')}</li></ul>
          <li>{t('education.text3')}<a href={t('education.link')}>{t('education.description')}</a></li>
            <ul><li>{t('education.lab')}<a href={t('education.labLink')}>{t('education.labText')}</a></li></ul>
         </Container>
        </ul>
        
      </div>
      <div className='Research Interests'>
      <h2 style={{ marginTop: '80px',fontFamily: "Kdam Thmor Pro"}}></h2>
        <ul style={{ listStyleType: 'none', padding: 0, textAlign: 'left', margin: '0 auto', maxWidth: '800px',lineHeight: '2.5' }}>
        <Container>
        <h2 style={{ marginTop: '0px',fontFamily: "Kdam Thmor Pro", textDecoration: 'underline', textDecorationColor: 'rgba(0, 255, 255, 0.7)',textUnderlineOffset: '8px'}}>{t('research_interests.title')}</h2>
          <li>{t('research_interests.interests')} <br/></li>
        </Container>
        </ul>
      </div>
      <div className='Certification'>
      <h2 style={{ marginTop: '80px',fontFamily: "Kdam Thmor Pro"}}></h2>
        
        <ul style={{ padding: 0, textAlign: 'left', margin: '0 auto',maxWidth: '800px', lineHeight: '2.5' }}>
        <Container>
          <h2 style={{ marginTop: '0px',fontFamily: "Kdam Thmor Pro", textDecoration: 'underline', textDecorationColor: 'rgba(0, 255, 255, 0.7)',textUnderlineOffset: '8px'}}>{t('certifications.title')}</h2>
          {(t('certifications.items', { returnObjects: true })as any[]).map((item: string, index: number) => (
                <li key={index}>{item}</li>
            ))}
            </Container>
        </ul>
      </div>
      <div className='Works'>
      <h2 style={{ marginTop: '80px',fontFamily: "Kdam Thmor Pro"}}></h2>
      <ul style={{ listStyleType: 'none', padding: 0, textAlign: 'left', margin: '0 auto',maxWidth: '800px', lineHeight: '2.5' }}>
        <Container>
        <h2 style={{ marginTop: '0px',fontFamily: "Kdam Thmor Pro", textDecoration: 'underline', textDecorationColor: 'rgba(0, 255, 255, 0.7)',textUnderlineOffset: '8px'}}>{t('works.title')}</h2>
        <Grid container spacing={4} justifyContent="center" style={{ marginTop: '10px' }}>
        {products.map((product) => (
          <Grid item xs={12} sm={12} md={12} key={product.id}>
        <HorizontalCard>
        <CardActionArea component={Link} to={`/product/${product.id}`}sx={{ display: 'flex' }}>
        <CardMedia
        component="img"
        height = '110'
        sx={{ width: 200, flexShrink: 0 }}
        image={process.env.PUBLIC_URL + product.imageUrl} // ここに画像のURLを挿入
        alt={product.title}
      />
      <CardContent sx={{ flex: '1 0 auto' }}>
        <Typography gutterBottom variant="h6" component="div" style={{ fontSize: '24px',fontFamily: "Kdam Thmor Pro" ,color:'white'}}>
          {product.title}
        </Typography>
        <Typography gutterBottom variant="h6" component="div" style={{ fontSize: '14px',fontFamily: "Kdam Thmor Pro" ,color:'white'}}>
          {product.description}
        </Typography>
      </CardContent>
      </CardActionArea>
        </HorizontalCard>
        </Grid>
        ))}
        </Grid>
        
        </Container>
        </ul>
        
      </div>
      
    <div className="Diary">
    <h2 style={{ marginTop: '80px',fontFamily: "Kdam Thmor Pro"}}></h2>
    <ul style={{ listStyleType: 'none', padding: 0, textAlign: 'left', margin: '0 auto',maxWidth: '1050px', lineHeight: '2.5' }}>
    <Container>
    <h2 style={{ marginTop: '0px',fontFamily: "Kdam Thmor Pro", textDecoration: 'underline', textDecorationColor: 'rgba(0, 255, 255, 0.7)',textUnderlineOffset: '8px'}}>Diary</h2>
      <Grid container spacing={4} justifyContent="center" style={{ marginTop: '10px' }}>
        {articles.map((article) => (
          <Grid item xs={12} sm={6} md={4} key={article.id}>
            <StyledCard>
              <CardActionArea component={Link} to={`/article/${article.id}`}>
                <CardMedia
                  component="img"
                  height="150"
                  image={process.env.PUBLIC_URL + article.imageUrl}
                  alt={article.title}
                />
                <CardContent style={{ padding: '10px' }}>
                  <Typography gutterBottom variant="h6" component="div" style={{ fontSize: '24px',fontFamily: "Kdam Thmor Pro" ,color:'white'}}>
                    {article.title}
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div" style={{ fontSize: '14px',fontFamily: "Kdam Thmor Pro" ,color:'white'}}>
                    {article.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </StyledCard>
          </Grid> 
        ))}
      </Grid>
      </Container>
      </ul>
    </div>
    <h4 style={{ marginTop: '10px',fontFamily: "Kdam Thmor Pro", textAlign: 'left' }}>Todo</h4>
    <p style={{ marginTop: '10px',fontFamily: "Kdam Thmor Pro", textAlign: 'left' }}>works,diaryを書き足す</p>
    </div>
  );
};



export default ArticleList;
