import React, { useState, useRef } from 'react';
import audioFile from './song.ogg';

/* ICONS */
import { SiApplemusic } from "react-icons/si";
import { CiPlay1 } from "react-icons/ci";
import { CiPause1 } from "react-icons/ci";

import './slider.css'

const AudioPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleSeek = (e) => {
    const newTime = e.target.value;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  return (
    <div className='flex flex-col bg-[#ffffff10] backdrop-blur p-3 rounded-xl border-1 border border-[#ffffff20]'>
        
        <h4 className='flex flex-row text-white items-center mb-6 mt-1'><SiApplemusic className='mr-2 w-6 h-6'/> Rythm box</h4>
      
      <input
        type="range"
        min={0}
        max={audioRef.current ? audioRef.current.duration : 0}
        value={currentTime}
        onChange={handleSeek}
      />
      <audio
        ref={audioRef}
        src={audioFile}
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
      />

<button onClick={togglePlay} className='flex flex-row items-center  text-white mt-3 bg-[#197049] rounded-xl p-1 w-2/3 place-content-evenly'>
  {isPlaying ? <><CiPause1/> Pause</> : <><CiPlay1 /> Play</>}
</button>


    </div>
  );
};

export default AudioPlayer;
