import React from "react";
import "./Video.css";

function Video() {
  return (
    <div className="video">
      <video
        className="video_player"
        loop
        src="https://d2of6bhnpl91ni.cloudfront.net/cms/1920x1080_Final_2020_Homepage%20Video-36f138a5ab.mp4"
      ></video>

      {/* VideoFooter */}
      {/* VideoSidebar */}
    </div>
  );
}

export default Video;
