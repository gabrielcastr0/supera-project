import React, { Component } from 'react';
import { 
    Container,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
} from 'reactstrap';

import './style.css';

export default class Alugueis extends Component {

    lsToolsKey = 'supera-project-tools'; // chave de tools no localStorage
    lsUsersKey = 'supera-project-users'; // chave de users no localStorage
    lsAluguelKey = 'supera-project-aluguel'; // chave de aluguel no localStorage

    constructor(props) {
        super(props);

        this.state = {
            tools: [],
            users: []
        }
    }

    // function para recuperar os dados salvos (Tools + Users)
    componentDidMount() {
        const tools = JSON.parse(localStorage.getItem(this.lsToolsKey));
        if (tools !== null && tools !== undefined) {
            this.setState({
                tools
            });
        }

        const users = JSON.parse(localStorage.getItem(this.lsUsersKey));
        if (users !== null && users !== undefined) {
            this.setState({
                users
            });
        }
    }


    // function para pegar os valores inseridos
    handleSubmit = async (e) => {
        e.preventDefault();
        let selectUser = document.querySelector("#userInput");
        let selectTool = document.querySelector("#toolInput");

        await this.setState({
            // tools: [
            //     ...this.state.tools,
            //     e.target.elements.tool.value
            // ],
            // users: [
            //     ...this.state.users,
            //     e.target.elements.users.value
            // ]
            datas: [
                ...this.state.users,
                ...this.state.tools
            ]
        });

        alert("Ferramenta alugada com sucesso!");

        // objeto dos dados que serão salvos
        // const datas = {
        //     name: this.state.name
        // }

        // salvar no localStorage
        localStorage.setItem(this.lsAluguelKey, JSON.stringify(this.state.datas));

        selectTool.value = "Selecione uma ferramenta";
        selectUser.value = "Selecione um usuário";

        selectTool.focus();
        selectUser.focus();
    }

    render() {

        return (
            <>
                <Container className="mt-5">
                    <h3>+Cadastro de Aluguéis</h3>
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup className="form">
                            <Label for="users">Usuário:</Label>
                            <Input type="select" name="users" id="userInput">
                                <option selected>Selecione um usuário</option>
                                {
                                    this.state.users.map((user) => (
                                        <option>{user}</option>
                                    ))
                                }
                            </Input>

                            <Label for="tool" className="mt-3">Ferramenta:</Label>
                            <Input type="select" name="tool" id="toolInput">
                                <option selected>Selecione uma ferramenta</option>
                                {
                                    this.state.tools.map((tool) => (
                                        <option>{tool}</option>
                                    ))
                                }
                            </Input>
                        </FormGroup>
                        <Button type="submit">Realizar Aluguel</Button>
                    </Form>
                </Container>
            </>
        );
    }
}