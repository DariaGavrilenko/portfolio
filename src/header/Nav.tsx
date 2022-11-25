import style from './Nav.module.css'

export const Nav = () => {
    return (
        <div className={style.NavContainer}>
            <span>Main</span>
            <span>Skils</span>
            <span>Works</span>
            <span>Contscts</span>
        </div>
    )
}