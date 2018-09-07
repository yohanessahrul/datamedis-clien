import React, { Component } from 'react';
import {
    Container,
    Row,
    Col,
} from 'reactstrap';
import { Link as Links } from 'react-router-dom';

import ResetPasswordForm from '../components/ResetPasswordForm';

import { Icon } from 'react-icons-kit';
import { circleLeft } from 'react-icons-kit/icomoon';

class ResetPassword extends Component {
    render() {
        return (
            <div className="fullPageLogin">
                <Container>
                    <Row>
                        {/* <div className="marginTopContain"></div> */}
                        <div style={{ width: '100%', height: '50px' }}></div>
                        <Col md="2"></Col>
                        <Col md="4">
                            <Links className="linkPutih" to="/">
                                <Icon size={18} style={{ padding: '10px', marginRight: '10px'}} icon={circleLeft} />
                                Kembali ke beranda
                            </Links>
                            {/* <p style={{ marginLeft: '-15px', marginBottom: '8px' }}> Kembali ke Beranda</p> */}
                        </Col>
                        <Col md="4"></Col>
                        <Col md="2"></Col>
                    </Row>
                    <Row>
                        <Col md="2"></Col>
                        <Col md="4" sm="12" className="seratusx400 bg-white">
                            <ResetPasswordForm/>
                        </Col>
                        <Col md="4" sm="12">
                            {/* <Pendaftaran/> */}
                        </Col>
                        <Col md="2"></Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default ResetPassword;