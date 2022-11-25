import { Project } from "./Project"
import styleContainer from '../common/CommonStyle.module.css'
import style from './MyProjects.module.css'


export const MyProjects = () =>{
      return(
        <div className={style.myProjectsContainer}>
               <h2>My projects</h2>
        <div className={`${styleContainer.container} ${style.container}`}>
            <Project projectName="Social networks" discriptions="ssssss"/>
            <Project projectName="Todolist" discriptions="ssssss"/>
        </div>
        </div>
      )
   
}