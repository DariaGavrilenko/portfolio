import style from './Project.module.css'


type ProjectPropsType = {
  projectName: string
   discriptions: string
}



export const Project = ({projectName, discriptions}:ProjectPropsType) =>{
    return(
      <div className={style.projectContainer}>
        <div className={style.imgContainer}>
          <button>Look</button>
        </div>
          <div className={style.discription}>
            <h3 className={style.projectName}>{projectName}</h3>
            <div className={style.discriptions}>{discriptions}</div>  
          </div>
      </div>
    )
 
}