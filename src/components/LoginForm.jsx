import React, { Component } from 'react';
import {
    Button,
    Form,
    FormGroup,
    Input,
    InputGroup,
    InputGroupAddon,
} from 'reactstrap';
import { Icon } from 'react-icons-kit';
import { mail4, key2 } from 'react-icons-kit/icomoon';
import { Link as Links } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loginAction } from '../store/action/auth';

class LoginForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            emailTrue: null,
            passwordTrue: null,
        }
        this.onChange = this.onChange.bind(this)
        this.handleForm = this.handleForm.bind(this)
    }

    onChange (e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleForm (e) {
        e.preventDefault()
        console.log(this.state.email, this.state.password)

        let payload = {
            email: this.state.email,
            password: this.state.password,
        }

        this.props.loginAction(payload)
    }

    render() {
        const notifClassInputEmail = () => {
            if (this.state.emailTrue === null) {
                return ''
            } else if (this.state.emailTrue === true) {
                return 'formBenar'
            } else if (this.state.emailTrue === false) {
                return 'formSalah'
            }
        }
        const notifClassInputPassword = () => { 
            if (this.state.passwordTrue === null) {
                return ''
            } else if (this.state.passwordTrue === true) {
                return 'formBenar'
            } else if (this.state.passwordTrue === false) {
                return 'formSalah'
            }
        }
        return (
            <div>
                <p className="text-muted">Masuk ke akun anda</p>
                <Form onSubmit={this.handleForm}>
                  <FormGroup>
                    <InputGroup>
                        <Input
                            type="email"
                            name="email"
                            placeholder="Email"
                            onChange={this.onChange}
                            className={notifClassInputEmail()}
                        />
                        <InputGroupAddon addonType="append">
                          <Icon style={{background: '#d6d6d6', padding: '5px 10px', color: '#7F7F7F'}} size={20} icon={mail4} />
                        </InputGroupAddon>
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup>
                        <Input
                            type="password"
                            name="password"
                            placeholder="Password"
                            onChange={this.onChange}
                            className={notifClassInputPassword()}
                        />
                        <InputGroupAddon addonType="append">
                          <Icon style={{background: '#d6d6d6', padding: '5px 10px', color: '#7F7F7F'}} size={20} icon={key2} />
                        </InputGroupAddon>
                    </InputGroup>
                  </FormGroup>
                  <Button
                    style={{ background: '#59a2d4', borderColor: '#59a2d4', borderRadius: '0px'}}>
                    Masuk
                  </Button>
                  <Links className="float-right" to="/resetpassword">
                      <Button color="link">Lupa password</Button>
                  </Links>
                  <br/>
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
        loginAction
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
