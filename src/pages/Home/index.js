import React from 'react';
import { Jumbotron } from 'reactstrap';

const Home = () => {
    return (
        <div>
            <Jumbotron>
                <h1 className="display-3">Olá, Supera!</h1>
                <p className="lead">Este é um layout simples feito com bootstrap usando react.js.</p>
                <p className="lead">Para acessar as telas, clique nos itens que se encontram no menu.</p>
                <hr className="my-2" />
                <p>Feito por: Gabriel Castro | 2020</p>
            </Jumbotron>
        </div>
    );
}

export default Home;