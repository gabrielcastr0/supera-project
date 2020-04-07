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

    // function para obter os users salvos
    componentDidMount() { 
        const users = JSON.parse(localStorage.getItem(this.lsUsersKey));
        if (users !== null) {
            this.setState({
                users
            });
        }
    }

    // function para setar (cadastrar) users
    handleSubmit = async (e) => {
        e.preventDefault();
        let select = document.querySelector("#userInput");

        await this.setState({
            users: [
                ...this.state.users,
                e.target.elements.userName.value
            ]
        });
        
        localStorage.setItem(this.lsUsersKey, JSON.stringify(this.state.users));
        select.value = "";
        select.focus();
    }

    // function para remover users
    fRemove = (e) => {
        let users = this.state.users;
        users.splice(e, 1);
        this.setState({
            users: users
        });

        localStorage.setItem(this.lsUsersKey, JSON.stringify(this.state.users));
    }

    // function para editar users
    fEdit = (e) => {
        let select = document.querySelector("#userInput");
        let users = this.state.users[e];
        select.value = users;
        this.setState({
            index: e
        })

        select.focus();
    }

    render() {

        return (
            <>
                <Container className="mt-5">
                    <h3>+Cadastro de Usuários</h3>
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Label for="userName">Usuário:</Label>
                            <Input type="text" name="userName" id="userInput" className="userInput" placeholder="Insira um nome de usuário"/>
                        </FormGroup>
                        {/* <FormGroup>
                            <Label for="pass-user">Senha:</Label>
                            <Input type="password" name="password" id="pass-user" placeholder="Insira uma senha"/>
                        </FormGroup> */}
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
                                this.state.users.map((user, i) => (
                                    <tr key={i}>
                                        <th scope="row">{i + 1}</th>
                                        <td>{user}</td>
                                        <td><Button color="warning" onClick={()=>this.fEdit(i)} disabled >Editar (don't work)</Button>
                                        <Button onClick={()=>this.fRemove(i)} color="danger">Remover</Button></td>
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