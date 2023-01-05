import styleContainer from '../../common/CommonStyle.module.css';
import { Title } from '../Title';
import style from './RemoteWork.module.css';

const RemoteWork = () => {
  return (
    <div className={style.remoteWorkContainer}>
      <div className={`${styleContainer.container} ${style.container}`}>
        <Title titleText={`I'm considering offers of remote work.`}/>
        <button>Click to hire me</button>
      </div>
    </div>
  );
};

export default RemoteWork;
