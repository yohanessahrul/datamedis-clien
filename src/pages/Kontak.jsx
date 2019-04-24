import React, { Component } from 'react';
import AOS from 'aos';
import { Container, Row, Col } from 'reactstrap';

import { Icon } from 'react-icons-kit';
import { envelopeO, mapPin, phoneSquare } from 'react-icons-kit/fa'

import Navigation from '../components/Navigation';
import FormBukuTamu from '../components/FormBukuTamu';
import Footer from '../components/Footer';

class Kontak extends Component {
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
          <Navigation />
        </div>
        <div className="marginTopContain"></div>
        <div className="contentWrap">
          <Container className="section">
            <h2 style={{ display: 'block', margin: '0 auto 10px auto', color: '#487c7c' }} data-aos="fade-right" data-aos-duration="1000">Kontak</h2>
            <Row>
              <Col md="6">
                <FormBukuTamu />
              </Col>
              <Col md="6">
                <Row style={{ margin: '20px 0px' }}>
                  <Col md="12">
                    <h5 style={{ color: '#335454' }}><Icon icon={mapPin} /> Alamat</h5>

                    <div>
                      <p style={{ color: 'gray' }}>
                        Klinik Central Park Mall<br />
                        Jl. Letjen S. Parman, Tj. Duren Selatan,<br />
                        Grogol petamburan, <br />
                        Jakarta Barat, Jakarta 11470
                      </p>
                    </div>
                  </Col>
                  <Col md="12">
                    <h5 style={{ color: '#335454' }}><Icon icon={envelopeO} /> Email</h5>

                    <div>
                      <p style={{ color: 'gray' }}>
                        info[at]datamedis.id<br />
                      </p>
                    </div>
                  </Col>
                  <Col md="12">
                    <h5 style={{ color: '#335454' }}><Icon icon={phoneSquare} /> Telepon</h5>

                    <div>
                      <p style={{ color: 'gray' }}>
                        (+62) 821-1470-7430<br />
                      </p>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Kontak;