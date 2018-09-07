import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

import AOS from 'aos';

class SlideArea extends Component {
    constructor(props){
        super(props)
        AOS.init()
    }
    componentWillReceiveProps(){
        AOS.refresh();
    }
    render() {
        return (
            <div>
                <div className="SlideAreaWrap">
                    <div className="hueSaturation"></div>
                    <div style={{ width: '100%', height: '100%', zIndex: '15', position: 'absolute' }}>
                        <div className="marginTopSlide"></div>
                        <Container>
                            <Row>
                                <Col md="12" className="containerSLide">
                                    <h1 data-aos="fade-right" data-aos-duration="2000">
                                        Visualisasikan Data Kesehatan Anda
                                    </h1>
                                    <h3 data-aos="fade-left" data-aos-duration="2000">
                                        Sebanyak 90% informasi yang diproses oleh otak bersifat visual, atas dasar itu kami hadir untuk memudahkan anda menganalisa kesehatan anda melalui tampilan visual.
                                    </h3>
                                    <Link to="/layanan" style={{ textDecoration: 'none' }}>
                                        <Button size="lg" className="btnSlide" color="success" data-aos="fade-right" data-aos-duration="1500">
                                            Baca Selengkapnya
                                        </Button>
                                    </Link>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    <img style={{ zIndex: '-50'}} src={require('../assets/slide.jpg')} alt="slider-image1" />
                    {/* <img style={{ zIndex: '-50'}} src={require('../assets/slide2.png')} alt="slider-image2" /> */}
                </div>
            </div>
        );
    }
}

export default SlideArea;