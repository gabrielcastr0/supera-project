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

class Ferramentas extends Component {

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
        const tool = e.target.elements.tool.value;
        localStorage.setItem('@supera-project/userName', userName);
        window.location.reload();
    }

    render(){

        const userName = localStorage.getItem('@supera-project/userName');
        const tool = localStorage.getItem('@supera-project/userName');

        return (
            <>
                <Container className="mt-5">
                    <h3>+Cadastro de Ferramentas</h3>
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Label for="userName">Usuário:</Label>
                            <Input type="text" name="userName" id="userName" placeholder="Insira um nome de usuário"/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="tool">Ferramenta:</Label>
                            <Input type="text" name="tool" id="tool" placeholder="Insira uma ferramenta"/>
                        </FormGroup>
                        <Button type="submit">Cadastrar</Button>
                    </Form>

                    <h3 className="mt-5">Listagem de Ferramentas</h3>
                    <Table bordered>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Usuário</th>
                                <th>Ferramenta</th>
                                <th>Ações</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>{userName}</td>
                                <td>{tool}</td>
                                <td>Editar / Remover</td>
                            </tr>
                        </tbody>
                    </Table>
                </Container>
            </>
        );
    }
}

export default Ferramentas;