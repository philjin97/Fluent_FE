import React from "react";
import "./Videostyle.css";

const VideoWrapper: React.FC = () => {
  return (
    <div className="wrapper z-50 ">
      <input type="checkbox" />
      <div className="video">
        <video
          src="https://www.robmillsarchitects.com/files/land/city/RMA_Web_land_city_1.mp4"
          loop
          muted
          autoPlay
          playsInline
        ></video>
      </div>
      <div className="text">
        <span data-text="Watch the video"></span>
      </div>
    </div>
  );
};

export default VideoWrapper;
