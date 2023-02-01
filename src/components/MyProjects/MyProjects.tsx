import React from 'react';

import { myProjects } from './MyProjects.constants'

import { Project } from './components/Project';

import styleContainer from '../../common/CommonStyle.module.css';
import style from './MyProjects.module.css';
import { Title } from '../Title';

const MyProjects = () => {

  return (
    <div className={style.myProjectsContainer} id='projects'>
      <Title titleText='My projects' />
      <div className={`${styleContainer.container} ${style.container}`}>
        <Project projectName={myProjects.social.projectName} discriptions={myProjects.social.description} img={myProjects.social.backgroundImage} link={myProjects.social.link} />
        <Project projectName={myProjects.toDo.projectName} discriptions={myProjects.toDo.description} img={myProjects.toDo.backgroundImage} link={myProjects.toDo.link} />
      </div>
    </div>
  );
};

export default MyProjects;
