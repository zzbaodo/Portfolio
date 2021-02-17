import React from "react"
import VideoPlayer from "react-video-js-player"

import "./VPlayer.css"
const VPlayer = ({ src, close }) => {
  return (
    <>
      <div className="video-backdrop"></div>
      <div className="video-container">
        <div
          className="close-container"
          onClick={close}
        >
          <div className="leftright"></div>
          <div className="rightleft"></div>
        </div>
        <VideoPlayer width="720" height="420" src={src} />
      </div>
    </>
  )
}

export default VPlayer
