import React, { Component } from 'react';
import Navigation from '../components/Navigation';
import SlideArea from '../components/SlideArea';
import Tentang from '../components/Tentang';
import WhyVisualize from '../components/WhyVisualize';
import Footer from '../components/Footer';

// import AOS from 'aos';

class Beranda extends Component {
    componentDidMount() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    render() {
        return (
            <div>
                <div className="headerWrap">
                    <Navigation/>
                </div>
                <div className="marginTopContain"></div>
                <SlideArea/>
                <Tentang/>
                <WhyVisualize/>
                <Footer/>
            </div>
        );
    }
}

export default Beranda;