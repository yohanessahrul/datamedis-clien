import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

import { Icon } from 'react-icons-kit';
import { facebook, twitter, youtubePlay, instagram} from 'react-icons-kit/fa';


class Footer extends Component {
    render() {
        return (
            <div style={{ width: '100%', background: '#3d6666', padding: '50px 0px 10px 0px' }}>
              <Container>
                <Row>
                  <Col md="4">
                    <div className="footer">
                      <img style={{ padding: '5px 15px', background: 'white', borderRadius: '5px', width: '200px' }}  src={require('../assets/logo-datamedis-header.png')} alt="logo-footer" />
                      <ul style={{ margin: 0, paddingTop: '10px' }}>
                        <li style={{ listStyle: 'none', color: 'white', fontSize: '13px', paddingTop: '5px' }}>
                          <Link style={{ color: 'white' }} to="/kebijakan">Kebijakan Privasi</Link>
                        </li>
                        <li style={{ listStyle: 'none', color: 'white', fontSize: '13px', paddingTop: '5px' }}>
                          <Link style={{ color: 'white' }} to="/syarat">Syarat dan ketentuan layanan</Link>
                        </li>
                        <li style={{ listStyle: 'none', color: 'white', fontSize: '13px', paddingTop: '5px' }}>
                          <Link style={{ color: 'white' }} to="/tim">Tim Kami</Link>
                        </li>
                      </ul>
                    </div>
                  </Col>
                  <Col md="4">
                    <div className="footer">
                      <h5 style={{ color: 'white' }}>Alamat</h5>
                      <ul>
                        <li style={{ listStyle: 'none', display: 'table' }}>
                          <div className="footerAddress">
                            <p>
                              Jl Caringin Barat 1 No.29A <br/>
                              RT 015/010, Terogong, Cilandak Barat<br/>
                              Jakarta Selatan, 146376<br/>
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </Col>
                  <Col md="4">
                    {/* <div className="footer">
                      <h5 style={{ color: 'white' }}>Sosial Media</h5>
                      <ul>
                        <li style={{ listStyle: 'none', display: 'table' }}>
                          <Icon className="footerAddressIcon" style={{ float: 'left', padding: '0px 10px 10px 0px', color: '#4adebc' }}  size={16} icon={facebook}/>
                          <div className="footerAddress">
                            <p>
                              <a style={{ color: 'white', textDecoration: 'none' }} rel="noopener noreferrer" href="#" target="_blank">Facebook Datamedis</a>
                            </p>
                          </div>
                        </li>
                        <li style={{ listStyle: 'none', display: 'table' }}>
                          <Icon className="footerAddressIcon" style={{ float: 'left', padding: '0px 10px 10px 0px', color: '#4adebc' }}  size={16} icon={instagram}/>
                          <div className="footerAddress">
                            <p>
                              <a style={{ color: 'white', textDecoration: 'none' }} rel="noopener noreferrer" href="#" target="_blank">Instagram Datamedis</a>
                            </p>
                          </div>
                        </li>
                        <li style={{ listStyle: 'none', display: 'table' }}>
                          <Icon className="footerAddressIcon" style={{ float: 'left', padding: '0px 10px 10px 0px', color: '#4adebc' }}  size={16} icon={twitter}/>
                          <div className="footerAddress">
                            <p>
                              <a style={{ color: 'white', textDecoration: 'none' }} rel="noopener noreferrer" href="#" target="_blank">Twitter Datamedis</a>
                            </p>
                          </div>
                        </li>
                        <li style={{ listStyle: 'none', display: 'table' }}>
                          <Icon className="footerAddressIcon" style={{ float: 'left', padding: '0px 10px 10px 0px', color: '#4adebc' }}  size={16} icon={youtubePlay}/>
                          <div className="footerAddress">
                            <p>
                              <a style={{ color: 'white', textDecoration: 'none' }} rel="noopener noreferrer" href="#" target="_blank">Youtube Datamedis</a>
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div> */}
                  </Col>
                </Row>
                <Row>
                  <Col md="12">
                    <p style={{ color: 'white', fontSize: '11px', textAlign: 'center', borderTop: 'thin solid #275b73', paddingTop: '20px' }}>Copyright : PT Ilmu Data Terpadu</p>
                  </Col>
                </Row>
              </Container>
            </div>
        );
    }
}

export default Footer;