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

  const socialDiscription = `Educational project written in react and redax using Ts. 
  Pages of login, profile and subscribers were developed.`
 
  const todoDiscription = `Educational project written in react and redax using Ts.
   Logization pages were developed (formic was used), CRUD operations were organized for todolists and tasks.`

  return (
    <div className={style.myProjectsContainer} id='projects'>
  <Title titleText='My projects'/>
      <div className={`${styleContainer.container} ${style.container}`}>
        <Project projectName="Social networks" discriptions={socialDiscription} img={socialNetwork} link={"https://dariagavrilenko.github.io/samurai-way-main/"}/>
        <Project projectName="Todolist" discriptions={todoDiscription} img={todo} link={'https://dariagavrilenko.github.io/todoList/'}/>
      </div>
    </div>
  );
};

export default MyProjects;
