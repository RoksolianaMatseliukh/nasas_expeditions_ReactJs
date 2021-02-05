import {Route, Switch} from "react-router-dom";

import {Home} from "../home/Home";
import {Expedition} from "../expedition/Expedition";

export const Routes = () => {
    return (
        <Switch>
            <Route path="/mars_expedition" component={Expedition}/>
            <Route path="/" component={Home}/>
        </Switch>
    );
};
