import style from './Footer.module.css'
import styleContainer from '../common/CommonStyle.module.css'

export const Footer = () => {
    return (
        <div className={style.footerContainer}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <h2>Daria Kot</h2>
                <div className={style.socialIcon}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <span>All rights reserved</span>
            </div>
        </div>
    )
}