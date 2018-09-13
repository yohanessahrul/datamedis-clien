import React, { Component } from 'react';
import { Col } from 'reactstrap';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ReferenceLine,
} from 'recharts';

class ChartHover extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        // console.log('props chart show =>', this.props.dattas.record)
    }
    render() {
        const batasAtas = Number(this.props.dattas.current.nilaiRujukan.split('-')[1])
        return (
            <div>
                <Col sm="12">
                <AreaChart width={400} height={200} data={this.props.dattas.record} style={{ margin: '10px 30px 0px 0px' }}>
                    <CartesianGrid strokeDasharray="1 1"/>
                    <XAxis dataKey="name" fontSize="11" />
                    <YAxis fontSize="12"/>
                    <Tooltip/>
                    <ReferenceLine y={batasAtas} label="Resiko Tinggi" stroke="red"/>
                    <Area type="monotone" dataKey="hasil" stroke="gray" fill="#379B8D" />
                </AreaChart>
                </Col>
            </div>
        );
    }
}

export default ChartHover;