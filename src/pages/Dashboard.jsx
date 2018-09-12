import history from '../history';
import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { logoutAction } from '../store/action/auth';

import { Link } from 'react-router-dom';

import { Container, Row, Col } from 'reactstrap';

import NavbarAdmin from '../components/NavbarAdmin';

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: false,
            profile: this.props.profile,
            token: null,
        }
        this.logOut = this.logOut.bind(this)
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

    render() {
        return (
            <div>
                <NavbarAdmin profile={this.state.profile}/>
                <div>
                    <Container>
                        <Row>
                            <div style={{ width: '100%', height: '100px' }}></div>
                        </Row>
                        <Row>
                            <Col md="2"></Col>
                            <Col md="4">
                                <Link to="/kusnadi">
                                    <div style={{ width: '100%', height: '100px', background: '#eaf5ff' }}>
                                        <h3 style={{ display: 'table', padding: '30px', margin: '10px auto', color: '#1a7067' }}>Produk 1</h3>
                                    </div>
                                </Link>
                            </Col>
                            <Col md="4">
                                <Link to="/arya">
                                    <div style={{ width: '100%', height: '100px', background: '#eaf5ff' }}>
                                        <h3 style={{ display: 'table', padding: '30px', margin: '10px auto', color: '#1a7067' }}>Produk 2</h3>
                                    </div>
                                </Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);