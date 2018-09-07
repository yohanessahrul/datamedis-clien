import React, { Component } from 'react';
import './App.css';
import history from './history';
import { Router, Switch, Route } from 'react-router-dom';

// import Navigation from './components/ScrollingNavigation1';
import Beranda from './pages/Beranda';
import Layanan from './pages/Layanan';
import Kontak from './pages/Kontak';
import Login from './pages/Login';
import Daftar from './pages/Daftar';
import KebijakanPrivasi from './pages/KebijakanPrivasi';
import SyaratDanKetentuan from './pages/SyaratDanKetentuan';
import Tim from './pages/Tim';

import Dashboard from './pages/Dashboard';
import ResetPassword from './pages/ResetPassword';
import Dummy from './pages/Dummy';
import HasilDummy from './pages/HasilDummy';
import ChartMedis from './pages/ChartMedis';

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="bigWrap">
          <Switch>
            <Route exact path="/" component={Beranda} />
            <Route path="/layanan" component={Layanan} />
            <Route path="/kontak" component={Kontak} />
            <Route path="/login" component={Login} />
            <Route path="/daftar" component={Daftar} />
            <Route path="/kebijakan" component={KebijakanPrivasi} />
            <Route path="/syarat" component={SyaratDanKetentuan} />
            <Route path="/tim" component={Tim} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/resetpassword" component={ResetPassword} />
            <Route path="/dummy" component={Dummy} />
            <Route path="/hasildummy" component={HasilDummy} />
            <Route path="/chart" component={ChartMedis} />
            <Route path="/kusnadi" component={() => window.location = 'http://lab.forbits.id'} />
            <Route path="/arya" component={() => window.location = 'http://medical-record.datamedis.id/form'} />
            <Route path="" />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
