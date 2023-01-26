import style from './Skills.module.css';
import styleContainer from '../../common/CommonStyle.module.css';
import { Skill } from './components/Skill';
import { Title } from '../Title';
const Skills = () => {
  let textForHLML  = `Document and website structure. Positioning of elements. Adaptive layout. Semantic layout.
   BEM methodology. SCSS and grid layout in the learning process.`;

  let textForJS = `
  Variable declarations (var, let, const), block scope, naming.
  Data types. Difference between primitives and complex types.
  Basic type conversions.
  Operators (arithmetic, logical, comparison) and control statements (loops, switch, try/catch).
  Object. 'This' context ( basic understanding).
  Functions in JS: function expressions, IIF, arrow functions.
  Prototypes (basic understanding of prototype chain).
  setTimeout/setInterval. Ajax. Promise, async and await.`

  let textForReact = `Thunk. ActionCreator. Dispatch. Flux. Hooks: useState, useEffect, useMemo, useCallback, useRef, useReducer.
   HOC. Redux. Redux Toolkit. React Router.`
  

  return (
    <div  id='skill' className={style.skillsContainer}>
      <Title titleText='My skills' />
      <div className={`${styleContainer.container} ${style.container}`}>
        <Skill skill="CSS/HTML" text={textForHLML} />
        <Skill skill="JS/TS" text={textForJS} />
        <Skill skill="React" text={textForReact} />
      </div>
    </div>
  );
};
export default Skills