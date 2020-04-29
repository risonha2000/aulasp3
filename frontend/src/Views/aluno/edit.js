import React, { Component } from "react";
import { Container, Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";

class EditaAluno extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      nome: "",
      email: "",
      morada: "",
      telefone: "",
    };
  }

  componentDidMount() {
    let alunoId = this.props.match.params.id;
    const url = "http://localhost:3001/api/v1/aluno/" + alunoId;

    axios
      .get(url)
      .then((res) => {
        if (res.data.success) {
          //dados recebidos
          //console.log(JSON.stringify(res.data.dados[0]));

          const dados = res.data.dados[0];
          this.setState({
            id: dados.id,
            nome: dados.nome,
            email: dados.email,
            morada: dados.morada,
            telefone: dados.telefone,
          });
        } else {
          console.log("Erro");
        }
      })
      .catch((error) => {
        console.log("Error Msg: " + error);
      });
  }

  render() {
    return (
      <Container>
        <h1>Formulário de edição de um novo aluno</h1>
        <Form responsive="true">
          <FormGroup row>
            <Input
              type="hidden"
              name="id"
              id="id"
              value={this.state.id}
              onChange={(value) => this.setState({ id: value.target.value })}
            />
          </FormGroup>
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
              onChange={(value) =>
                this.setState({ morada: value.target.value })
              }
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
              onChange={(value) =>
                this.setState({ telefone: value.target.value })
              }
            />
          </FormGroup>
          <Button color="primary" size="lg" onClick={() => this.atualizaAluno()}>
            Edita Aluno
          </Button>
        </Form>
      </Container>
    );
  }

  atualizaAluno() {
    if (this.state.id !== "" && this.state.nome !== "") {
      const url = "http://localhost:3001/api/v1/aluno/"+this.state.id;
      const dados = {
        id: this.state.id,
        nome: this.state.nome,
        email: this.state.email,
        morada: this.state.morada,
        telefone: this.state.telefone,
      };

      axios
        .put(url, dados)
        .then((response) => {
          console.log(response.data);
          if (response.status === 200 && response.data.success === true) {
            alert("Aluno atualizado com sucesso. [ID: "+ response.data.dados+"]");
            this.props.history.push('/');
          } else {
            alert("Ocorreu um erro ao tentar editar os dados do aluno. Tente novamente mais tarde.");
          }
        })
        .catch((error) => {
          console.log("Error Msg: " + error);
          alert("Ocorreu um erro ao tentar editar os dados do aluno. Tente novamente mais tarde.");
          this.props.history.push('/');
        });
    }
  }
}

export default EditaAluno;