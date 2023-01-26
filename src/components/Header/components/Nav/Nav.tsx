import React from 'react';

import style from './Nav.module.css';

const Nav = () => {
  return (
    <div className={style.NavContainer}>
      {/* <span>Main</span>
      <span>Skills</span> */}
      <a href="#skill" className={style.link}> Skill</a>
      <a href="#projects" className={style.link}> Projects</a>
      <a href="#contacts" className={style.link}> Contacts</a>

    </div>
  );
};

export default Nav;
