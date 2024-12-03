import React from 'react';
import CharacterCard from './CharacterCard';

const CharacterGrid = ({ characters, onCharacterClick }) => {
  return (
    <div className="character-grid">
      {characters.map((char) => (
        <CharacterCard
          key={char.id}
          character={char}
          onClick={() => onCharacterClick(char)}
        />
      ))}
    </div>
  );
};

export default CharacterGrid;