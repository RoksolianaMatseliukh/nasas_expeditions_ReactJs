import {NavLink} from "react-router-dom";

export const Home = () => {
    return (
        <>
            <h1> WELCOME </h1>
            <NavLink exact to="/mars_expedition"> GET STARTED </NavLink>
        </>
    );
};
