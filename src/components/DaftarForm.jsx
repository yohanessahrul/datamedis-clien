import React, { Component } from 'react';
import {
    Button,
    Form,
    FormGroup,
    Input,
    InputGroup,
    InputGroupAddon,
    FormFeedback,
} from 'reactstrap';
import { Link as Links } from 'react-router-dom';

import { Icon } from 'react-icons-kit';
import { user, mail4, key2 } from 'react-icons-kit/icomoon';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { daftarAction } from '../store/action/auth';

class DaftarForm extends Component {
    constructor() {
        super()
        this.state = {
            nama: null,
            email: null,
            password1: null,
            password2: null,
            nameTrue: null, // update to boolean
            emailTrue: null, // update to boolean
            password1True: null, // update to boolean
            password2True: null, // update to boolean
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange (e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit (e) {
        e.preventDefault()
        let payload = {
            nama: this.state.nama,
            email: this.state.email,
            password1: this.state.password1,
            password2: this.state.password2,
        }
        this.props.daftarAction(payload)
    }

    emailChecker () {
        let regChecker = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regChecker.test(String(this.state.email).toLocaleLowerCase())
    }

    render() {
        const inputEmail = () => {
            if (this.emailChecker() === false && this.state.email !== null) {
                return 'formSalah';
            } else if (this.emailChecker() === true) {
                return 'formBenar';
            } else if (this.emailChecker() === false && this.state.email === '') {
                return '';
            }
        }
        const inputPassword1 = () => {
            if (this.state.password1 === null || this.state.password1 === '') {
                return '';
            } else if (this.state.password1.length < 8) {
                return  'formSalah';
            } else {
                return 'formBenar';
            }
        }
        const inputPassword2 = () => {
            if (this.state.password2 === null || this.state.password2 === '') {
                // return (<p className="notif-red">Ketik ulang password</p>)
                return '';
            } else if (this.state.password2 !== this.state.password1) {
                return  'formSalah';
            } else {
                return 'formBenar';
            }
        }
        const notifPassword1 = () => {
            if (this.state.password1 === null || this.state.password1 === '') {
                // return (<p className="notif-red">Ketik ulang password</p>)
                return (<p className="notif">Password minimal 8 karakter, kombinasi huruf dan angka</p>)
            } else if (this.state.password1.length < 8) {
                return  (<p className="notif-red">Password masih kurang dari 8 karakter</p>)
            } else {
                return (<p className="notif-green">Password sudah sesuai</p>)
            }
        }
        const notifPassword2 = () => {
            if (this.state.password2 === null || this.state.password2 === '') {
                // return (<p className="notif-red">Ketik ulang password</p>)
                return (<p className="notif">Ketik ulang password</p>)
            } else if (this.state.password2 === this.state.password1) {
                return (<p className="notif-green">Password benar</p>)
            } else {
                return  (<p className="notif-red">Samakan dengan password diatas</p>)
            }
        }
        const notifEmail = () => {
            if (this.emailChecker() === false && this.state.email === null) {
                return (<p className="notif">Isikan email dengan format yang benar</p>)
            } else if (this.emailChecker() === false && this.state.email !== null) {
                return (<p className="notif-red">Format email belum benar</p>)
            } else if (this.emailChecker() === true && this.state.email !== null) {
                return (<p className="notif-green">Format email benar</p>)
            }
        }
        return (
            <div style={{ padding: '15px'}}>
                <h3>Form Pendaftaran</h3>
                <hr/>
                <Form onSubmit={this.onSubmit}>
                  <FormGroup>
                    <InputGroup>
                        <Input
                            type="text"
                            name="nama"
                            placeholder="Name"
                            onChange={this.onChange}
                        />
                        <FormFeedback valid>You will not be able to see this</FormFeedback>
                        <InputGroupAddon addonType="append">
                          <Icon style={{background: '#d6d6d6', padding: '5px 15px', color: '#7F7F7F'}} size={20} icon={user} />
                        </InputGroupAddon>
                    </InputGroup>
                    <p className="notif">Isikan dengan nama lengkap</p>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup>
                        <Input
                            type="email"
                            name="email"
                            placeholder="Email"
                            onChange={this.onChange}
                            className={inputEmail()}
                        />
                        <InputGroupAddon addonType="append">
                          <Icon style={{background: '#d6d6d6', padding: '5px 15px', color: '#7F7F7F'}} size={20} icon={mail4} />
                        </InputGroupAddon>
                    </InputGroup>
                    {/* <p className="notif">Format email yang benar (contoh: sample@gmail.com)</p> */}
                    {notifEmail()}
                  </FormGroup>
                  <FormGroup>
                    <InputGroup>
                        <Input
                            type="password"
                            name="password1"
                            placeholder="Password"
                            onChange={this.onChange}
                            className={inputPassword1()}
                        />
                        <InputGroupAddon addonType="append">
                          <Icon style={{background: '#d6d6d6', padding: '5px 15px', color: '#7F7F7F'}} size={20} icon={key2} />
                        </InputGroupAddon>
                    </InputGroup>
                    {/* <p className="notif">Minimal 8 karakter.</p> */}
                    {notifPassword1()}
                  </FormGroup>
                  <FormGroup>
                    <InputGroup>
                        <Input
                            type="password"
                            name="password2"
                            placeholder="Re-type Password"
                            onChange={this.onChange}
                            className={inputPassword2()}
                        />
                        <InputGroupAddon addonType="append">
                          <Icon style={{background: '#d6d6d6', padding: '5px 15px', color: '#7F7F7F'}} size={20} icon={key2} />
                        </InputGroupAddon>
                    </InputGroup>
                    {/* <p className="notif">Ketik ulang password</p> */}
                    {notifPassword2()}
                  </FormGroup>
                  <Button
                    style={{ borderRadius: '0px'}}
                    color="info">Daftar
                  </Button>
                  <Links className="float-right" to="/login">
                      <Button color="link">Kembali ke login</Button>
                  </Links>
                </Form>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        userLogin: state.userLogin
    }
}
  
const mapDispatchToProps = (dispatch) => {
return bindActionCreators({
    daftarAction
}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(DaftarForm);
