import React, { Component } from 'react';
import {
    Row,
    Col,
    Progress,
} from 'reactstrap';
import ChartHover from './ChartHover';

const data = [
    {
        name: 'Basofil',
        current: {
            nilaiRujukan: '0-1',
            batasAtas: '3',
            hasil: '0',
            satuan: '%',
            hover: 'basHover',
        },
        record: [
            {name: '17/05/18', hasil: 1.5},
            {name: '17/06/18', hasil: 1},
            {name: '17/07/18', hasil: 0.7},
            {name: '17/08/18', hasil: 0},
        ]
    },
    {
        name: 'Eosinofil',
        current: {
            nilaiRujukan: '1-6',
            batasAtas: '10',
            hasil: '1',
            satuan: '%',
            hover: 'eosHover',
        },
        record: [
            {name: '17/05/18', hasil: 5},
            {name: '17/06/18', hasil: 2.5},
            {name: '17/07/18', hasil: 4},
            {name: '17/08/18', hasil: 1},
        ]
    },
    {
        name: 'Batang',
        current: {
            nilaiRujukan: '0-6',
            batasAtas: '10',
            hasil: '1',
            satuan: '%',
            hover: 'batHover',
        },
        record: [
            {name: '17/05/18', hasil: 2},
            {name: '17/06/18', hasil: 3.7},
            {name: '17/07/18', hasil: 0},
            {name: '17/08/18', hasil: 1},
        ]
    },
    {
        name: 'Segmen',
        current: {
            nilaiRujukan: '34-71',
            batasAtas: '130',
            hasil: '61',
            satuan: '%',
            hover: 'segHover',
        },
        record: [
            {name: '17/05/18', hasil: 25},
            {name: '17/06/18', hasil: 45},
            {name: '17/07/18', hasil: 65},
            {name: '17/08/18', hasil: 61},
        ]
    },
    {
        name: 'Limfosit',
        current: {
            nilaiRujukan: '19-52',
            batasAtas: '130',
            hasil: '33',
            satuan: '%',
            hover: 'limHover',
        },
        record: [
            {name: '17/05/18', hasil: 35},
            {name: '17/06/18', hasil: 12},
            {name: '17/07/18', hasil: 60},
            {name: '17/08/18', hasil: 33},
        ]
    },
    {
        name: 'Monosit',
        current: {
            nilaiRujukan: '5-13',
            batasAtas: '20',
            hasil: '4',
            satuan: '%',
            hover: 'monHover',
        },
        record: [
            {name: '17/05/18', hasil: 15},
            {name: '17/06/18', hasil: 12},
            {name: '17/07/18', hasil: 7.5},
            {name: '17/08/18', hasil: 4},
        ]
    },
    {
        name: 'Hematokrit',
        current: {
            nilaiRujukan: '34-45',
            batasAtas: '60',
            hasil: '36',
            satuan: 'vol%',
            hover: 'hemHover',
        },
        record: [
            {name: '17/05/18', hasil: 38},
            {name: '17/06/18', hasil: 30},
            {name: '17/07/18', hasil: 47},
            {name: '17/08/18', hasil: 36},
        ]
    },
    {
        name: 'Trombosit',
        current: {
            nilaiRujukan: '182000-369000',
            batasAtas: '400000',
            hasil: '296000',
            satuan: '/ul',
            hover: 'troHover',
        },
        record: [
            {name: '17/05/18', hasil: 250000},
            {name: '17/06/18', hasil: 137000},
            {name: '17/07/18', hasil: 500000},
            {name: '17/08/18', hasil: 296000},
        ]
    },
    {
        name: 'Eritrosit',
        current: {
            nilaiRujukan: '3.93-5.22',
            batasAtas: '8',
            hasil: '6.14',
            satuan: 'juta/ul',
            hover: 'eriHover',
        },
        record: [
            {name: '17/05/18', hasil: 3.99},
            {name: '17/06/18', hasil: 4.15},
            {name: '17/07/18', hasil: 5.11},
            {name: '17/08/18', hasil: 6.14},
        ]
    }
]

class HitungJenis extends Component {
    constructor(props) {
        super(props)
        this.state = {
            basHover: false,
            eosHover: false,
            batHover: false,
            segHover: false,
            limHover: false,
            monHover: false,
            hemHover: false,
            troHover: false,
            eriHover: false,
            show: false,
        }
        this.persentase = this.persentase.bind(this)
        this.onHover = this.onHover.bind(this)
        this.hoverLeave = this.hoverLeave.bind(this)
        this.displayChart = this.displayChart.bind(this)
    }

