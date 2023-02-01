import React from 'react';


import gitHubIcon from '../../common/img/github.svg'
import linkedInIcon from '../../common/img/linkedin.svg'
import telegramIcon from '../../common/img/telegram.svg'
import instagramIcon from '../../common/img/instagram.svg'


import style from './Footer.module.css';
import styleContainer from '../../common/CommonStyle.module.css';

//try to create alias ???

const Footer = () => {
  return (
    <div className={`${styleContainer.container} ${style.container}`} id='contacts'>
      <h2>Darya Kot</h2>
      <div className={style.socialIcons}>
        <a href='https://t.me/Darya_A_Kot' target='_blank' className={style.socialIcon}>
          <img src={telegramIcon} alt="telegram" />
        </a>
        <a href='https://www.instagram.com/dashagavrilenko/?igshid=NTdlMDg3MTY%3D' target='_blank' className={style.socialIcon}>
          <img src={instagramIcon} alt="instagram" />
        </a>
        <a href='https://github.com/DariaGavrilenko' target='_blank' className={style.socialIcon}>
          <img src={gitHubIcon} alt="github" />
        </a>
        <a href='http://www.linkedin.com/in/DaryaKot' target='_blank' className={style.socialIcon}>
          <img src={linkedInIcon} alt="linkedin" />
        </a>
      </div>
      <span>All rights reserved</span>
    </div>
  );
};

export default Footer;
