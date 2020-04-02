import React from 'react';
import { Jumbotron } from 'reactstrap';

const Home = () => {
    return (
        <div>
            <Jumbotron>
                <h1 className="display-3">Olá, Supera!</h1>
                <p className="lead">Este é um layout simples feito com bootstrap usando react.js. Para acessar as telas, clique nos itens que se encontram na navbar.</p>
                <hr className="my-2" />
                <p>Espero conseguir agradar vocês! :D</p>
            </Jumbotron>
        </div>
    );
}

export default Home;