import React from "react";

interface GenreButtonsProps {
  genres: string[];
  selectedGenre: string;
  onGenreSelect: (genre: string) => void;
}

const GenreButtons: React.FC<GenreButtonsProps> = ({ genres, selectedGenre, onGenreSelect }) => {
  return (
    <div className="genre-button">
      {genres.map((genre) => (
        <button 
          key={genre}
          className={`genre-button ${genre === selectedGenre ? 'active' : ''}`}
          onClick={() => onGenreSelect(genre)}
        >
          {genre}
        </button>
      ))}
    </div>
  );
};

export default GenreButtons;