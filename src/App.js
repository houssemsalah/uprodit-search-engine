import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import SearchResults from './pages/SearchResults/SearchResults';
import { searchAll } from './services/api';

const App = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (query) => {
    try {
      const results = await searchAll(query);
      setSearchResults(results);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  return (
    <Router>
      <div>
        <Navbar onSearch={handleSearch} />
        <Routes>
         
          <Route path="/" element={<SearchResults results={searchResults} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
