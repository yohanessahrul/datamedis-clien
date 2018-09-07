import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

class Footer extends Component {
    render() {
        return (
            <div style={{ background: '#3d6666' }}>
                <Container>
                    <Row>
                        <div style={{ width: '100%', height: '50px'  }}></div>
                    </Row>
                    <Row style={{ marginBottom: '50px' }}>
                        <Col md="4">
                            <div className="footerLogo">
                                <img src={require('../assets/logo-datamedis-header.png')} alt="logo-footer" />
                            </div>
                            <div style={{ marginTop: '20px' }}>
                                <ul style={{ margin: 0, padding: 0 }}>
                                    <li style={{ listStyle: 'none', color: 'white' }}>Phone : 0821-1470-7430</li>
                                    <li style={{ listStyle: 'none', color: 'white' }}>EMail : info[at]datamedis.id</li>
                                </ul>
                            </div>
                        </Col>
                        <Col md="4">
                            <div style={{ background: 'yellow' }}></div>
                        </Col>
                        <Col md="4">
                            <div style={{ marginTop: '20px' }}>
                                <ul style={{ margin: 0, padding: 0 }}>
                                    <li style={{ listStyle: 'none', color: 'white' }}>
                                        <Link style={{ color: 'white' }} to="/kebijakan">Kebijakan Privasi</Link>
                                    </li>
                                    <li style={{ listStyle: 'none', color: 'white' }}>
                                        <Link style={{ color: 'white' }} to="/syarat">Syarat dan ketentuan layanan</Link>
                                    </li>
                                    <li style={{ listStyle: 'none', color: 'white' }}>
                                        <Link style={{ color: 'white' }} to="/tim">Tim Kami</Link>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="12" style={{  borderTop: 'thin solid #487070' }}>
                            <p style={{ textAlign: 'center', color: 'white', padding: '20px' }}>&copy; PT. Ilmu Data Terpadu</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Footer;