import React, { Component } from 'react';
import {
    Container,
    Row,
    Col,
    CardBody,
    CardTitle,
    Progress,
} from 'reactstrap';

import Hematologi from '../components/Charts/Hematologi';
import HitungJenis from '../components/Charts/HitungJenis';
import McvMchMchc from '../components/Charts/McvMchMchc';

class ChartMedis extends Component {
    constructor(props) {
        super(props)
    }

    render() { 
        return (
            <div style={{ display: 'table', width: '100%', height: '100%', background: '#e8f4f3', margin: 0, padding: 0 }}>
                <Container>
                    <Row style={{ marginTop: '20px'}}>
                        <Col md="4" style={{ height: '200px'}}>
                            <CardBody style={{ height: '200px',border: 'thin solid #bed8d6', borderRadius: '5px', background: '#0dc4b8', color: 'white'}}>
                                <CardTitle>Isi hasil pemeriksaan</CardTitle>
                                <img style={{ width: '50px' }} src={require('../assets/lab.png')} alt="image3" />
                            </CardBody>
                        </Col>
                        <Col md="8" style={{ height: '200px'}}>
                            <CardBody style={{ height: '200px', border: 'thin solid #bed8d6', borderRadius: '5px', background: 'white', color: 'black'}}>
                                <p><span style={{ width: '120px', display: 'inline-table', marginLeft: '10px' }}>NO.MED.REC</span>: 123</p>
                                <p><span style={{ width: '120px', display: 'inline-table', marginLeft: '10px' }}>TGL. LAHIR</span>: Pramita Lab</p>
                                <p><span style={{ width: '120px', display: 'inline-table', marginLeft: '10px' }}>RUANG</span>: POLI SPESIALIS</p>
                                <p><span style={{ width: '120px', display: 'inline-table', marginLeft: '10px' }}>KET. KLINIK</span>: POLI SPESIALIS</p>
                                <p><span style={{ width: '120px', display: 'inline-table', marginLeft: '10px' }}>NO.LAB</span>: 321123</p>
                                <p><span style={{ width: '120px', display: 'inline-table', marginLeft: '10px' }}>NAMA</span>: SANDI RAHAYU</p>
                            </CardBody>
                        </Col>
                    </Row>
                    <Row style={{ marginBottom: '20px'}}>
                        <Col md="12">
                            <CardBody className="cardBodyChart">
                                <Hematologi/>
                                <hr/>
                                <HitungJenis/>
                                <hr/>
                                <McvMchMchc/>
                            </CardBody>
                        </Col>
                    </Row>
                    <div style={{ marginBottom: '250px' }}></div>
                </Container>
            </div>
        );
    }
}

export default ChartMedis;
