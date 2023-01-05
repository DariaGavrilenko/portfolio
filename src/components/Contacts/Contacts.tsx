import style from './Contacts.module.css';
import styleContainer from '../../common/CommonStyle.module.css';
import { Title } from '../Title';

const Contacts = () => {
  return (
    <div className={style.contactsContainer}>
      <div className={`${styleContainer.container} ${style.container}`}>
        <Title titleText='Contacts' />
        <form action="">
          <input type="text" className={style.contactName} placeholder='Your name'/>
          <input type="text" className={style.contactEmail} placeholder='Your email'/>
          <textarea className={style.contactMessage} placeholder='Leave your message'></textarea>
        </form>
        <button>send</button>
      </div>
    </div>
  );
};

export default Contacts;
