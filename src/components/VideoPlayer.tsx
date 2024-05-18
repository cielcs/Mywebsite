import React from "react";
import YouTube from "react-youtube";

interface VideoPlayerProps {
  videoId: string;
  headerText: string;
  Description: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  videoId,
  headerText,
  Description,
}) => {
  const opts: any = {
    height: "350",
    width: "500",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  const onReady = (event: any) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        paddingBottom: "16.25%",
        overflow: "hidden",
      }}
    >
      <h3 style={{ marginTop: "10px", fontFamily: "Kdam Thmor Pro" }}>
        {headerText}
      </h3>
      <YouTube videoId={videoId} opts={opts} onReady={onReady} />
      {Description}
    </div>
  );
};

export default VideoPlayer;
