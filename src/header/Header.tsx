import { Nav } from "./Nav"
import style from './Header.module.css'

export const Header = () => {
    return (
        <div className={style.header}>
            <Nav />
        </div>
    )
}