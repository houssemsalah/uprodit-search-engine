
import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from 'antd';

import SearchBar from '../SearchBar/SearchBar';

const { Header } = Layout;

const Navbar = ({ onSearch }) => {
  return (
    <Header style={{ background: 'white', display: 'flex', justifyContent: 'space-between',marginTop:'20px' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <h1 style={{ color: '#fff', fontSize: '2.5rem', margin: 0 }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
            Uprodit
          </Link>
        </h1>

      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <SearchBar onSearch={onSearch} />
       
      </div>
    </Header>
  );
};

export default Navbar;
