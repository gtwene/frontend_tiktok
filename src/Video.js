import React, { useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";

function Video() {
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
        src="https://d2of6bhnpl91ni.cloudfront.net/cms/1920x1080_Final_2020_Homepage%20Video-36f138a5ab.mp4"
      ></video>

      {/* VideoFooter */}
      <VideoFooter />
      {/* VideoSidebar */}
    </div>
  );
}

export default Video;
