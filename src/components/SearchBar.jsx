import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearchClick = () => {
    onSearch(searchText);
  };

  return (
    <div style={{ textAlign: 'center', margin: '1rem 0' }}>
      <input
        type="text"
        placeholder="Search for characters..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button
        onClick={handleSearchClick}
        style={{
          padding: '0.8rem 1.2rem',
          backgroundColor: '#3498db',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '1rem',
        }}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;