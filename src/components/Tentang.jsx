import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import { connect } from 'react-redux';
import { pindahMain } from '../store/action/path';
import { bindActionCreators } from 'redux';

class Tentang extends Component {
    constructor(props){
        super(props)
        this.changeMain = this.changeMain.bind(this)
    }
    changeMain(e) {
        e.preventDefault();
        let payload = {
            main: window.location.pathname,
            path: e.target.id
        }
        this.props.pindahMain(payload)
        console.log('pindah main yang jauh hahaha')
    }
    render() {
        return (
            <div className="contentWrap">
                <Container className="section">
                    <Row>
                        <Col>
                            <h2 style={{ display: 'block', margin: '0 auto 10px auto', color: '#487c7c' }} data-aos="fade-up" data-aos-duration="1000">Tentang Datamedis</h2>
                            <p
                                data-aos="fade-right"
                                data-aos-duration="1000"
                                style={{ color: '#7a7a7a', lineHeight: '1.5em', fontSize: '18px'}}
                            >
                                Datamedis.id adalah situs pertama yang didirikan bertujuan membantu melakukan visualisasi data kesehatan melalui 4 produk yaitu :
                            </p>
                            <ul style={{ marginTop: '20px', marginBottom: '20px', width: '100%!important' }}>
                                <li data-aos="fade-right" data-aos-duration="700">
                                    <p  style={{ color: '#7a7a7a', fontSize: '18px' }}>Visualisasi Hasil Lab</p>
                                </li>
                                <li data-aos="fade-right" data-aos-duration="1000">
                                    <p  style={{ color: '#7a7a7a', fontSize: '18px' }}>Visualisasi Tubuh</p>
                                </li>
                                <li data-aos="fade-right" data-aos-duration="1300">
                                    <p  style={{ color: '#7a7a7a', fontSize: '18px' }}>Perjalanan Kesehatanku</p>
                                </li>
                                <li data-aos="fade-right" data-aos-duration="1600">
                                    <p  style={{ color: '#7a7a7a', fontSize: '18px' }}>Dashboard Kesehatan</p>
                                </li>
                            </ul>
                            <p
                                data-aos="fade-right"
                                data-aos-duration="1000"
                                style={{ color: '#7a7a7a', fontSize: '18px', lineHeight: '1.5em'}}
                            >
                                Produk visualisasi data kesehatan dibuat berdasarkan rekam medis ungahan yang telah mendapatkan persetujuan dari pemilik-nya dan rekam medis tersimpan dapat diakses secara online dan terproteksi oleh pihak yang telah mendapatkan persetujuan dari pemilik-nya.

                            </p>
                        </Col>
                    </Row>
                    <Row>

                    </Row>
                </Container>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        pathSetting: state.path
    }
}
  
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        pindahMain
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Tentang);
// export default Tentang;