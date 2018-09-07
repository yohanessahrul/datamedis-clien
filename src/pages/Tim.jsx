import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

class Tim extends Component {
    componentDidMount() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    render() {
        return (
            <div>
                <div className="headerWrap">
                    <Navigation/>
                </div>
                
                <div className="contentWrap">
                    <Container className="section">
                        <Row>
                            <Col md="12">
                                <h1>Tim Kami</h1>
                                {/* <p>Kebijakan privasi ini menggambarkan informasi pribadi yang kami kumpulkan dan bagaimana kami menggunakannya.</p> */}
                            </Col>
                        </Row>
                        <Row>
                            <Col md="12">
                                {/* <h4>A. Tentang Datamedis.id</h4> */}
                                <div>
                                    <ul>
                                        <li>
                                            Ruben Kurniawan, Direktur Utama
                                        </li>
                                        <li>
                                            Faisal Wirakusuma, Direktur Datascience
                                        </li>
                                        <li>
                                            Lily Widjaja, Advisor untuk Format Rekam Medis
                                        </li>
                                        <li>
                                            Dimas Prasetyo, Advisor untuk Rekam Medis Lab
                                        </li>
                                        <li>
                                            Dr Bayu Prawira Hie, Advisor untuk Rekam Medis Dr Umum
                                        </li>
                                        <li>
                                            Yovan Markesna, Manager Web Development
                                        </li>
                                        <li>
                                            Ricky Prasetyo, Manager Marketing
                                        </li>
                                        <li>
                                            Sumiyati, Manager Keuangan
                                        </li>
                                        <li>
                                            Sagita Laraswati, Manager HRD, GA & Legal
                                        </li>
                                        <li>
                                            Rezak & Therry, Illustrator
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Tim;