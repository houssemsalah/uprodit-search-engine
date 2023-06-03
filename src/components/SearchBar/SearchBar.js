import React, { useState, useEffect } from 'react';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const SearchBar = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const searchResults = await onSearch();
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = () => {
    onSearch(searchValue);
  };

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Input.Search
        placeholder="Search"
        value={searchValue}
        onChange={handleChange}
        onSearch={handleSearch}
        enterButton={<SearchOutlined style={{ fontSize: '1.2rem' }} />}
        size="large"
        style={{ width: '800px', marginRight: '1rem' }} // Update the width value here
      />
    </div>
  );
};

export default SearchBar;
