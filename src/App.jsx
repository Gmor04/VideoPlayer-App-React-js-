import React, { useState } from "react";
import { useRef } from "react";
import video from "./assets/video.mp4.mp4";
import Videoplayer from "./component/Videoplayer";

function App() {
  const videoElement = useRef(null);
  const [volume, setVolume] = useState(0.5)

  const {
    playerState,
    clickplay,
    handleOnTimeUpdate,
    handleVideoProgress,
    clickMute,
  } = Videoplayer(videoElement);

  const handleIncreaseVolume = () => {
    setVolume((volume > 0.1) ? volume - 0.1 : 0)
    videoElement.current.volume = volume
  }

  const handleDecreaseVolume = () => {
    setVolume((volume < 0.9) ? volume + 0.1 : 1)
    videoElement.current.volume = volume
  }

  return (
    <div className="container bg-danger">
      <div className="video-wrapper">
        <video
          src={video}
          ref={videoElement}
          onTimeUpdate={handleOnTimeUpdate}
        ></video>
        <div className="controls">
          <div className="actions">
            <button onClick={clickplay}>
              {/* play */}
              {!playerState.isPlaying ? (
                <i>▶</i>
              ) : (
                <i>⏸</i>
              )}
            </button>
          </div>

          <input
            type="range"
            min="0"
            max="100"
            value={playerState.progress}
            onChange={(e) => handleVideoProgress(e)}
          />
          <button onClick={handleDecreaseVolume}>➕</button>
             <span>{volume}</span>
            <button onClick={handleIncreaseVolume }> ➖</button>
            
          <button className="mute-btn" onClick={clickMute}>
            {!playerState.isMuted ? (
              
              <i >🔇</i>
            ) : (
              <i >🔊</i>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
