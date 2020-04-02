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

class Usuarios extends Component {

    // //useState para o input user
    // const [user, setUser] = useState('');

    // //useState para o input password
    // const [pass, setPass] = useState('');

    // //function para setar o user
    // const handleUser= (e) => {
    //     setUser(e.target.value);
    // }

    // //function para setar a password
    // const handlePass= (e) => {
    //     setPass(e.target.value);
    // }

    handleSubmit = (e) => {
        e.preventDefault(); 
        const userName = e.target.elements.userName.value;
        localStorage.setItem('@supera-project/userName', userName);
        window.location.reload();
    }

    render(){

        const userName = localStorage.getItem('@supera-project/userName');

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
                            <tr>
                                <th scope="row">1</th>
                                <td>{userName}</td>
                                <td>Editar / Remover</td>
                            </tr>
                        </tbody>
                    </Table>
                </Container>
            </>
        );
    }
}

export default Usuarios;