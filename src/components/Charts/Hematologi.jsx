import React, { Component } from 'react';
import {
    Row,
    Col,
    Progress,
} from 'reactstrap';
import ChartHover from './ChartHover';
import { formatCurrency } from '../../helper/function';

import { Icon } from 'react-icons-kit';
import { angleDoubleUp, angleDoubleDown } from 'react-icons-kit/fa';

const data = [
    {
        name: 'Hemoglobin',
        jargon: 'Hemoglobin adalah metaloprotein (protein yang mengandung zat besi) di dalam sel darah merah yang berfungsi sebagai pengangkut oksigen dari paru-paru ke seluruh tubuh,[1] pada mamalia dan hewan lainnya.',
        current: {
            nilaiRujukan: '5-15.7',
            batasAtas: '25',
            hasil: '12.0',
            satuan: 'g/dl',
            hover: 'hemoHover',
        },
        record: [
            {name: '17/05/18', hasil: 8.8},
            {name: '17/06/18', hasil: 17},
            {name: '17/07/18', hasil: 7},
            {name: '17/08/18', hasil: 12.0},
        ]
    },
    {
        name: 'LED',
        jargon: 'Laju Endap Darah (LED) (bahasa Inggris: Erythrocyte sedimentation rate (ESR)) adalah kecepatan sel - sel darah merah mengendap di dalam tabung uji dengan satuan mm/jam.',
        current: {
            nilaiRujukan: '0-15',
            batasAtas: '20',
            hasil: '18',
            satuan: 'mm/jam',
            hover: 'ledHover',
        },
        record: [
            {name: '17/05/18', hasil: 5},
            {name: '17/06/18', hasil: 12},
            {name: '17/07/18', hasil: 14},
            {name: '17/08/18', hasil: 18},
        ]
    },
    {
        name: 'Leukosit',
        jargon: 'Sel darah putih, leukosit (bahasa Inggris: white blood cell, WBC, leukocyte) adalah sel yang membentuk komponen darah. Sel darah putih ini berfungsi untuk membantu tubuh melawan berbagai penyakit infeksi sebagai bagian dari sistem kekebalan tubuh.',
        current: {
            nilaiRujukan: '4000-10000',
            batasAtas: '13000',
            hasil: '7300',
            satuan: '/ul',
            hover: 'leuHover',
        },
        record: [
            {name: '17/05/18', hasil: 1350},
            {name: '17/06/18', hasil: 17000},
            {name: '17/07/18', hasil: 5699},
            {name: '17/08/18', hasil: 7300},
        ]
    }
]

