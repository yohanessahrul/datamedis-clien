import React, { Component } from 'react';
import {
    Button,
} from 'reactstrap';
import { Link as Links } from 'react-router-dom';

class Pendaftaran extends Component {
    render() {
        return (
            <div style={{ color: 'white' }}>
                <h2>Pendaftaran</h2>
                <hr/>
                <br/>
                <br/>
                <p>
                    Belum punya akun? Anda dapat mendaftar sekarang. 
                    Pendaftaran akun sangat mudah dan sederhana 
                    dengan waktu kurang dari satu menit.
                </p>
                <Links to="/daftar">
                    <Button className="btn-daftar">Daftar Sekarang</Button>
                </Links>
            </div>
        );
    }
}

export default Pendaftaran;