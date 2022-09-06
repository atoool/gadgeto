/* eslint-disable react/prop-types */
import React from "react";
import VideoCard from "./VideoCard";
import "../css/VideoModal.css";

function VideoModal({
  reels = [
    {
      channel: "",
      avatarSrc: "",
      song: "https://www.jiosaavn.com/song/one-way-ticket/Cl9daz4EQ2I",
      url: "https://www.appsloveworld.com/wp-content/uploads/2018/10/640.mp4",
      likes: 200,
      shares: 2,
    },
    {
      channel: "",
      avatarSrc: "",
      song: "https://www.jiosaavn.com/song/one-way-ticket/Cl9daz4EQ2I",
      url: "https://www.appsloveworld.com/wp-content/uploads/2018/10/640.mp4",
      likes: 200,
      shares: 2,
    },
    {
      channel: "",
      avatarSrc: "",
      song: "https://www.jiosaavn.com/song/one-way-ticket/Cl9daz4EQ2I",
      url: "https://www.appsloveworld.com/wp-content/uploads/2018/10/640.mp4",
      likes: 200,
      shares: 2,
    },
  ],
}) {
  return (
    <div className="app">
      <div className="app__videos">
        {/* Container of app__videos(scrollable content) */}
        {reels.map(({ channel, avatarSrc, song, url, likes, shares }) => (
          <VideoCard
            channel={channel}
            avatarSrc={avatarSrc}
            song={song}
            url={url}
            likes={likes}
            shares={shares}
          />
        ))}
      </div>
    </div>
  );
}

export default VideoModal;
