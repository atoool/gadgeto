/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
import React, { useRef, useState } from "react";
import "../css/VideoCard.css";
import VideoHeader from "./VideoHeader";
import VideoFooter from "./VideoFooter";

function VideoCard({ url = "", likes = 0, shares = 0, channel = "", avatarSrc = "", song = "" }) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef(null);

  const onVideoPress = () => {
    if (isVideoPlaying) {
      // stop
      videoRef.current.pause();
      setIsVideoPlaying(false);
    } else {
      // play
      videoRef.current.play();
      setIsVideoPlaying(true);
    }
  };

  return (
    <div className="videoCard">
      <VideoHeader />
      <video
        ref={videoRef}
        onClick={onVideoPress}
        className="videoCard__player"
        src={url}
        alt="IG reel video"
        loop
      />
      <VideoFooter
        channel={channel}
        likes={likes}
        shares={shares}
        avatarSrc={avatarSrc}
        song={song}
      />
    </div>
  );
}

export default VideoCard;
