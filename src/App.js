// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import CharacterGrid from './components/CharacterGrid';
import { fetchCharacters } from './services/api';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [query, setQuery] = useState('');
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  useEffect(() => {
    const loadCharacters = async () => {
      try {
        const data = await fetchCharacters(query);
        setCharacters(data.results.slice(0, 10)); // Limit to 10 results
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    };
    loadCharacters();
  }, [query]);

  const handleCharacterClick = (character) => {
    setSelectedCharacter(character); // Set the selected character
  };

  const closeDetails = () => {
    setSelectedCharacter(null); // Close the details view
  };

  return (
    <div>
      <h1>Rick and Morty Browser</h1>
      <SearchBar onSearch={setQuery} />
      {!selectedCharacter ? (
        <CharacterGrid characters={characters} onCharacterClick={handleCharacterClick} />
      ) : (
        <div style={{ textAlign: 'center', margin: '2rem' }}>
          <h2>{selectedCharacter.name}</h2>
          <img
            src={selectedCharacter.image}
            alt={selectedCharacter.name}
            style={{ borderRadius: '10px', maxWidth: '300px' }}
          />
          <p><strong>Status:</strong> {selectedCharacter.status}</p>
          <p><strong>Species:</strong> {selectedCharacter.species}</p>
          <p><strong>Gender:</strong> {selectedCharacter.gender}</p>
          <p><strong>Last Location:</strong> {selectedCharacter.location.name}</p>
          <button
            onClick={closeDetails}
            style={{
              marginTop: '1rem',
              padding: '0.8rem 1.5rem',
              backgroundColor: '#e74c3c',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Back to Characters
          </button>
        </div>
      )}
    </div>
  );
};

export default App;