import React, { Component } from 'react';
import {
    Container,
    Row,
    Col,
} from 'reactstrap';
import { Link as Links } from 'react-router-dom';
import { Icon } from 'react-icons-kit';
import { circleLeft } from 'react-icons-kit/icomoon';

import DaftarForm from '../components/DaftarForm';


class Daftar extends Component {
    render() {
        return (
            <div className="fullPageLogin">
                <Container>
                    <Row>
                        <div style={{ width: '100%', height: '40px' }}></div>
                        <Col md="4"></Col>
                        <Col md="4" sm="12">
                            <Links className="linkPutih" to="/">
                                <Icon size={18} style={{ padding: '10px', marginRight: '10px'}} icon={circleLeft} />
                                Kembali ke beranda
                            </Links>
                        </Col>
                        <Col md="4"></Col>
                    </Row>
                    <Row>
                        <Col md="4"></Col>
                        <Col md="4" sm="12" className="seratusx400 bg-white">
                            <DaftarForm/>
                        </Col>
                        <Col md="4"></Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Daftar;