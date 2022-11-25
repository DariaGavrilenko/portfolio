import style from './Main.module.css'
import styleContainer from '../common/CommonStyle.module.css'

export const Main = () => {
    return (
        <div className={style.MainContainer}>
           <div className={`${styleContainer.container} ${style.container}`}>
            <div className={style.textContainer} > 
                <span>Hello</span>
                <h1>I am Darya Kot</h1> 
                <span>A frontend developer</span>    
            </div>
            <div className={style.photoContainer}></div>
           </div>
        </div>
    )
}