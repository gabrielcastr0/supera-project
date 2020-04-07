import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';

import Usuarios from './pages/Usuarios';
import Ferramentas from './pages/Ferramentas';
import Alugueis from './pages/Alugueis';

export default () => {
    return (
        <Switch>
            {/* acessar page home */}
            <Route exact path="/" >
                <Home />
            </Route>

            {/* acessar page usuarios */}
            <Route exact path="/usuarios">
                <Usuarios />
            </Route>

            {/* acessar page ferramentas */}
            <Route exact path="/ferramentas">
                <Ferramentas />
            </Route>

            {/* acessar page alugueis */}
            <Route exact path="/alugueis">
                <Alugueis />
            </Route>
        </Switch>
    )
}