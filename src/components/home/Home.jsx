import {NavLink} from "react-router-dom";
import {useEffect} from "react";
import sp from '../../images/space4.jpg'

export const Home = () => {

    useEffect(() => {
        document.body.style.backgroundImage = `url(${sp})`;
    })

    return (
        <div style={{backgroundColor: "white", width: 500, borderRadius: 20, padding: 20}}>
            <h1> WELCOME </h1>
            <NavLink exact to="/mars_expedition"> GET STARTED TO EXPLORE NASA`s EXPEDITION TO MARS </NavLink>
        </div>
    );
};
