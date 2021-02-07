import { Route, Switch } from "react-router-dom";

import { HomeWrapper, MarsExpedition, NotFound } from "../index";

export const Routes = () => {

    return (
        <Switch>
            <Route path="/mars_expedition" exact component={MarsExpedition}/>
            <Route path="/" exact component={HomeWrapper}/>

            <Route component={NotFound}/>
        </Switch>
    );
};
