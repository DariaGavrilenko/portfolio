import React from 'react';
import socialNetworkImg from '../../common/img/socialNetwork.png'

import { Project } from './components/Project';

import styleContainer from '../../common/CommonStyle.module.css';
import style from './MyProjects.module.css';
import { Title } from '../Title';

const MyProjects = () => {
  const socialNetwork = {
    backgroundImage: `url(${socialNetworkImg})`,
  }

  const todo = {
    backgroundImage: `url(https://www.shutterstock.com/image-vector/todo-list-board-vector-illustration-260nw-2038332404.jpg)`,
  }

  return (
    <div className={style.myProjectsContainer}>
  <Title titleText='My projects'/>
      <div className={`${styleContainer.container} ${style.container}`}>
        <Project projectName="Social networks" discriptions="ssssss" img={socialNetwork}/>
        <Project projectName="Todolist" discriptions="ssssss" img={todo}/>
      </div>
    </div>
  );
};

export default MyProjects;
