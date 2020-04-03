import React, { Component } from 'react';
import { 
    Container, 
    Table,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
} from 'reactstrap';

export default class Usuarios extends Component {

    lsUsersKey = 'supera-project-users'; // key do localStorage

    constructor(props) {
        super(props);

        this.state = { // array de users
            users: []
        }
    }

    componentDidMount() { 
        const users = JSON.parse(localStorage.getItem(this.lsUsersKey));
        if (users !== null) {
            this.setState({
                users
            });
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        await this.setState({
            users: [
                ...this.state.users,
                e.target.elements.userName.value
            ]
        });
        localStorage.setItem(this.lsUsersKey, JSON.stringify(this.state.users));
    }

    render() {

        return (
            <>
                <Container className="mt-5">
                    <h3>+Cadastro de Usuários</h3>
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Label for="userName">Usuário:</Label>
                            <Input type="text" name="userName" id="userName" placeholder="Insira um nome de usuário"/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="pass-user">Senha:</Label>
                            <Input type="password" name="password" id="pass-user" placeholder="Insira uma senha"/>
                        </FormGroup>
                        <Button type="submit">Cadastrar</Button>
                    </Form>

                    <h3 className="mt-5">Listagem de Usuários</h3>
                    <Table bordered>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Usuário</th>
                                <th>Ações</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.users.map((user, index) => (
                                    <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{user}</td>
                                        <td>Editar / Remover</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                </Container>
            </>
        );
    }
}