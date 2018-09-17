import React, { Component } from 'react';
import {
    Container,
    Row,
    Col,
    CardBody,
    CardTitle,
} from 'reactstrap';

import Hematologi from '../components/Charts/Hematologi';
import HitungJenis from '../components/Charts/HitungJenis';
import McvMchMchc from '../components/Charts/McvMchMchc';

class ChartMedis extends Component {
    render() { 
        return (
            <div style={{ display: 'table', width: '100%', height: '100%', background: '#e8f4f3', margin: 0, padding: 0 }}>
                <Container>
                    <Row style={{ marginTop: '20px'}}>
                        <Col md="4" style={{ height: '200px'}}>
                            <CardBody style={{ height: '200px',border: 'thin solid #bed8d6', borderRadius: '5px', background: '#0dc4b8', color: 'white', position: 'relative'}}>
                                <h1 style={styles.h1}>Hasil Pemeriksaan Laboratorium</h1>
                                <img style={styles.iconHeader} src={require('../assets/lab.png')} alt="image3" />
                            </CardBody>
                        </Col>
                        <Col md="8" style={{ height: '200px'}}>
                            <CardBody style={{ height: '200px', border: 'thin solid #bed8d6', borderRadius: '5px', background: 'white', color: 'black'}}>
                                <p><span style={{ width: '120px', display: 'inline-table', marginLeft: '10px' }}>Tanggal</span>: 2018-09-14</p>
                                <p><span style={{ width: '120px', display: 'inline-table', marginLeft: '10px' }}>Nama</span>: Smith</p>
                                <p><span style={{ width: '120px', display: 'inline-table', marginLeft: '10px' }}>Dokter</span>: Dr. Jane Doe</p>
                                <p><span style={{ width: '120px', display: 'inline-table', marginLeft: '10px' }}>Lab</span>: Prodia</p>
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

const styles = {
    h1: {
        color: 'white',
        fontSize: 35,
        fontWeight: 'bold',
        lineHeight: '38px',
        marginTop: '45px',
        zIndex: '15',
    },
    iconHeader: {
        color: 'red',
        position: 'absolute',
        top: '20px',
        height: '110px',
        right: '-30px',
        zIndex: '17',
    }
}

export default ChartMedis;
