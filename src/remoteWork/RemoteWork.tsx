import styleContainer from '../common/CommonStyle.module.css'
import style from'./RemoteWork.module.css'
export const RemoteWork = () => {
    return (
        <div className={style.remoteWorkContainer} >
            <div className={`${styleContainer.container} ${style.container}`}>
            <h2>I'm considering offers of remote work.</h2>
            <button>Click to hire me</button>
            </div>
        </div>
    )
}