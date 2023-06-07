import React, { useState, useEffect } from 'react';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const SearchBar = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
  onSearch();
  } );

  const handleSearch = () => {
    onSearch(searchValue);
  };

  const handleChange = (e) => {
    e.preventDefault()
    console.log("clicked")
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
        style={{ width: '800px', marginRight: '1rem' }} 
      />
    </div>
  );
};

export default SearchBar;
