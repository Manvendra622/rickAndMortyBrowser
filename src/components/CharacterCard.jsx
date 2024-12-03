import React from 'react';

const CharacterCard = ({ character, onClick }) => {
  return (
    <div className="character-card" onClick={onClick} style={{ cursor: 'pointer' }}>
      <img src={character.image} alt={character.name} />
      <h3>{character.name}</h3>
      <p>Status: {character.status}</p>
      <p>Last Location: {character.location.name}</p>
    </div>
  );
};

export default CharacterCard;