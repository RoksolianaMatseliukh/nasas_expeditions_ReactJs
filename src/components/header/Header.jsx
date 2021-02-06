import { NavLink } from "react-router-dom";

import s from './Header.module.scss';

export const Header = () => {
    return (
        <div className={s.header}>
            <NavLink exact to="/" className={s.link}> HOME </NavLink>
        </div>
    );
};
