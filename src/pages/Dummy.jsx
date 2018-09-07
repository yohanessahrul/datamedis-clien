import history from '../history';
import React, { Component } from 'react';
import {
    Container,
    Row,
    Col,
    CardBody,
    CardTitle,
    Form,
    FormGroup,
    InputGroup,
    Input,
    InputGroupAddon,
    Label,
    Button,
} from 'reactstrap';

import alertify from 'alertifyjs';

class Dummy extends Component {
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
        this.onChange = this.onChange.bind(this)
        this.handleForm = this.handleForm.bind(this)
    }

    onChange (e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleForm (e) {
        e.preventDefault()
        console.log('ISI STATE => ', this.state)

        let payloadHasilLab = this.state
        
        alertify.alert('Simpan berhasil', 'Terimakasih sudah mengisi formulir hasil pemeriksaan.',
            function() {
                localStorage.setItem('payloadDummy', JSON.stringify(payloadHasilLab))
                history.push('/dashboard')
            }
        )
    }

    componentDidMount () {
        if (!localStorage.getItem('token')) {
            history.push('/login')
        }
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
                            <Form onSubmit={this.handleForm} style={{ background: '#', marginTop: '20px' }}>
                                <CardBody style={{ background: 'white', border: 'thin solid #bed8d6', borderRadius: '5px', paddingBottom: '-100px'}}>
                                <Row md="12" >
                                    <h4 style={{ width: '100%', display: 'block', margin: '10px 30px', fontWeight: 'bold', color: 'purple', marginTop: '50px', marginBottom: '-10px' }}>Hematologi</h4>
                                    <Col md="4" sm="12" style={{ marginBottom: '-30px' }}>
                                        <CardBody>
                                            <FormGroup>
                                                <Label>Hemoglobin</Label>
                                                <InputGroup>
                                                    <Input type="number" name="hemoglobin" placeholder="Hemoglobin" onChange={this.onChange}/>
                                                    <InputGroupAddon addonType="append">g/dl</InputGroupAddon>
                                                </InputGroup>
                                            </FormGroup>
                                        </CardBody>
                                    </Col>
                                    <Col md="4" sm="12" style={{ marginBottom: '-30px' }}>
                                        <CardBody>
                                            <FormGroup>
                                                <Label>LED</Label>
                                                <InputGroup>
                                                    <Input type="number" name="led" placeholder="LED" onChange={this.onChange}/>
                                                    <InputGroupAddon addonType="append">mm/jam</InputGroupAddon>
                                                </InputGroup>
                                            </FormGroup>
                                        </CardBody>
                                    </Col>
                                    <Col md="4" sm="12" style={{ marginBottom: '-30px' }}>
                                        <CardBody>
                                            <FormGroup>
                                                <Label>Leukosit</Label>
                                                <InputGroup>
                                                    <Input type="number" name="leukosit" placeholder="Leukosit" onChange={this.onChange}/>
                                                    <InputGroupAddon addonType="append">mm/jam</InputGroupAddon>
                                                </InputGroup>
                                            </FormGroup>
                                        </CardBody>
                                    </Col>
                                </Row>
                                <Row md="12" style={{ paddingBottom: '20px' }}>
                                    <h4 style={{ width: '100%', display: 'block', margin: '10px 30px', fontWeight: 'bold', color: 'purple', marginTop: '50px', marginBottom: '-10px' }}>Hitung Jenis</h4>
                                    <Col md="4" sm="12" style={{ marginBottom: '-30px' }}>
                                        <CardBody>
                                            <FormGroup>
                                                <Label>Basofil</Label>
                                                <InputGroup>
                                                    <Input type="number" name="basofil" placeholder="Basofil" onChange={this.onChange}/>
                                                    <InputGroupAddon addonType="append">%</InputGroupAddon>
                                                </InputGroup>
                                            </FormGroup>
                                        </CardBody>
                                    </Col>
                                    <Col md="4" sm="12" style={{ marginBottom: '-30px' }}>
                                        <CardBody>
                                            <FormGroup>
                                                <Label>Eosinofil</Label>
                                                <InputGroup>
                                                    <Input type="number" name="eosinofil" placeholder="Eosinofil" onChange={this.onChange}/>
                                                    <InputGroupAddon addonType="append">%</InputGroupAddon>
                                                </InputGroup>
                                            </FormGroup>
                                        </CardBody>
                                    </Col>
                                    <Col md="4" sm="12" style={{ marginBottom: '-30px' }}>
                                        <CardBody>
                                            <FormGroup>
                                                <Label>Batang</Label>
                                                <InputGroup>
                                                    <Input type="number" name="batang" placeholder="Batang" onChange={this.onChange}/>
                                                    <InputGroupAddon addonType="append">%</InputGroupAddon>
                                                </InputGroup>
                                            </FormGroup>
                                        </CardBody>
                                    </Col>
                                    <Col md="4" sm="12" style={{ marginBottom: '-30px' }}>
                                        <CardBody>
                                            <FormGroup>
                                                <Label>Segmen</Label>
                                                <InputGroup>
                                                    <Input type="number" name="segmen" placeholder="Segmen" onChange={this.onChange}/>
                                                    <InputGroupAddon addonType="append">%</InputGroupAddon>
                                                </InputGroup>
                                            </FormGroup>
                                        </CardBody>
                                    </Col>
                                    <Col md="4" sm="12" style={{ marginBottom: '-30px' }}>
                                        <CardBody>
                                            <FormGroup>
                                                <Label>Limfosit</Label>
                                                <InputGroup>
                                                    <Input type="number" name="limfosit" placeholder="Limfosit" onChange={this.onChange}/>
                                                    <InputGroupAddon addonType="append">%</InputGroupAddon>
                                                </InputGroup>
                                            </FormGroup>
                                        </CardBody>
                                    </Col>
                                    <Col md="4" sm="12" style={{ marginBottom: '-30px' }}>
                                        <CardBody>
                                            <FormGroup>
                                                <Label>Monosit</Label>
                                                <InputGroup>
                                                    <Input type="number" name="monosit" placeholder="Monosit" onChange={this.onChange}/>
                                                    <InputGroupAddon addonType="append">%</InputGroupAddon>
                                                </InputGroup>
                                            </FormGroup>
                                        </CardBody>
                                    </Col>
                                    <Col md="4" sm="12" style={{ marginBottom: '-30px' }}>
                                        <CardBody>
                                            <FormGroup>
                                                <Label>Hematokrit</Label>
                                                <InputGroup>
                                                    <Input type="number" name="hematokrit" placeholder="Hematokrit" onChange={this.onChange}/>
                                                    <InputGroupAddon addonType="append">vol%</InputGroupAddon>
                                                </InputGroup>
                                            </FormGroup>
                                        </CardBody>
                                    </Col>
                                    <Col md="4" sm="12" style={{ marginBottom: '-30px' }}>
                                        <CardBody>
                                            <FormGroup>
                                                <Label>Trombosit</Label>
                                                <InputGroup>
                                                    <Input type="number" name="trombosit" placeholder="Trombosit" onChange={this.onChange}/>
                                                    <InputGroupAddon addonType="append">/ul</InputGroupAddon>
                                                </InputGroup>
                                            </FormGroup>
                                        </CardBody>
                                    </Col>
                                    <Col md="4" sm="12" style={{ marginBottom: '-30px' }}>
                                        <CardBody>
                                            <FormGroup>
                                                <Label>Eritrosit</Label>
                                                <InputGroup>
                                                    <Input type="number" name="eritrosit" placeholder="Eritrosit" onChange={this.onChange}/>
                                                    <InputGroupAddon addonType="append">%</InputGroupAddon>
                                                </InputGroup>
                                            </FormGroup>
                                        </CardBody>
                                    </Col>
                                </Row>
                                <Row md="12" style={{ paddingBottom: '20px' }}>
                                    <h4 style={{ width: '100%', display: 'block', margin: '10px 30px', fontWeight: 'bold', color: 'purple', marginTop: '50px', marginBottom: '-10px' }}>MCV,MCH,MCHC</h4>
                                    <Col md="4" sm="12" style={{ marginBottom: '-30px' }}>
                                        <CardBody>
                                            <FormGroup>
                                                <Label>MCV</Label>
                                                <InputGroup>
                                                    <Input type="number" name="mcv" placeholder="MCV" onChange={this.onChange}/>
                                                    <InputGroupAddon addonType="append">fl</InputGroupAddon>
                                                </InputGroup>
                                            </FormGroup>
                                        </CardBody>
                                    </Col>
                                    <Col md="4" sm="12" style={{ marginBottom: '-30px' }}>
                                        <CardBody>
                                            <FormGroup>
                                                <Label>MCH</Label>
                                                <InputGroup>
                                                    <Input type="number" name="mch" placeholder="MCH" onChange={this.onChange}/>
                                                    <InputGroupAddon addonType="append">pg</InputGroupAddon>
                                                </InputGroup>
                                            </FormGroup>
                                        </CardBody>
                                    </Col>
                                    <Col md="4" sm="12" style={{ marginBottom: '-30px' }}>
                                        <CardBody>
                                            <FormGroup>
                                                <Label>MCHC</Label>
                                                <InputGroup>
                                                    <Input type="number" name="mchc" placeholder="MCHC" onChange={this.onChange}/>
                                                    <InputGroupAddon addonType="append">%</InputGroupAddon>
                                                </InputGroup>
                                            </FormGroup>
                                        </CardBody>
                                    </Col>
                                </Row>
                                <Row md="12" style={{ paddingBottom: '20px' }}>
                                    <h4 style={{ width: '100%', display: 'block', margin: '10px 30px', fontWeight: 'bold', color: 'purple', marginTop: '50px', marginBottom: '-10px' }}>IMUNO - SEROLOGI</h4>
                                    <Col md="4" sm="12" style={{ marginBottom: '-30px' }}>
                                        <CardBody>
                                            <FormGroup>
                                                <Label>PROTEIN SPECIFIK</Label><br onChange={this.onChange}/>
                                                <Label>CRP Kuantitatif</Label>
                                                <InputGroup>
                                                    <Input type="number" name="crp" placeholder="CRP Kuantitatif" onChange={this.onChange}/>
                                                    <InputGroupAddon addonType="append">fl</InputGroupAddon>
                                                </InputGroup>
                                            </FormGroup>
                                        </CardBody>
                                    </Col>
                                </Row>
                                <Row md="12" style={{marginBottom: '10px'}}>
                                    <CardBody>
                                        <Button>Simpan</Button>
                                    </CardBody>
                                </Row>
                                </CardBody>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Dummy;