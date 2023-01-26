import React from 'react';

import style from './Footer.module.css';
import styleContainer from '../../common/CommonStyle.module.css';
import telegramIcon from '../../common/img/telegram.svg'
import instagramIcon from '../../common/img/instagram.svg'
import gitHubIcon from '../../common/img/github.svg'
import linkedInIcon from '../../common/img/linkedin.svg'
import mail from '../../common/img/mail.svg'

const Footer = () => {
  return (
    <div className={style.footerContainer} id='contacts'>
      <div className={`${styleContainer.container} ${style.container}`}>
        <h2>Darya Kot</h2>
        <div className={style.socialIcon}>
          <div> 
          <a href='https://t.me/Darya_A_Kot' target='_blank'>
          <img src={telegramIcon} alt="" />
          </a>
          </div>
          <div>
            <a href='https://www.instagram.com/dashagavrilenko/?igshid=NTdlMDg3MTY%3D' target='_blank'>
            <img src={instagramIcon} alt="" />
            </a>
            </div>
          <div>
            <a href='https://github.com/DariaGavrilenko' target='_blank'>
            <img src={gitHubIcon} alt="" />
            </a>
            </div>
          <div>
          <a href='http://www.linkedin.com/in/DaryaKot' target='_blank'>
            <img src={linkedInIcon} alt="" />
            </a>
            </div>
        </div>
        <span>All rights reserved</span>
      </div>
    </div>
  );
};

export default Footer;