    onHover (val) {
        this.setState({
            [val]: true
        })
    }
    
    hoverLeave (val) {
        this.setState({
            [val]: false
        })
    }

    persentase (maxValue, result) { // panjang, hasil,  
        let hasil = (result / maxValue) * 100
        return hasil
    }

    displayChart () {
        this.setState({
            show: !this.state.show
        })
    }

    render() {
        const chartHoverBas = () => {
            if (this.state.basHover){
                return styles.showChart
            } else {
                return styles.hideChart
            }
        }
        const chartHoverEos = () => {
            if (this.state.eosHover){
                return styles.showChart
            } else {
                return styles.hideChart
            }
        }
        const chartHoverBat = () => {
            if (this.state.batHover){
                return styles.showChart
            } else {
                return styles.hideChart
            }
        }
        const chartHoverSeg = () => {
            if (this.state.segHover){
                return styles.showChart
            } else {
                return styles.hideChart
            }
        }
        const chartHoverLim = () => {
            if (this.state.limHover){
                return styles.showChart
            } else {
                return styles.hideChart
            }
        }
        const chartHoverMon = () => {
            if (this.state.monHover){
                return styles.showChart
            } else {
                return styles.hideChart
            }
        }
        const chartHoverHem = () => {
            if (this.state.hemHover){
                return styles.showChart
            } else {
                return styles.hideChart
            }
        }
        const chartHoverTro = () => {
            if (this.state.troHover){
                return styles.showChart
            } else {
                return styles.hideChart
            }
        }
        const chartHoverEri = () => {
            if (this.state.eriHover){
                return styles.showChart
            } else {
                return styles.hideChart
            }
        }

        const datax = data
        const loopHitungJenis = () => datax.map(result => {
            const splitNilaiRujukan = result.current.nilaiRujukan.split('-')
            const valueRendah = Number(splitNilaiRujukan[0]) - 0
            const valueNormal = Number(splitNilaiRujukan[1]) - Number(splitNilaiRujukan[0])
            const valueTinggi = Number(result.current.batasAtas) - Number(splitNilaiRujukan[1])
            return(
                <Col md="12" key={result.name}>
                    <Row style={styles.rows}>
                        <Col md="4">{result.name}</Col>
                        <Col md="8" style={styles.posRel}>
                            <div style={styles.satuan}>{result.current.satuan}</div>
                            <div style={{ width: `${this.persentase(result.current.batasAtas, result.current.hasil)}%`, height: '1px', background: 'white', position: 'relative' }}>
                                <div style={styles.wadahFlag}>
                                    <div style={styles.flag}>
                                        {result.current.hasil}
                                        <div style={styles.flagTriangle}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="clear"></div>
                            <Progress multi onMouseOver={() => this.onHover(result.current.hover)} onMouseLeave={() => this.hoverLeave(result.current.hover)}>
                                <Progress bar color="warning" value={this.persentase(result.current.batasAtas, valueRendah)} style={styles.posRel} >
                                    Rendah
                                    <div style={styles.valueBottom}>0</div>
                                </Progress>
                                <Progress bar color="success" value={this.persentase(result.current.batasAtas, valueNormal)} style={styles.posRel} >
                                    Normal
                                    <div style={styles.valueBottom}>{splitNilaiRujukan[0]}</div>
                                </Progress>
                                <Progress bar color="danger" value={this.persentase(result.current.batasAtas, valueTinggi)} style={styles.posRel} >
                                    Tinggi
                                    <div style={styles.valueBottom}>{splitNilaiRujukan[1]}</div>
                                </Progress>
                            </Progress>
                            {
                                (result.current.hover === 'basHover') ?
                                <div style={chartHoverBas()}>
                                    <ChartHover dattas={result}/>
                                </div>
                                :
                                ''
                            }
                            {
                                (result.current.hover === 'eosHover') ?
                                <div style={chartHoverEos()}>
                                    <ChartHover dattas={result}/>
                                </div>
                                :
                                ''
                            }
                            {
                                (result.current.hover === 'batHover') ?
                                <div style={chartHoverBat()}>
                                    <ChartHover dattas={result}/>
                                </div>
                                :
                                ''
                            }
                            {
                                (result.current.hover === 'segHover') ?
                                <div style={chartHoverSeg()}>
                                    <ChartHover dattas={result}/>
                                </div>
                                :
                                ''
                            }
                            {
                                (result.current.hover === 'limHover') ?
                                <div style={chartHoverLim()}>
                                    <ChartHover dattas={result}/>
                                </div>
                                :
                                ''
                            }
                            {
                                (result.current.hover === 'monHover') ?
                                <div style={chartHoverMon()}>
                                    <ChartHover dattas={result}/>
                                </div>
                                :
                                ''
                            }
                            {
                                (result.current.hover === 'hemHover') ?
                                <div style={chartHoverHem()}>
                                    <ChartHover dattas={result}/>
                                </div>
                                :
                                ''
                            }
                            {
                                (result.current.hover === 'troHover') ?
                                <div style={chartHoverTro()}>
                                    <ChartHover dattas={result}/>
                                </div>
                                :
                                ''
                            }
                            {
                                (result.current.hover === 'eriHover') ?
                                <div style={chartHoverEri()}>
                                    <ChartHover dattas={result}/>
                                </div>
                                :
                                ''
                            }
                        </Col>
                    </Row>
                </Col>
            )
        })

        const display = () => {
            if (this.state.show) {
                return styles.displayBlock
            } else {
                return styles.displayNone
            }
        }
        const showHide = () => {
            if (this.state.show) {
                return 'Sembunyikan'
            } else {
                return 'Tampilkan'
            }
        }

        return (
            <div>
                <Row md="12" >
                    <h4 style={styles.h4s}>
                        Hitung Jenis
                        <div style={{ position: 'absolute' ,color: 'gray', right: 0, top: 0, fontSize: '16px', zIndex: 15 }} onClick={this.displayChart}>{showHide()}</div>
                    </h4>
                    <Col md="12" style={display()}>
                        {loopHitungJenis()}
                    </Col>
                </Row>
            </div>
        );
    }
}
const styles = {
    displayNone: {
        display: 'none'
    },
    displayBlock: {
        display: 'block'
    },
    cardBodyChart: {
        background: 'white',
        border: 'thin solid #bed8d6',
        borderRadius: '5px',
        paddingBottom: '-100px',
        marginTop: '20px',
    },
    h4s: {
        width: '100%',
        display: 'block',
        margin: '10px 30px',
        fontWeight: 'bold',
        color: '#0d8f85',
        marginTop: '20px',
        marginBottom: '-10px',
        paddingBottom: '20px',
        // background: 'red',
        position: 'relative',
    },
    rows: {
        marginTop: '10px',
        padding: '10px 15px',
        position: 'relative',
        marginBottom: '10px',
    },
    satuan: {
        position: 'absolute',
        right: 20,
        top: -15,
        fontSize: '12px',
    },
    posRel: {
        position: 'relative'
    },
    valueBottom: {
        position: 'absolute',
        top: '40px',
        color: 'black',
        background: 'white',
        padding: '1px 3px',
        fontSize: '10px',
    },
    wadahFlag: {
        width: '40px',
        height: '20px',
        position: 'absolute',
        right: '-20px' ,
        // background: 'red',
        fontSize: '12px',
        bottom: '-2px',
    },
    flag: {
        background: 'green',
        margin: '0 auto',
        padding: '0px 2px',
        display: 'table',
        position: 'relative',
        border: '2px solid white',
        borderRadius: '3px',
        zIndex: 2,
        color: 'white',
        fontSize: '9px'
    },
    flagTriangle: {
        width: '7px',
        height: '7px',
        background: 'green',
        display: 'table',
        position: 'absolute',
        margin: '0',
        bottom: '-5px',
        left: 0,
        right: 0,
        margin: '0 auto',
        transform: 'rotate(45deg)',
        borderRight: '2px solid white',
        borderBottom: '2px solid white',
        zIndex: -5,
    },
    flagRed: {
        background: 'red',
        margin: '0 auto',
        padding: '0px 2px',
        display: 'table',
        position: 'relative',
        border: '2px solid white',
        borderRadius: '3px',
        zIndex: 2,
        color: 'white',
        fontSize: '9px'
    },
    flagTriangleRed: {
        width: '7px',
        height: '7px',
        background: 'red',
        display: 'table',
        position: 'absolute',
        margin: '0',
        bottom: '-5px',
        left: 0,
        right: 0,
        margin: '0 auto',
        transform: 'rotate(45deg)',
        borderRight: '2px solid white',
        borderBottom: '2px solid white',
        zIndex: -5,
    },
    showChart: {
        // width: '400px',
        // height: '200px',
        background: 'white',
        marginTop: '25px',
        position: 'absolute',
        padding: '20px 0px',
        boxShadow: '0px 0px 5px gray',
        zIndex: 10
    },
    hideChart: {
        width: '400px',
        height: '200px',
        background: 'white',
        marginTop: '25px',
        position: 'absolute',
        display: 'none'
    }
}

export default HitungJenis;