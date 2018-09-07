import React, { Component } from 'react';
import { 
  Form,
  FormGroup,
  Input,
  Button,
  Label,
 } from 'reactstrap';
 
class FormBukuTamu extends Component {
  constructor(props){
    super(props)
    this.state = {
      nama: '',
      email: '',
      pesan: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleSubmit(event) {
    event.preventDefault();
    let respawn = {
      nama: this.state.nama,
      email: this.state.email,
      pesan: this.state.pesan,
    }
    console.log('HASIL SIMPAN => ', respawn)

    // set state to null again
    this.setState({
      nama: '',
      email: '',
      pesan: ''
    })
  }
  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label>Nama</Label>
            <Input className="inputType" type="text" name="nama" placeholder="Isi nama.." value={this.state.nama} onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label>Email</Label>
            <Input className="inputType" type="email" name="email" placeholder="Isi email.." value={this.state.email} onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label>Pesan</Label>
            <Input className="inputType" type="textarea" name="pesan" placeholder="Isi pesan" value={this.state.pesan} onChange={this.handleChange} />
          </FormGroup>
          <Button color="primary">Kirim</Button>
        </Form>
      </div>
    );
  }
}

export default FormBukuTamu;