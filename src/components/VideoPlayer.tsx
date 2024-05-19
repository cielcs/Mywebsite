import React from 'react';
import YouTube from 'react-youtube';

interface VideoPlayerProps {
  videoId: string;
  headerText: string;
  Description: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoId, headerText, Description }) => {
  const opts: any = {
    height: '100%',
    width: '100%', // 幅を100%に設定
    playerVars: {
      autoplay: 0,
    },
  };

  const onReady = (event: any) => {
    event.target.pauseVideo();
  };

  return (
    <div style={{ width: '100%', overflow: 'hidden' }}>
      <h3 style={{ marginTop: '10px', fontFamily: 'Kdam Thmor Pro' }}>{headerText}</h3>
      <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
        <YouTube videoId={videoId} opts={opts} onReady={onReady} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />
      </div>
      <p>{Description}</p>
    </div>
  );
};

export default VideoPlayer;
