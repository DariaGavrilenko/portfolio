import React from 'react';

import style from './Nav.module.css';

const Nav = () => {
  return (
    <div className={style.NavContainer}>
      <span>Main</span>
      <span>Skils</span>
      <span>Works</span>
      <span>Contacts</span>
    </div>
  );
};

export default Nav;
