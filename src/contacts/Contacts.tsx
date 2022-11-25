import style from './Contacts.module.css'
import styleContainer from '../common/CommonStyle.module.css'
export const Contacts = () => {
    return (
        <div className={style.contactsContainer}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <h2>Contacts</h2>
                <form action="">
                    <input type="text" />
                    <input type="text" />
                    <textarea></textarea>
                </form>
                <button>send</button>
            </div>
        </div>
    )
}