import React from 'react';

import style from './Footer.module.css';
import styleContainer from '../../common/CommonStyle.module.css';
import { Title } from '../Title';
import telegramIcon from '../../common/img/telegram.svg'
import instagramIcon from '../../common/img/instagram.svg'
import gitHubIcon from '../../common/img/gitHub.svg'
import linkedInIcon from '../../common/img/linkedIn.svg'

const Footer = () => {
  return (
    <div className={style.footerContainer}>
      <div className={`${styleContainer.container} ${style.container}`}>
        <h2>Darya Kot</h2>
        <div className={style.socialIcon}>
          <div> <img src={telegramIcon} alt="" /></div>
          <div><img src={instagramIcon} alt="" /></div>
          <div><img src={gitHubIcon} alt="" /></div>
          <div><img src={linkedInIcon} alt="" /></div>
        </div>
        <span>All rights reserved</span>
      </div>
    </div>
  );
};

export default Footer;
