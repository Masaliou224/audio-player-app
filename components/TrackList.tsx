import React from "react";

interface TrackListProps {
  tracks: Array<{ title: string; src: string }>;
  currentTrack: number;
  onTrackClick: (index: number) => void;
}

const TrackList: React.FC<TrackListProps> = ({ tracks, currentTrack, onTrackClick }) => {
  return (
    <div className="track-list">
      {tracks.map((track, index) => (
        <div
          key={index}
          className={`track-list ${index === currentTrack ? 'active' : ''}`}
          onClick={() => onTrackClick(index)}
        >
          {track.title}
        </div>
      ))}
    </div>
  );
};

export default TrackList;