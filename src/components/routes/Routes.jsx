import {Route, Switch} from "react-router-dom";

import {Home} from "../home/Home";
import {MarsExpedition} from "../mars-expedition/MarsExpedition";

export const Routes = () => {
    return (
        <Switch>
            <Route path="/mars_expedition" component={MarsExpedition}/>
            <Route path="/" component={Home}/>
        </Switch>
    );
};
