'use client';

import ReactH5AudioPlayer from "react-h5-audio-player";
import 'react-h5-audio-player/lib/styles.css';
import React, { useState } from "react";

interface Track {
  title: string;
  src: string;
  genre: string;
}

interface MakeAudioPlayerProps {
  currentTrack: number;
  tracks: Track[];
  setCurrentTrack: React.Dispatch<React.SetStateAction<number>>;
}

const MakeAudioPlayer: React.FC<MakeAudioPlayerProps> = ({ currentTrack, tracks, setCurrentTrack}) => {

  const handleClickPrevious = () => {
    setCurrentTrack((prevTrack) => (prevTrack === 0 ? tracks.length - 1 : prevTrack - 1));
  };

  const handleClickNext = () => {
    setCurrentTrack((prevTrack) => (prevTrack === tracks.length - 1 ? 0 : prevTrack + 1));
  };

  return (
    <div className="audio-player">
      <div className="track-title">{tracks[currentTrack].title}</div>
      <ReactH5AudioPlayer 
        autoPlay={false}
        src={tracks[currentTrack].src}
        onPlay={() => console.log("Playing")}
        onClickPrevious={handleClickPrevious}
        onClickNext={handleClickNext}
        showSkipControls={true}
        showJumpControls={false}
      />
      <ul className="track-list">
        {tracks.map((track, index) => (
          <li 
            key={index}
            className={`track-list-item ${index === currentTrack ? 'active' : ''}`}
            onClick={() => setCurrentTrack(index)}
          >
            {track.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MakeAudioPlayer;