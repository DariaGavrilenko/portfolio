import React from 'react';

import { Nav } from './components/Nav';
import style from './Header.module.css';

const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.headerContainer}>
      <Nav />
      </div>
    </div>
  );
};

export default Header;
