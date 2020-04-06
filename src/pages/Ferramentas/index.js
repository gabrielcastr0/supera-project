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

import './style.css';

export default class Ferramentas extends Component {

    lsUsersKey = 'supera-project-tools';

    constructor(props) {
        super(props);

        this.state = {
            tools: []
        }
    }

    // function para recuperar os dados salvos
    componentDidMount() {
        const tools = JSON.parse(localStorage.getItem(this.lsUsersKey));
        if (tools !== null && tools !== undefined) {
            this.setState({
                tools
            });
        }
    }

    // function para pegar os valores inseridos
    handleSubmit = async (e) => {
        e.preventDefault();
        
        await this.setState({
            tools: [
                ...this.state.tools,
                e.target.elements.tool.value
            ]
        });

        // objeto dos dados que serão salvos
        // const datas = {
        //     name: this.state.name
        // }

        // salvar no localStorage
        localStorage.setItem(this.lsUsersKey, JSON.stringify(this.state.tools));
        window.location.reload();
    }

    fRemove = (e) => {
        let tools = this.state.tools;
        tools.splice(e, 1);
        this.setState({
            tools: tools
        });
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
                                this.state.tools.map((tool, i) => (
                                    <tr key={i}>
                                        <th scope="row">{i + 1}</th>
                                        <td>{tool}</td>
                                        <td><Button color="warning">Editar</Button>
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