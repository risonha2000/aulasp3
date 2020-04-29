import React, { Component } from "react";
import { Container, Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";

class NovoAluno extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "",
      email: "",
      morada: "",
      telefone: "",
    };
  }

  render() {
    return (
      <Container>
        <h1>Formulário de criação de um novo aluno</h1>
        <Form responsive="true">
          <FormGroup row>
            <Label for="nome" size="lg">
              Nome:
            </Label>
            <Input
              type="text"
              name="nome"
              id="nome"
              bsSize="lg"
              value={this.state.nome}
              onChange={(value) => this.setState({ nome: value.target.value })}
            />
          </FormGroup>
          <FormGroup row>
            <Label for="email" size="lg">
              Email:
            </Label>
            <Input
              type="email"
              name="email"
              id="email"
              bsSize="lg"
              value={this.state.email}
              onChange={(value) => this.setState({ email: value.target.value })}
            />
          </FormGroup>
          <FormGroup row>
            <Label for="morada" size="lg">
              Morada:
            </Label>
            <Input
              type="text"
              name="morada"
              id="morada"
              bsSize="lg"
              value={this.state.morada}
              onChange={(value) => this.setState({ morada: value.target.value })}
            />
          </FormGroup>
          <FormGroup row>
            <Label for="telefone" size="lg">
              Telefone:
            </Label>
            <Input
              type="number"
              name="telefone"
              id="telefone"
              bsSize="lg"
              value={this.state.telefone}
              onChange={(value) => this.setState({ telefone: value.target.value })}
            />
          </FormGroup>
          <Button color="primary" size="lg" onClick={() => this.criaAluno()}>
            Novo Aluno
          </Button>
        </Form>
      </Container>
    );
  }

  criaAluno() {
    if (this.state.nome !== "") {
      const url = "http://localhost:3001/api/v1/aluno";
      const dados = {
        nome: this.state.nome,
        email: this.state.email,
        morada: this.state.morada,
        telefone: this.state.telefone,
      };

      axios
        .post(url, dados)
        .then((response) => {
          if (response.data.success === true) {
            alert("Aluno criado com sucesso. [ID: "+ response.data.dados.id+"]");
            this.props.history.push('/');
          } else {
            alert("2: " + response.data.dados);
          }
        })
        .catch((error) => {
          console.log("Error Msg: " + error);
        });
    }
  }
}

export default NovoAluno;
