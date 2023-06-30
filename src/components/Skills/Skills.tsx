import style from './Skills.module.css';
import styleContainer from '../../common/CommonStyle.module.css';
import { Skill } from './components/Skill';
import { Title } from '../Title';
import { skills } from '../Skills/Skills.constants'

const Skills = () => {

  return (
    <div id='skill' className={style.skillsContainer}>
      <Title titleText='My skills' />
      <div className={`${styleContainer.container} ${style.container}`}>
        <Skill skill={skills.html.title} text={skills.html.description} />
        <Skill skill={skills.js.title} text={skills.js.description} />
        <Skill skill={skills.react.title} text={skills.react.description} />
      </div>
    </div>
  );
};

export default Skills