import { Route, Switch } from "react-router-dom";

import { Home } from "../home/Home";
import { MarsExpedition } from "../mars-expedition/MarsExpedition";
import { NotFound } from "../not-found/NotFound";
import { Error } from "../error/Error";

export const Routes = () => {
    return (
        <Switch>
            <Route path="/mars_expedition" exact component={MarsExpedition}/>
            <Route path="/error" exact component={Error}/>
            <Route path="/" exact component={Home}/>

            <Route component={NotFound}/>
        </Switch>
    );
};