class Hematologi extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hemoHover: false,
            ledHover: false,
            leuHover: false,
            show: true,
            hemoHoverJ: false,
            ledHoverJ: false,
            leuHoverJ: false,
        }
        this.persentase = this.persentase.bind(this);
        this.onHover = this.onHover.bind(this);
        this.hoverLeave = this.hoverLeave.bind(this);
        this.displayChart = this.displayChart.bind(this);
        this.hoverName = this.hoverName.bind(this);
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

    hoverName (val) {
        if (val === 'hemoHoverJ') {
            this.setState({
                hemoHoverJ: !this.state.hemoHoverJ
            })
        }
        if (val === 'ledHoverJ') {
            this.setState({
                ledHoverJ: !this.state.ledHoverJ
            })
        }
        if (val === 'leuHoverJ') {
            this.setState({
                leuHoverJ: !this.state.leuHoverJ
            })
        }
    }

    render() {
        const chartHoverHemo = () => {
            if (this.state.hemoHover){
                return styles.showChart
            } else {
                return styles.hideChart
            }
        }
        const chartHoverLED = () => {
            if (this.state.ledHover){
                return styles.showChart
            } else {
                return styles.hideChart
            }
        }
        const chartHoverLeu = () => {
            if (this.state.leuHover){
                return styles.showChart
            } else {
                return styles.hideChart
            }
        }

        const datax = data
        const loopHematologi = () => datax.map(result => {
            const splitNilaiRujukan = result.current.nilaiRujukan.split('-')
            const valueRendah = Number(splitNilaiRujukan[0]) - 0
            const valueNormal = Number(splitNilaiRujukan[1]) - Number(splitNilaiRujukan[0])
            const valueTinggi = Number(result.current.batasAtas) - Number(splitNilaiRujukan[1])
            return(
                <Col md="12" key={result.name}>
                    <Row style={styles.rows}>
                        <Col md="4" style={{ marginBottom: '20px' }} onMouseOver={() => this.hoverName(result.current.hover + 'J')} onMouseLeave={() => this.hoverName(result.current.hover + 'J')} >
                            {result.name}
                            { (result.current.hover + 'J' === 'hemoHoverJ' && this.state.hemoHoverJ) ? 
                              <div style={styles.hoverJargon}>{result.jargon}</div> : '' }
                            { (result.current.hover + 'J' === 'ledHoverJ' && this.state.ledHoverJ) ? 
                              <div style={styles.hoverJargon}>{result.jargon}</div> : '' }
                            { (result.current.hover + 'J' === 'leuHoverJ' && this.state.leuHoverJ) ? 
                              <div style={styles.hoverJargon}>{result.jargon}</div> : '' }
                            
                        </Col>
                        <Col md="8" style={styles.posRel}>
                            <div style={styles.satuan}>{result.current.satuan}</div>
                            <div style={{ width: `${this.persentase(result.current.batasAtas, result.current.hasil)}%`, height: '1px', background: 'white', position: 'relative' }}>
                                <div style={styles.wadahFlag}>
                                    <div style={styles.flag} onMouseOver={() => this.onHover(result.current.hover)} onMouseLeave={() => this.hoverLeave(result.current.hover)}>
                                        {console.log('result==>', result.name)}
                                        {
                                          (result.name === 'Leukosit') ? formatCurrency(result.current.hasil) : result.current.hasil
                                        }
                                        <div style={styles.flagTriangle}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="clear"></div>
                            <Progress multi>
                                <Progress bar color="warning" value={this.persentase(result.current.batasAtas, valueRendah)} style={styles.posRel} >
                                    Rendah
                                    <div style={styles.valueBottom}>0</div>
                                </Progress>
                                <Progress bar color="success" value={this.persentase(result.current.batasAtas, valueNormal)} style={styles.posRel} >
                                    Normal
                                    {
                                      (result.name === 'Leukosit') ? 
                                      <div style={styles.valueBottom}>{formatCurrency(splitNilaiRujukan[0])}</div>:
                                      <div style={styles.valueBottom}>{splitNilaiRujukan[0]}</div>
                                    }
                                </Progress>
                                <Progress bar color="danger" value={this.persentase(result.current.batasAtas, valueTinggi)} style={styles.posRel} >
                                    Tinggi
                                    {
                                      (result.name === 'Leukosit') ? 
                                      <div style={styles.valueBottom}>{formatCurrency(splitNilaiRujukan[1])}</div>:
                                      <div style={styles.valueBottom}>{splitNilaiRujukan[1]}</div>
                                    }
                                </Progress>
                            </Progress>
                            {
                                (result.current.hover === 'hemoHover') ?
                                <div style={chartHoverHemo()}>
                                    <ChartHover dattas={result}/>
                                </div>
                                :
                                ''
                            }
                            {
                                (result.current.hover === 'ledHover') ?
                                <div style={chartHoverLED()}>
                                    <ChartHover dattas={result}/>
                                </div>
                                :
                                ''
                            }
                            {
                                (result.current.hover === 'leuHover') ?
                                <div style={chartHoverLeu()}>
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
                return <Icon icon={angleDoubleUp} size='25' />
            } else {
                return <Icon icon={angleDoubleDown}  size='25' />
            }
        }
        return (
            <div>
                <Row md="12" >
                    <h4 style={styles.h4s}>
                        <span onClick={this.displayChart}>Hematologi</span>
                        <div style={{ position: 'absolute' ,color: 'gray', right: 0, top: 0, fontSize: '16px', zIndex: 15 }} onClick={this.displayChart}>{showHide()}</div>
                    </h4>
                    <Col md="12" style={display()}>
                        {loopHematologi()}
                    </Col>
                </Row>
            </div>
        );
    }
}
const styles = {
    hoverJargon: {
        background: '#f2fcfb',
        borderRadius: 5,
        position: 'absolute',
        top: 30,
        left: 15,
        zIndex: 10,
        padding: 10,
        boxShadow: '0px 0px 5px gray',
    },
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
        marginTop: '20px',
        padding: '10px 15px',
        position: 'relative',
        marginBottom: '20px',
        // background: 'red',
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
        top: '36px',
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
        bottom: '2px',
    },
    flag: {
        background: 'green',
        margin: '0 auto',
        padding: '2px 3px',
        display: 'table',
        position: 'relative',
        border: '2px solid white',
        borderRadius: '3px',
        zIndex: 2,
        color: 'white',
        fontSize: '10px',
        cursor: 'pointer',
    },
    flagTriangle: {
        width: '7px',
        height: '7px',
        background: 'green',
        display: 'table',
        position: 'absolute',
        // margin: '0',
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
        // margin: '0',
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
        marginTop: '20px',
        position: 'absolute',
        padding: '20px 0px',
        boxShadow: '0px 0px 5px gray',
        zIndex: 50,
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

export default Hematologi;