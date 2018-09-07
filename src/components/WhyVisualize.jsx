import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

// import AOS from 'aos';

class WhyVisualize extends Component {
    render() {
        return (
            <div style={{ background: '#F4F9FE' }}>
                <Container className="section">
                    <Row>
                        <h2 style={{ display: 'block', margin: '0 auto 50px auto', color: '#42566d' }} data-aos="fade-up" data-aos-duration="1000">Mengapa Visualisasi Data Penting</h2>
                    </Row>
                    <Row>
                        <Col md="4" data-aos="fade-up" data-aos-duration="1000">
                            <div 
                                style={{ width: '150px',
                                height: '150px',
                                background: 'rgb(206, 238, 238)',
                                display: 'table',
                                margin: '0 auto',
                                borderRadius: '100%',
                                color: 'white',
                                padding: '40px',
                                position: 'relative'
                                }}>
                                <img style={{ width: '80px' }} src={require('../assets/why/having-an-idea.png')} alt="lamp" />
                                <h3 style={{
                                    position: 'absolute',
                                    marginLeft: 0,
                                    marginRight: 0,
                                    left: 0,
                                    right: 0,
                                    textAlign: 'center',
                                    background: '#4e8282',
                                    bottom: '-40px',
                                    borderRadius: '50px',
                                    padding: '8px'
                                }}>90%</h3>
                            </div>
                            <p style={{
                                width: '70%',
                                margin: '0 auto',
                                textAlign: 'center',
                                display: 'block',
                                // background: 'yellow',
                                color: '#7a7a7a',
                                marginBottom: '50px',
                                marginTop: '50px'
                            }}>Informasi diproses oleh otak bersifat visual</p>
                        </Col>
                        <Col md="4" data-aos="fade-up" data-aos-duration="1800">
                            <div 
                                style={{ width: '150px',
                                height: '150px',
                                background: 'rgb(206, 238, 238)',
                                display: 'table',
                                margin: '0 auto',
                                borderRadius: '100%',
                                color: 'white',
                                padding: '40px',
                                position: 'relative'
                                }}>
                                <img style={{ width: '80px' }} src={require('../assets/why/business-presentation.png')} alt="present" />
                                <h3 style={{
                                    position: 'absolute',
                                    marginLeft: 0,
                                    marginRight: 0,
                                    left: 0,
                                    right: 0,
                                    textAlign: 'center',
                                    background: '#4e8282',
                                    bottom: '-40px',
                                    borderRadius: '50px',
                                    padding: '8px'
                                }}>43%</h3>
                            </div>
                            <p style={{
                                width: '70%',
                                margin: '0 auto',
                                textAlign: 'center',
                                display: 'block',
                                // background: 'yellow',
                                color: '#7a7a7a',
                                marginBottom: '50px',
                                marginTop: '50px'
                            }}>Presentasi Yang Mengunakan Visualisasi Lebih Meyakinkan</p>
                        </Col>
                        <Col md="4"data-aos="fade-up" data-aos-duration="2600">
                            <div 
                                style={{ width: '150px',
                                height: '150px',
                                background: 'rgb(206, 238, 238)',
                                display: 'table',
                                margin: '0 auto',
                                borderRadius: '100%',
                                color: 'white',
                                padding: '40px',
                                position: 'relative'
                                }}>
                                <img style={{ width: '80px' }} src={require('../assets/why/time-management.png')} alt="time"/>
                                <h3 style={{
                                    position: 'absolute',
                                    marginLeft: 0,
                                    marginRight: 0,
                                    left: 0,
                                    right: 0,
                                    textAlign: 'center',
                                    background: '#4e8282',
                                    bottom: '-40px',
                                    borderRadius: '50px',
                                    padding: '8px'
                                }}>60.000 X</h3>
                            </div>
                            <p style={{
                                width: '70%',
                                margin: '0 auto',
                                textAlign: 'center',
                                display: 'block',
                                // background: 'yellow',
                                color: '#7a7a7a',
                                marginBottom: '50px',
                                marginTop: '50px'
                            }}>Kita memproses visual, 60.000 kali lebih cepat dari teks</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default WhyVisualize;