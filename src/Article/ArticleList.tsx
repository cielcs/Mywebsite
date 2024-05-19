// ArticleList.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import VideoPlayer from '../components/VideoPlayer';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';

interface Article { 
  id: number;
  title: string;
  imageUrl: string;
}

const StyledCard = styled(Card)({
  width: '220px',
  transition: 'transform 0.3s ease-in-out',
  boxShadow: '0 4px 8px rgba(255, 255, 255, 0.5)', // 白い影を追加
  backgroundColor: '#000000', // カード自体の背景色を少し明るめに設定
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 8px 16px rgba(255, 255, 255, 0.5)', // ホバー時に影を強くする
  },
});

const articles: Article[] = [
  { id: 1, title: 'Europe＃1', imageUrl: '/images/paris1.jpeg' },
  { id: 2, title: 'Europe＃2', imageUrl: '/images/korea1.jpg' },
  { id: 3, title: 'Europe＃1', imageUrl: '/images/effe.jpg' },
  { id: 4, title: 'Europe＃1', imageUrl: '/images/oru.jpg' },
];


const ArticleList: React.FC = () => {
  const { t } = useTranslation();
  return (
    
    <div className="MainPage">
      <div className="Education">
        <h2 style={{ marginTop: '80px',fontFamily: "Kdam Thmor Pro"}}>{t('education.title')}</h2>
        <ul style={{ listStyleType: 'none', padding: 0, textAlign: 'left', margin: '0 auto',maxWidth: '800px', lineHeight: '2.5' }}>
          <li>{t('education.text1')}</li>
            <ul><li>{t('education.lab')}{t('education.labText1')}</li></ul>
          <li>{t('education.text2')}</li>
            <ul><li>{t('education.lab')}{t('education.labText1')}</li></ul>
          <li>{t('education.text3')}<a href={t('education.link')}>{t('education.description')}</a></li>
            <ul><li>{t('education.lab')}<a href={t('education.labLink')}>{t('education.labText')}</a></li></ul>
        </ul>
      </div>
      <div className='Research Interests'>
        <h2 style={{ marginTop: '80px',fontFamily: "Kdam Thmor Pro"}}>{t('research_interests.title')}</h2>
        <ul style={{ listStyleType: 'none', padding: 0, textAlign: 'left', margin: '0 auto', maxWidth: '800px',lineHeight: '2.5' }}>
          <li>{t('research_interests.interests')} <br/></li>
        </ul>
      </div>
      <div className='Certification'>
        <h2 style={{ marginTop: '80px',fontFamily: "Kdam Thmor Pro"}}>{t('certifications.title')}</h2>
        <ul style={{ padding: 0, textAlign: 'left', margin: '0 auto',maxWidth: '800px', lineHeight: '2.5' }}>
          {(t('certifications.items', { returnObjects: true })as any[]).map((item: string, index: number) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
      </div>
      <div className='Works'>
        <h2 style={{ marginTop: '80px',fontFamily: "Kdam Thmor Pro"}}>{t('works.title')}</h2>
        <ul style={{ padding: 0, textAlign: 'center', margin: '0 auto', maxWidth: '800px', lineHeight: '2.5' }}>
          <div>
            <VideoPlayer videoId={t('works.videoId')} headerText={t('works.headerText')} Description={t('works.description')}/>
          </div>
        </ul>
        
      </div>
      {/* <div className='Diary'>
        <h2 style={{ marginTop: '10px',fontFamily: "Kdam Thmor Pro"}}>Diary</h2><br></br>
        <ul style={{ padding: 0, textAlign: 'center', margin: '0 auto', maxWidth: '1000px', lineHeight: '2.5' }}>
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
      </ul>
    </div> */}
    <div className="Diary">
    <h2 style={{ marginTop: '10px',fontFamily: "Kdam Thmor Pro"}}>Diary</h2>
      <Grid container spacing={4} justifyContent="center" style={{ marginTop: '10px' }}>
        {articles.map((article) => (
          <Grid item key={article.id}>
            <StyledCard>
              <CardActionArea component={Link} to={`/article/${article.id}`}>
                <CardMedia
                  component="img"
                  height="200"
                  image={process.env.PUBLIC_URL + article.imageUrl}
                  alt={article.title}
                />
                <CardContent style={{ padding: '5px' }}>
                  <Typography gutterBottom variant="h6" component="div" style={{ fontSize: '22px',fontFamily: "Kdam Thmor Pro" ,color:'white'}}>
                    {article.title}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </StyledCard>
          </Grid> 
        ))}
      </Grid>
    </div>
    <h4 style={{ marginTop: '10px',fontFamily: "Kdam Thmor Pro", textAlign: 'left' }}>Todo</h4>
    <p style={{ marginTop: '10px',fontFamily: "Kdam Thmor Pro", textAlign: 'left' }}>works,diaryを書き足す</p>
    </div>
  );
};



export default ArticleList;
