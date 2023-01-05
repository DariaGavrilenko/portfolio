import React from 'react';

import style from './Project.module.css';

type ProjectPropsType = {
  projectName: string;
  discriptions: string;
  img:any
};

const Project = ({ projectName, discriptions, img }: ProjectPropsType) => {
  return (
    <div className={style.projectContainer}>
      <div className={style.imgContainer} style={img}>
        <button>Look</button>
      </div>
      <div className={style.discription}>
        <h3 className={style.projectName}>{projectName}</h3>
        <div className={style.discriptions}>{discriptions}</div>
      </div>
    </div>
  );
};

export default Project;
