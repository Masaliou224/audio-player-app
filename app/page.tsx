'use client';

import MakeAudioPlayer from "@/components/AudioPlayer";
import React, { useState } from "react";
import GenreButtons from "@/components/GenreButtons";
import SearchBar from "@/components/SearchBar";
import TrackList from "@/components/TrackList";
import '../styles/globals.css';

const tracks = [
  { title: "Madza - Chords of Life", src: "/music/chords-of-life.mp3", genre: "house" },
  { title: "Madza - Late Night Drive", src: "/music/late-night-drive.mp3", genre: "dnb" },
  { title: "Madza - Persistence", src: "/music/persistence.mp3", genre: "dubstep" },
];

const genres = ["house", "dnd", "dubstep"];

const Home: React.FC = () => {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");

  const filteredTracks = tracks.filter(
    track => 
      track.title.toLowerCase().includes(searchTerm.toLowerCase()) && (selectedGenre ? track.genre === selectedGenre : true)
  );

  return (
    <div className="audio-player-container">
      <h1>Audio Player for your Podcast</h1>
      <GenreButtons
        genres={genres}
        selectedGenre={selectedGenre}
        onGenreClick={setSelectedGenre}
      />
      <SearchBar searchTerm={searchTerm} onSearchChange={(e) => setSearchTerm(e.target.value)} />
      <MakeAudioPlayer currentTrack={currentTrack} tracks={filteredTracks} setCurrentTrack={setCurrentTrack} />
      <TrackList tracks={filteredTracks} currentTrack={currentTrack} onTrackClick={setCurrentTrack} />
    </div>
  );
};

export default Home;
