import React from 'react';

import { Nav } from './components/Nav';

import style from './Header.module.css';

const Header = () => (
    <div className={style.header}>
      <Nav />
    </div>
  );

export default Header;
