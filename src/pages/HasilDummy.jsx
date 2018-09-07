// import history from '../history';
import React, { Component } from 'react';
import {
    Container,
    Row,
    Col,
    CardBody,
    CardTitle,
    Table,
} from 'reactstrap';

class HasilDummy extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hemoglobin: '',
            led: '',
            leukosit: '',
            basofil: '',
            eosinofil: '',
            batang: '',
            segmen: '',
            limfosit: '',
            monosit: '',
            hematokrit: '',
            trombosit: '',
            eritrosit: '',
            mcv: '',
            mch: '',
            mchc: '',
            crp: '',
        }
    }

    componentDidMount () {
        let localStore = JSON.parse(localStorage.getItem('payloadDummy'))
        console.log(localStore)

        this.setState({
            hemoglobin: localStore.hemoglobin,
            led: localStore.led,
            leukosit: localStore.leukosit,
            basofil: localStore.basofil,
            eosinofil: localStore.eosinofil,
            batang: localStore.batang,
            segmen: localStore.segmen,
            limfosit: localStore.limfosit,
            monosit: localStore.monosit,
            hematokrit: localStore.hematokrit,
            trombosit: localStore.trombosit,
            eritrosit: localStore.eritrosit,
            mcv: localStore.mcv,
            mch: localStore.mch,
            mchc: localStore.mchc,
            crp: localStore.crp,
        })
    }

    render() {
        return (
            <div style={{ display: 'table', width: '100%', height: '100%', background: '#e8f4f3', margin: 0, padding: 0 }}>
                <Container>
                    <Row style={{ marginTop: '20px'}}>
                        <Col md="4" style={{ height: '200px'}}>
                            <CardBody style={{ height: '200px',border: 'thin solid #bed8d6', borderRadius: '5px', background: '#0dc4b8', color: 'white'}}>
                                <CardTitle>Isi hasil pemeriksaan</CardTitle>
                                <img style={{ width: '50px' }} src={require('../assets/lab.png')} alt="image2" />
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
                                <CardTitle>HASIL PEMERIKSAAN</CardTitle>
                                <Table>
                                    <thead>
                                        <tr>
                                            <th>PEMERIKSAAN</th>
                                            <th>HASIL</th>
                                            <th>NILAI RUJUKAN</th>
                                            <th>SATUAN</th>
                                            <th>KETERANGAN</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td colspan="5" style={{ color: "red"}}>HEMATOLOGI</td>
                                        </tr>
                                        <tr>
                                            <td> Hemoglobin</td>
                                            <td> {this.state.hemoglobin}</td>
                                            <td> 11.2-15.7</td>
                                            <td> g/dl</td>
                                            <td> </td>
                                        </tr>
                                        <tr>
                                            <td> LED</td>
                                            <td> {this.state.led}</td>
                                            <td> 0-15</td>
                                            <td> mm/jam</td>
                                            <td> </td>
                                        </tr>
                                        <tr>
                                            <td> Leukosit</td>
                                            <td> {this.state.leukosit}</td>
                                            <td> 4.000-10.000</td>
                                            <td> /ul</td>
                                            <td> </td>
                                        </tr>
                                        <tr>
                                            <td colspan="5" style={{ color: 'red' }}>HITUNG JENIS</td>
                                        </tr>
                                        <tr>
                                            <td> Basofil</td>
                                            <td> {this.state.basofil}</td>
                                            <td> 0-1</td>
                                            <td> %</td>
                                            <td> </td>
                                        </tr>
                                        <tr>
                                            <td> Eosinofil</td>
                                            <td> {this.state.eosinofil}</td>
                                            <td> 1-6</td>
                                            <td> %</td>
                                            <td> </td>
                                        </tr>
                                        <tr>
                                            <td> Batang</td>
                                            <td> {this.state.batang}</td>
                                            <td> 0-6</td>
                                            <td> %</td>
                                            <td> </td>
                                        </tr>
                                        <tr>
                                            <td> Segmen</td>
                                            <td> {this.state.segmen}</td>
                                            <td> 34-71</td>
                                            <td> %</td>
                                            <td> </td>
                                        </tr>
                                        <tr>
                                            <td> Limfosit</td>
                                            <td> {this.state.limfosit}</td>
                                            <td> 19-52</td>
                                            <td> %</td>
                                            <td> </td>
                                        </tr>
                                        <tr>
                                            <td> Monosit</td>
                                            <td> {this.state.monosit}</td>
                                            <td> 5-13</td>
                                            <td> %</td>
                                            <td> </td>
                                        </tr>
                                        <tr>
                                            <td> Hematokrit</td>
                                            <td> {this.state.hematokrit}</td>
                                            <td> 34-45</td>
                                            <td> vol/%</td>
                                            <td> </td>
                                        </tr>
                                        <tr>
                                            <td> Trombosit</td>
                                            <td> {this.state.trombosit}</td>
                                            <td> 182.000-369.000</td>
                                            <td> /ul</td>
                                            <td> </td>
                                        </tr>
                                        <tr>
                                            <td> Eritrosit</td>
                                            <td> {this.state.eritrosit}</td>
                                            <td> 3.93-5.22</td>
                                            <td> juta/ul</td>
                                            <td> </td>
                                        </tr>
                                        <tr>
                                            <td colspan="5" style={{ color: 'red' }}>MCV,MCH,MCHC</td>
                                        </tr>
                                        <tr>
                                            <td> MCV</td>
                                            <td> {this.state.mcv}</td>
                                            <td> 79-95</td>
                                            <td> fl</td>
                                            <td> </td>
                                        </tr>
                                        <tr>
                                            <td> MCH</td>
                                            <td> {this.state.mch}</td>
                                            <td> 26-32</td>
                                            <td> pg</td>
                                            <td> </td>
                                        </tr>
                                        <tr>
                                            <td> MCHC</td>
                                            <td> {this.state.mchc}</td>
                                            <td> 32-36</td>
                                            <td> %</td>
                                            <td> </td>
                                        </tr>

                                        <tr>
                                            <td colspan="5" style={{ color: 'red' }}>IMUNO-SEROLOGI</td>
                                        </tr>
                                        <tr>
                                            <td colspan="5" style={{ color: 'red' }}>&nbsp;Protein Specifik</td>
                                        </tr>
                                        <tr>
                                            <td> &nbsp;CRP Kuantitatif</td>
                                            <td> {this.state.crp}</td>
                                            <td> {`<6`}</td>
                                            <td> mg/l</td>
                                            <td> </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </CardBody>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default HasilDummy;