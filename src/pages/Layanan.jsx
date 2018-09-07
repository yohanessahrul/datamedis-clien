// import history from '../history';
import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

import AOS from 'aos';

class Layanan extends Component {
    constructor(props) {
        super(props)
        AOS.init()
    }
    componentDidMount() {
        AOS.refresh()
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    render() {
        return (
            <div>
                <div className="headerWrap">
                    <Navigation/>
                </div>
                <div className="marginTopContain"></div>
                <div className="contentWrap">
                    <Container className="section">
                        <h2 style={{ display: 'block', margin: '0 auto 10px auto', color: '#487c7c' }} data-aos="fade-right" data-aos-duration="1000">Layanan</h2>
                        <Row>
                            <Col md="12">
                                <Row style={{ marginBottom: '20px', paddingBottom: '20px', borderBottom: 'thin solid #e8e8e8' }} data-aos="fade-right" data-aos-duration="1000">
                                    <Col md="4" sm="12">
                                        <img src={require('../assets/layanan/produk-visual-lab.png')}  alt="visual-lab" />
                                    </Col>
                                    <Col md="8" sm="12">
                                        <h4 style={{ marginTop: '35px' }}>Visualisasi Hasil Lab</h4>
                                        Hasil lab tradisional yang berbasis text dan angka sering kali sulit dimengerti orang awam sehingga datamedis.id membuatkan visualisasi hasil lab mengunakan grafik yang interaktip dengan berbagai penjelasan yang memudahkan kamu mengerti hasil lab sendiri.
                                        <br/><br/>
                                        <Link to="/chart">
                                            <Button color="info">Lihat Demo</Button>
                                        </Link>
                                    </Col>
                                </Row>
                                <Row style={{ marginBottom: '20px', paddingBottom: '20px', borderBottom: 'thin solid #e8e8e8' }} data-aos="fade-right" data-aos-duration="1000">
                                    <Col md="4" sm="12">
                                        <img src={require('../assets/layanan/produk-visual-tubuh.png')}  alt="visual-tubuh" />
                                    </Col>
                                    <Col md="8" sm="12">
                                        <h4 style={{ marginTop: '35px' }}>Visualisasi Tubuh</h4>
                                        Bahasa medis dan penjelasan dokter terkadang tidak mudah dicerna oleh orang non-medis, jadi ini membuat datamedis.id memilih untuk menjelaskan situasi kesehatan dirimu mengunakan visualisasi dengan tubuh ilustrasi yang interaktip.
                                    </Col>
                                </Row>
                                <Row style={{ marginBottom: '20px', paddingBottom: '20px', borderBottom: 'thin solid #e8e8e8' }} data-aos="fade-right" data-aos-duration="1000">
                                    <Col md="4" sm="12">
                                        <img src={require('../assets/layanan/produk-perjalanan-kesehatan.png')}  alt="img1" />
                                    </Col>
                                    <Col md="8" sm="12">
                                        <h4 style={{ marginTop: '35px' }}>Perjalanan Kesehatan</h4>
                                        Melihat tumpukan sejarah rekam medis sendiri sering kali membuat kita berharap ada rangkuman kronologis yang mudah di-ikuti, maka datamedis.id menghadirkan solusi rangkuman sejarah rekam medis pribadi berbasis animasi yang telah disutradarai untuk dimengerti dari berbagai level pengetahuan medis dan pastinya menarik untuk ditonton.
                                    </Col>
                                </Row>
                                <Row style={{ marginBottom: '20px', paddingBottom: '20px', borderBottom: 'thin solid #e8e8e8' }} data-aos="fade-right" data-aos-duration="1000">
                                    <Col md="4" sm="12">
                                        <img src={require('../assets/layanan/produk-dashboard-kesehatan.png')}  alt="img1" />
                                    </Col>
                                    <Col md="8" sm="12">
                                        <h4 style={{ marginTop: '35px' }}>Dashboard Kesehatan</h4>
                                        Data kesehatan populasi yang ter-rangkumkan bisa menjadi sangat bernilai strategis untuk pengambil kebijakan, daripada ini datamedis.id mempersembahkan sebuah dashboard untuk merangkum data kesehatan populasi dengan grafik interaktip.
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Layanan;