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

    lsUsersKey = 'supera-project-tools';

    constructor(props) {
        super(props);

        this.state = {
            tools: []
        }
    }

    componentDidMount() {
        const tools = JSON.parse(localStorage.getItem(this.lsUsersKey));
        if (tools !== null) {
            this.setState({
                tools
            });
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        await this.setState({
            tools: [
                ...this.state.tools,
                e.target.elements.tool.value
            ]
        });
        localStorage.setItem(this.lsUsersKey, JSON.stringify(this.state.tools));
    }

    render() {

        return (
            <>
                <Container className="mt-5">
                    <h3>+Cadastro de Ferramentas</h3>
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Label for="tool">Ferramenta:</Label>
                            <Input type="text" name="tool" id="tool" placeholder="Insira um nome de ferramenta"/>
                        </FormGroup>
                        {/* <FormGroup>
                            <Label for="pass-user">Senha:</Label>
                            <Input type="password" name="password" id="pass-user" placeholder="Insira uma senha"/>
                        </FormGroup> */}
                        <Button type="submit">Cadastrar</Button>
                    </Form>

                    <h3 className="mt-5">Listagem de Ferramentas</h3>
                    <Table bordered>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Ferramenta</th>
                                <th>Ações</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.tools.map((tool, index) => (
                                    <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{tool}</td>
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