import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from './Pages/SignIn';
import Home from './Pages/Home';
import Teste2 from './Pages/Teste2';



const Router = () => {

    return (
        <Switch >
            <Route path="/login" component={SignIn} />
            <Route path="/" exact component={Home} />
            <Route path="/teste" exact component={Teste2} />
        </Switch>
    );
}

export default Router;
