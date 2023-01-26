import style from './Skill.module.css';

type SkillPropsType = {
  skill: string;
  text: string;
};

 const Skill = ({ skill, text }: SkillPropsType) => {
  return (
    <div className={style.skillContainer}>
      <div className={style.imgContainer}>{skill}</div>
      {/* <h3>{skill}</h3> */}
      <div>{text}</div>
    </div>
  );
};


export default Skill