import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
// import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { logoutAction } from '../store/action/auth';

class NavbarAdmin extends Component {
    constructor(props) {
      super(props);
  
      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false,
        profile: this.props.profile,
      };
      this.logOut = this.logOut.bind(this)
    }
    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
    logOut (e) {
        e.preventDefault()
        this.props.logoutAction()
    }
    componentDidMount() {
        let profileJson = JSON.parse(localStorage.getItem('profile'))
        this.setState({
            profile: profileJson
        })

        console.log('NAVBAR PROPS ===> ', this.state.profile)
    }
    render() {
        return (
            <div>
            <Navbar color="light" light expand="md" className="adminNavbar">
              <NavbarBrand className="brandStyle" href="/">Admin</NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret className="usernameNavbarStyle">
                      <div className="avaStyle">
                        <img src={'/images/userava.jpg'} alt="avaImg"/>
                      </div>
                      {this.state.profile.username}
                    </DropdownToggle>
                    <DropdownMenu right>
                      {/* <DropdownItem divider /> */}
                      <DropdownItem onClick={this.logOut}>
                        Logout
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </Nav>
              </Collapse>
            </Navbar>
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

export default connect(mapStateToProps, mapDispatchToProps)(NavbarAdmin);