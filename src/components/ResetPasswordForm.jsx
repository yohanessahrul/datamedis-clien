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
import { mail4 } from 'react-icons-kit/icomoon';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { resetPasswordAction } from '../store/action/auth';

class ResetPasswordForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
        }
        this.onChange = this.onChange.bind(this)
        this.handleForm = this.handleForm.bind(this)
    }

    onChange (e) {
        console.log(e.target.value)
        this.setState({
            email: e.target.value
        })
    }

    handleForm (e) {
        e.preventDefault()
        let payload = {
            email: this.state.email,
        }
        console.log(payload)
        this.props.resetPasswordAction(payload)
    }

    render() {
        return (
            <div>
                <h2>Reset Password</h2>
                <hr/>
                <br/>
                <Form onSubmit={this.handleForm}>
                  <FormGroup>
                    <InputGroup>
                        <Input
                            type="email"
                            name="email"
                            placeholder="Email"
                            onChange={this.onChange}
                            
                        />
                        <InputGroupAddon addonType="append">
                          <Icon style={{background: '#d6d6d6', padding: '5px 10px', color: '#7F7F7F'}} size={20} icon={mail4} />
                        </InputGroupAddon>
                    </InputGroup>
                  </FormGroup>
                  <Button
                    style={{ background: '#59a2d4', borderColor: '#59a2d4', borderRadius: '0px'}}>
                    Reset Password
                  </Button>
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
        resetPasswordAction
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ResetPasswordForm);

// export default ResetPasswordForm;