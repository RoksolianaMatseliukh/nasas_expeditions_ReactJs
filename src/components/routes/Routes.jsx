import { Route, Switch } from "react-router-dom";

import { Home, MarsExpedition, NotFound, Error } from "../index";

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
