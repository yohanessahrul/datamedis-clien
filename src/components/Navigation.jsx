// import history from '../history';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Modal,
  ModalHeader,
} from 'reactstrap';

import { connect } from 'react-redux';
import { pindahMainPath } from '../store/action/path';
import { bindActionCreators } from 'redux';

import LoginForm from '../components/LoginForm';

class ScrollingNavigation1 extends Component {
    constructor(props){
        super(props)
        this.state = {
            isOpen: false,
            path: 'intro',
            modalLogin: false
        }
        this.toggle = this.toggle.bind(this)
        this.toogleLogin = this.toogleLogin.bind(this)
        // this.changePath = this.changePath.bind(this)
    }
    // changePath = (e) => {
    //     let payload = {
    //         main: window.location.pathname,
    //         path: e.target.id
    //     }
    //     this.props.pindahMainPath(payload)
    // }
    toggle () {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    toogleLogin () {
        this.setState({
            modalLogin: !this.state.modalLogin
        })
    }
    render() {
        return (
            <div>
            <Navbar color="light" light expand="md">
              <Container>
              <NavbarBrand href="/">
                <img style={{height: '45px', padding: '-10px 0px !important'}} src={require('../assets/logo-datamedis-header.png')} alt="logo-datamedis"/>
              </NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <Link to="/" className="menuLink">Beranda</Link>
                  </NavItem>
                  <NavItem>
                    <Link to="/layanan" className="menuLink">Layanan</Link>
                  </NavItem>
                  <NavItem>
                    <Link to="/kontak" className="menuLink">Kontak</Link>
                  </NavItem>
                  <NavItem>
                    <Link to="#" className="menuLink" onClick={this.toogleLogin}>
                        Login
                    </Link>
                  </NavItem>
                </Nav>
              </Collapse>
              </Container>
            </Navbar>
              <Container>
                <Row>
                    <Col md="4" sm="12"></Col>
                    <Col md="4" sm="12">
                        <Modal className="modalLogin" isOpen={this.state.modalLogin}>
                            <ModalHeader toggle={this.toogleLogin}>
                                Login
                            </ModalHeader>
                            <div style={{ width: '100%', padding: '10px', margin: '0 auto' }}>
                                <LoginForm/>
                            </div>
                        </Modal>
                    </Col>
                    <Col md="4" sm="12"></Col>
                </Row>
              </Container>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        pathSetting: state.path
    }
}
  
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        pindahMainPath
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ScrollingNavigation1);