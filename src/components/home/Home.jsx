import { NavLink } from "react-router-dom";

import s from './Home.module.css';

export const Home = () => {
    return (
        <div className={s.homeWrapper}>
            <h1> WELCOME </h1>
            <NavLink exact to="/mars_expedition"> GET STARTED TO EXPLORE NASA`s EXPEDITION TO MARS </NavLink>
        </div>
    );
};
