import React, { Component } from 'react';
import {
    Container,
    Row,
    Col,
    CardBody,
    CardTitle,
    Progress,
} from 'reactstrap';

class ChartMedis extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hemoglobin: {hasil: 13.5},
            led: {hasil: 3},
            leukosit: {hasil: 3750},
            basofil: {hasil: 0.7},
            eosinofil: {hasil: 4},
            batang: {hasil: 3},
            segmen: {hasil: 36},
            limfosit: {hasil: 35},
            monosit: {hasil: 8.5},
            hematokrit: {hasil: 34},
            trombosit: {hasil: 135980},
            eritrosit: {hasil: 6.14},
            mcv: {hasil: 65},
            mch: {hasil: 20},
            mchc: {hasil: 30},
            crp: {hasil: 5.0},
        }
        this.persentase = this.persentase.bind(this)
        this.onHover = this.onHover.bind(this)
        this.hoverLeave = this.hoverLeave.bind(this)
    }

    onHover (e) {
        this.setState({
            [e.target.id]: true
        })
    }
    
    hoverLeave (e) {
        this.setState({
            [e.target.id]: false
        })
    }

    persentase (maxValue, result) { // panjang, hasil,  
        let hasil = (result / maxValue) * 100
        return hasil
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
                            <CardBody style={{ background: 'white', border: 'thin solid #bed8d6', borderRadius: '5px', paddingBottom: '-100px', marginTop: '20px'}}>
                                <Row md="12" >
                                    <h4 style={{ width: '100%', display: 'block', margin: '10px 30px', fontWeight: 'bold', color: 'purple', marginTop: '20px', marginBottom: '-10px', paddingBottom: '20px' }}>Hematologi</h4>
                                    <Col md="12">
                                        <Row style={{ marginTop: '10px', padding: '10px 15px', position: 'relative'}}>
                                            <Col md="4" id="hemoglobinIs" onMouseOver={this.onHover} onMouseLeave={this.hoverLeave}>Hemoglobin</Col>
                                            <Col md="8">
                                                <div style={{ width: `${this.persentase(25, 10)}%`, height: '5px', background: 'orange', position: 'relative' }} className="resultLong">
                                                </div>
                                                <div className="clear"></div>
                                                <Progress multi>
                                                    <Progress bar color="warning" value={this.persentase(25, 11.2)} >Rendah</Progress>
                                                    <Progress bar color="success" value={this.persentase(25, 4.5)} >Normal</Progress>
                                                    <Progress bar color="danger" value={this.persentase(25, 9.3)} >Tinggi</Progress>
                                                </Progress>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col md="12">
                                        <Row style={{ marginTop: '10px', padding: '10px 15px'}}>
                                            <Col md="4" id="ledIs" onMouseOver={this.onHover} onMouseLeave={this.hoverLeave}>LED</Col>
                                            <Col md="8">
                                                <div style={{ width: `${this.persentase(25, 18)}%`, height: '5px', background: 'orange', position: 'relative' }} className="resultLong">
                                                </div>
                                                <div className="clear"></div>
                                                <Progress multi>
                                                    <Progress bar color="warning" value={this.persentase(25, 0)} >Rendah</Progress>
                                                    <Progress bar color="success" value={this.persentase(25, 15)} >Normal</Progress>
                                                    <Progress bar color="danger" value={this.persentase(25, 10)} >Tinggi</Progress>
                                                </Progress>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col md="12">
                                        <Row style={{ marginTop: '10px', padding: '10px 15px'}}>
                                            <Col md="4">Leukosit</Col>
                                            <Col md="8">
                                                <div style={{ width: `${this.persentase(20, 10)}%`, height: '5px', background: 'orange', position: 'relative' }} className="resultLong">
                                                </div>
                                                <div className="clear"></div>
                                                <Progress multi>
                                                    <Progress bar color="warning" value={this.persentase(20, 6)} >Rendah</Progress>
                                                    <Progress bar color="success" value={this.persentase(20, 8)} >Normal</Progress>
                                                    <Progress bar color="danger" value={this.persentase(20, 6)} >Tinggi</Progress>
                                                </Progress>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                                <hr/>
                                <Row md="12" >
                                    <h4 style={{ width: '100%', display: 'block', margin: '10px 30px', fontWeight: 'bold', color: 'purple', marginTop: '20px', marginBottom: '-10px', paddingBottom: '20px' }}>Hitung Jenis</h4>
                                    <Col md="12">
                                        <Row style={{ marginTop: '5px', padding: '10px 15px'}}>
                                            <Col md="4">Basofil</Col>
                                            <Col md="8">
                                                <div style={{ width: `${this.persentase(20, 14)}%`, height: '5px', background: 'orange', position: 'relative' }} className="resultLong">
                                                </div>
                                                <div className="clear"></div>
                                                <Progress multi>
                                                    <Progress bar color="warning" value={this.persentase(20, 0)} >Rendah</Progress>
                                                    <Progress bar color="success" value={this.persentase(20, 8)} >Normal</Progress>
                                                    <Progress bar color="danger" value={this.persentase(20, 12)} >Tinggi</Progress>
                                                </Progress>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col md="12">
                                        <Row style={{ marginTop: '5px', padding: '10px 15px'}}>
                                            <Col md="4">Eosinofil</Col>
                                            <Col md="8">
                                                <div style={{ width: `${this.persentase(75, 45)}%`, height: '5px', background: 'orange', position: 'relative' }} className="resultLong">
                                                </div>
                                                <div className="clear"></div>
                                                <Progress multi>
                                                    <Progress bar color="warning" value={this.persentase(75, 30)} >Rendah</Progress>
                                                    <Progress bar color="success" value={this.persentase(75, 5)} >Normal</Progress>
                                                    <Progress bar color="danger" value={this.persentase(75, 40)} >Tinggi</Progress>
                                                </Progress>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col md="12">
                                        <Row style={{ marginTop: '5px', padding: '10px 15px'}}>
                                            <Col md="4">Batang</Col>
                                            <Col md="8">
                                                <div style={{ width: `${this.persentase(5, 4.5)}%`, height: '5px', background: 'orange', position: 'relative' }} className="resultLong">
                                                </div>
                                                <div className="clear"></div>
                                                <Progress multi>
                                                    <Progress bar color="warning" value={this.persentase(5, 1)} >Rendah</Progress>
                                                    <Progress bar color="success" value={this.persentase(5, 2)} >Normal</Progress>
                                                    <Progress bar color="danger" value={this.persentase(5, 2)} >Tinggi</Progress>
                                                </Progress>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col md="12">
                                        <Row style={{ marginTop: '5px', padding: '10px 15px'}}>
                                            <Col md="4">Segmen</Col>
                                            <Col md="8">
                                                <div style={{ width: `${this.persentase(75, 45)}%`, height: '5px', background: 'orange', position: 'relative' }} className="resultLong">
                                                </div>
                                                <div className="clear"></div>
                                                <Progress multi>
                                                    <Progress bar color="warning" value={this.persentase(75, 30)} >Rendah</Progress>
                                                    <Progress bar color="success" value={this.persentase(75, 5)} >Normal</Progress>
                                                    <Progress bar color="danger" value={this.persentase(75, 40)} >Tinggi</Progress>
                                                </Progress>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col md="12">
                                        <Row style={{ marginTop: '5px', padding: '10px 15px'}}>
                                            <Col md="4">Limfosit</Col>
                                            <Col md="8">
                                                <div style={{ width: `${this.persentase(5, 4.5)}%`, height: '5px', background: 'orange', position: 'relative' }} className="resultLong">
                                                </div>
                                                <div className="clear"></div>
                                                <Progress multi>
                                                    <Progress bar color="warning" value={this.persentase(5, 1)} >Rendah</Progress>
                                                    <Progress bar color="success" value={this.persentase(5, 2)} >Normal</Progress>
                                                    <Progress bar color="danger" value={this.persentase(5, 2)} >Tinggi</Progress>
                                                </Progress>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col md="12">
                                        <Row style={{ marginTop: '5px', padding: '10px 15px'}}>
                                            <Col md="4">Monosit</Col>
                                            <Col md="8">
                                                <div style={{ width: `${this.persentase(75, 45)}%`, height: '5px', background: 'orange', position: 'relative' }} className="resultLong">
                                                </div>
                                                <div className="clear"></div>
                                                <Progress multi>
                                                    <Progress bar color="warning" value={this.persentase(75, 30)} >Rendah</Progress>
                                                    <Progress bar color="success" value={this.persentase(75, 5)} >Normal</Progress>
                                                    <Progress bar color="danger" value={this.persentase(75, 40)} >Tinggi</Progress>
                                                </Progress>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col md="12">
                                        <Row style={{ marginTop: '5px', padding: '10px 15px'}}>
                                            <Col md="4">Hematokrit</Col>
                                            <Col md="8">
                                                <div style={{ width: `${this.persentase(75, 45)}%`, height: '5px', background: 'orange', position: 'relative' }} className="resultLong">
                                                </div>
                                                <div className="clear"></div>
                                                <Progress multi>
                                                    <Progress bar color="warning" value={this.persentase(75, 30)} >Rendah</Progress>
                                                    <Progress bar color="success" value={this.persentase(75, 5)} >Normal</Progress>
                                                    <Progress bar color="danger" value={this.persentase(75, 40)} >Tinggi</Progress>
                                                </Progress>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                                <hr/>
                                <Row md="12" >
                                    <h4 style={{ width: '100%', display: 'block', margin: '10px 30px', fontWeight: 'bold', color: 'purple', marginTop: '20px', marginBottom: '-10px', paddingBottom: '20px' }}>MCV, MCH, MCHC</h4>
                                    <Col md="12">
                                        <Row style={{ marginTop: '5px', padding: '10px 15px'}}>
                                            <Col md="4">MCV</Col>
                                            <Col md="8">
                                                <div style={{ width: `${this.persentase(15, 8)}%`, height: '5px', background: 'orange', position: 'relative' }} className="resultLong">
                                                </div>
                                                <div className="clear"></div>
                                                <Progress multi>
                                                    <Progress bar color="warning" value={this.persentase(15, 4)} >Rendah</Progress>
                                                    <Progress bar color="success" value={this.persentase(15, 6)} >Normal</Progress>
                                                    <Progress bar color="danger" value={this.persentase(15, 5)} >Tinggi</Progress>
                                                </Progress>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col md="12">
                                        <Row style={{ marginTop: '5px', padding: '10px 15px'}}>
                                            <Col md="4">MCH</Col>
                                            <Col md="8">
                                                <div style={{ width: `${this.persentase(9, 1.5)}%`, height: '5px', background: 'orange', position: 'relative' }} className="resultLong">
                                                </div>
                                                <div className="clear"></div>
                                                <Progress multi>
                                                    <Progress bar color="warning" value={this.persentase(9, 2)} >Rendah</Progress>
                                                    <Progress bar color="success" value={this.persentase(9, 4)} >Normal</Progress>
                                                    <Progress bar color="danger" value={this.persentase(9, 3)} >Tinggi</Progress>
                                                </Progress>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col md="12">
                                        <Row style={{ marginTop: '5px', padding: '10px 15px'}}>
                                            <Col md="4">MCVC</Col>
                                            <Col md="8">
                                                <div style={{ width: `${this.persentase(36, 34)}%`, height: '5px', background: 'orange', position: 'relative' }} className="resultLong">
                                                </div>
                                                <div className="clear"></div>
                                                <Progress multi>
                                                    <Progress bar color="warning" value={this.persentase(36, 6)} >Rendah</Progress>
                                                    <Progress bar color="success" value={this.persentase(36, 20)} >Normal</Progress>
                                                    <Progress bar color="danger" value={this.persentase(36, 10)} >Tinggi</Progress>
                                                </Progress>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default ChartMedis;