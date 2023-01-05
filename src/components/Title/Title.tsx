import style from './Title.module.css' 
 
 const Title = (props:{titleText:string})=>{
    return (
        <div className={style.title}>
                   <h2>{props.titleText}</h2>
        </div>
 
    )
}
export default Title