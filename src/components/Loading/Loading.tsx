import style from './Loading.module.css'

const Loading = () =>{
    return (
        <div className={style.loading}>
            <img src='https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif' alt="" />
        </div>
    ) 
}

export default Loading