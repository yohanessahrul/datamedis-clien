import history from '../history';
import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { logoutAction } from '../store/action/auth';

import { Link } from 'react-router-dom';

import { Container, Row, Col, Button } from 'reactstrap';

import NavbarAdmin from '../components/NavbarAdmin';

import { Icon } from 'react-icons-kit';
import { check } from 'react-icons-kit/fa/';

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
      profile: this.props.profile,
      token: null,
      showDetail1: false,
      showDetail2: false,
    }
    this.logOut = this.logOut.bind(this);
    this.hoverShow = this.hoverShow.bind(this);
  }

  componentDidMount () {
    if (localStorage.getItem('token') === null) {
      history.push('/login')
    }

    let profileJson = JSON.parse(localStorage.getItem('profile'))
    this.setState({
      profile: profileJson
    })
  }

  logOut (e) {
    e.preventDefault()
    this.props.logoutAction()
  }

  hoverShow (e) {
    if (e.target.id === '1') {
      this.setState({
        showDetail1: true,
        showDetail2: false
      })
    } else {
      this.setState({
        showDetail1: false,
        showDetail2: true
      })
    }
  }

  render() {
    const styleShowDetail1 = () => {
      if (this.state.showDetail1) {
        return (
          <div style={styles.showDetail1Style}>
            <h5 style={styles.detailH5}>Fitur :</h5>
            <ul style={styles.detailUl}>
              <li style={styles.detailLi}>
                <div style={{ color: '#29d09a', float: 'left' }}>
                  <Icon icon={check} /> &nbsp;
                </div>
                Visualisasi hasil lab</li>
              <li style={styles.detailLi}>
                <div style={{ color: '#29d09a', float: 'left' }}>
                  <Icon icon={check} /> &nbsp;
                </div>
                Riwayat kesehatan</li>
              <Link to="/product1" style={{ color: 'white', textDecoration: 'none' }}>
                <Button color="info" style={styles.floatBtn}>
                  Masuk
                </Button>
              </Link>
            </ul>
          </div>
        )
      } else {
        return ''
      }
    }
    const styleShowDetail2 = () => {
      if (this.state.showDetail2) {
        return (
          <div style={styles.showDetail1Style}>
            <h5 style={styles.detailH5}>Fitur :</h5>
            <ul style={styles.detailUl}>
              <li style={styles.detailLi}>
                <div style={{ color: '#29d09a', float: 'left' }}>
                  <Icon icon={check} /> &nbsp;
                </div>
                Cek hipertensi
              </li>
              {/* <li style={styles.detailLi}>
                <div style={{ color: '#29d09a', float: 'left' }}>
                  <Icon icon={check} /> &nbsp;
                </div>
                Cek diabetes
              </li> */}
              <Link to="/product2" style={{ color: 'white', textDecoration: 'none' }}>
                <Button color="info" style={styles.floatBtn}>
                  Masuk
                </Button>
              </Link>
            </ul>
          </div>
        )
      } else {
        return ''
      }
    }
    return (
      <div style={{ width: '100%', height: '100vh',  background: '#eceff5' }}>
        <NavbarAdmin profile={this.state.profile}/>
        <div>
          <Container>
            <Row>
              <div style={{ width: '100%', height: '100px' }}></div>
            </Row>
            <Row>
              <Col md="2"></Col>
              <Col md="4">
                <Link to="/product1">
                  <div style={{ background: '#71abda', padding: '30px', display: 'block', height: '120px' }} id="1" onMouseOver={this.hoverShow}>
                    <h3 style={{ textAlign: 'center', color: 'white', background:'#71abda', textDecoration: 'none' }} id="1" onMouseOver={this.hoverShow}>Hasil Lab</h3>
                  </div>
                </Link>
                {styleShowDetail1()}
              </Col>
              <Col md="4">
                <Link to="/product2">
                  <div style={{ background: '#71abda', padding: '30px', display: 'block', height: '120px' }} id="2" onMouseOver={this.hoverShow}>
                    <h3 style={{ textAlign: 'center', color: 'white', background:'#71abda', textDecoration: 'none' }} id="2" onMouseOver={this.hoverShow}>Manajemen Penyakit Kronis</h3>
                  </div>
                </Link>
                {styleShowDetail2()}
              </Col>
              <Col md="2"></Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
    return {
      profile: state.auth
    }
}
  
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        logoutAction
    }, dispatch)
}

const styles = {
  showDetail1Style: {
    width: '100%', background: 'white', display: 'block', borderBottom: '3px solid #dad3d3',
  },
  detailH5: {
    color: '#336379',
    padding: '20px 20px 0px 20px'
  },
  detailUl: {
    padding: '0px 20px 20px 20px',
    position: 'relative',
  },
  detailLi: {
    listStyle: 'none',
    color: 'gray',
  },
  floatBtn: {
    position: 'absolute',
    bottom: 20,
    right: 30
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);