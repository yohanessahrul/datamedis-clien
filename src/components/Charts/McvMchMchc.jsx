import React, { Component } from 'react';
import {
    Row,
    Col,
    Progress,
} from 'reactstrap';
import ChartHover from './ChartHover';

import { Icon } from 'react-icons-kit';
import { angleDoubleUp, angleDoubleDown } from 'react-icons-kit/fa';

const data = [
    {
        name: 'MCV',
        jargon: 'Mean Corpuscular Volume (MCV) merupakan salah satu pemeriksaan darah yang menunjukkan volume rata-rata satu sel darah merah dibandingkan dengan volume sel darah merah keseluruhan dalam darah.',
        current: {
            nilaiRujukan: '79-95',
            batasAtas: '150',
            hasil: '65',
            satuan: 'fl',
            hover: 'mcvHover',
        },
        record: [
            {name: '17/05/18', hasil: 80},
            {name: '17/06/18', hasil: 97},
            {name: '17/07/18', hasil: 92},
            {name: '17/08/18', hasil: 65},
        ]
    },
    {
        name: 'MCH',
        jargon: 'Mean Corpuscular Hemoglobin (MCH) merupakan salah satu jenis pemeriksaan yang ada pada darah, di mana akan dinilai massa dari hemoglobin dari satuan sel darah merah yang ada di tubuh.',
        current: {
            nilaiRujukan: '26-32',
            batasAtas: '45',
            hasil: '20',
            satuan: 'pg',
            hover: 'mchHover',
        },
        record: [
            {name: '17/05/18', hasil: 27},
            {name: '17/06/18', hasil: 29},
            {name: '17/07/18', hasil: 25},
            {name: '17/08/18', hasil: 20},
        ]
    },
    {
        name: 'MCHC',
        jargon: 'MCHC atau Mean Corpuscular Hemoglobin Concentration adalah perhitungan rata-rata konsentrasi hemoglobin di dalam eritrosit.',
        current: {
            nilaiRujukan: '32-36',
            batasAtas: '45',
            hasil: '30',
            satuan: '%',
            hover: 'mchcHover',
        },
        record: [
            {name: '17/05/18', hasil: 30},
            {name: '17/06/18', hasil: 33.7},
            {name: '17/07/18', hasil: 35},
            {name: '17/08/18', hasil: 30},
        ]
    }
]

class McvMchMchc extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mcvHover: false,
            mchHover: false,
            mchcHover: false,
            show: false,
            mcvHoverJ: false,
            mchHoverJ: false,
            mchcHoverJ: false,
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
        if (val === 'mcvHoverJ') {
            this.setState({ mcvHoverJ: !this.state.mcvHoverJ })
        }
        if (val === 'mchHoverJ') {
            this.setState({ mchHoverJ: !this.state.mchHoverJ })
        }
        if (val === 'mchcHoverJ') {
            this.setState({ mchcHoverJ: !this.state.mchcHoverJ })
        }
    }

    render() {
        const chartHoverMcv = () => {
            if (this.state.mcvHover){
                return styles.showChart
            } else {
                return styles.hideChart
            }
        }
        const chartHoverMch = () => {
            if (this.state.mchHover){
                return styles.showChart
            } else {
                return styles.hideChart
            }
        }
        const chartHoverMchc = () => {
            if (this.state.mchcHover){
                return styles.showChart
            } else {
                return styles.hideChart
            }
        }

        const datax = data
        const loopMCVMCHMCHC = () => datax.map(result => {
            const splitNilaiRujukan = result.current.nilaiRujukan.split('-')
            const valueRendah = Number(splitNilaiRujukan[0]) - 0
            const valueNormal = Number(splitNilaiRujukan[1]) - Number(splitNilaiRujukan[0])
            const valueTinggi = Number(result.current.batasAtas) - Number(splitNilaiRujukan[1])
            return(
                <Col md="12" key={result.name}>
                    <Row style={styles.rows}>
                        <Col md="4" style={{ marginBottom: '20px' }}  onMouseOver={() => this.hoverName(result.current.hover + 'J')} onMouseLeave={() => this.hoverName(result.current.hover + 'J')} >
                            {result.name}
                            { (result.current.hover + 'J' === 'mcvHoverJ' && this.state.mcvHoverJ) ? 
                              <div style={styles.hoverJargon}>{result.jargon}</div> : '' }
                            { (result.current.hover + 'J' === 'mchHoverJ' && this.state.mchHoverJ) ? 
                              <div style={styles.hoverJargon}>{result.jargon}</div> : '' }
                            { (result.current.hover + 'J' === 'mchcHoverJ' && this.state.mchcHoverJ) ? 
                              <div style={styles.hoverJargon}>{result.jargon}</div> : '' }
                            
                        </Col>
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
                                (result.current.hover === 'mcvHover') ?
                                <div style={chartHoverMcv()}>
                                    <ChartHover dattas={result}/>
                                </div>
                                :
                                ''
                            }
                            {
                                (result.current.hover === 'mchHover') ?
                                <div style={chartHoverMch()}>
                                    <ChartHover dattas={result}/>
                                </div>
                                :
                                ''
                            }
                            {
                                (result.current.hover === 'mchcHover') ?
                                <div style={chartHoverMchc()}>
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
                return <Icon icon={angleDoubleUp}  size='25' />
            } else {
                return <Icon icon={angleDoubleDown}  size='25' />
            }
        }

        return (
            <div>
                <Row md="12" >
                    <h4 style={styles.h4s}>
                        <span onClick={this.displayChart}>MCV, MCH, MCHC</span>
                        <div style={{ position: 'absolute' ,color: 'gray', right: 0, top: 0, fontSize: '16px', zIndex: 15 }} onClick={this.displayChart}>{showHide()}</div>
                    </h4>
                    <Col md="12" style={display()}>
                        {loopMCVMCHMCHC()}
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
        fontSize: '10px'
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
        fontSize: '10px'
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
        marginTop: '25px',
        position: 'absolute',
        padding: '20px 0px',
        boxShadow: '0px 0px 5px gray',
        zIndex: 50,
    },
    hideChart: {
        width: '400px',
        height: '200px',
        background: 'white',
        marginTop: '20px',
        position: 'absolute',
        display: 'none'
    }
}

export default McvMchMchc;