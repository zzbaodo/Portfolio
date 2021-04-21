import React from "react"
import VideoPlayer from "react-video-js-player"

import "./VPlayer.css"
const VPlayer = ({ src }) => {
  return (
    <>
      <div className="video-container">
        <VideoPlayer width="720" height="420" src={src} />
      </div>
    </>
  )
}

export default VPlayer
