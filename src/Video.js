import React, { useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoSideBar from "./VideoSideBar";

function Video({ url, channel, description, song, likes, messages, shares }) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleVideoPress = () => {
    //if video is playing
    //stop it...
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      //otherwise if its not playing
      //play it...
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="video">
      <video
        onClick={handleVideoPress}
        className="video_player"
        loop
        ref={videoRef}
        src={url}
      ></video>

      {/* VideoFooter */}
      <VideoFooter channel={channel} description={description} song={song} />
      {/* VideoSidebar */}
      <VideoSideBar likes={likes} shares={shares} messages={messages} />
    </div>
  );
}

export default Video;
