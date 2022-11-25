import style from './Skills.module.css'
import styleContainer from '../common/CommonStyle.module.css'
import { Skill } from './Skill'


export const Skills = () => {
let text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
 officia deserunt mollit anim id est laborum.`


    return (
        <div className={style.skillsContainer}>
            <h2>My skills</h2>
        <div className={`${styleContainer.container} ${style.container}`}>
            <Skill skill='CSS/HTML' text={text} />
            <Skill skill='JS/TS' text={text}/>
            <Skill skill='React' text={text}/>
        </div>
        </div>
    )
}