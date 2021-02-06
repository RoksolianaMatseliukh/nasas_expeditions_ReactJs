import { NavLink } from "react-router-dom";

import s from './Home.module.scss';

export const Home = () => {
    return (
        <div className={s.homeWrapper}>
            <div className={s.home}>
                <h1> WHY WE EXPLORE MARS </h1>

                <p className={s.paragraph}>
                    Over the last century, everything we’ve learned about Mars suggests that the planet was once quite capable of hosting ecosystems—and that it might still be an incubator for microbial life today.
                </p>

                <p className={s.paragraph}>
                    Since the 1960s, humans have sent dozens of spacecraft to study Mars. Early missions were flybys, with spacecraft furiously snapping photos as they zoomed past. Later, probes pulled into orbit around Mars; more recently, landers and rovers have touched down on the surface.
                </p>

                <NavLink exact to="/mars_expedition" className={s.link}>
                    CLICK HERE TO GET STARTED TO EXPLORE NASA`s EXPEDITION TO MARS
                </NavLink>
            </div>
        </div>
    );
};
