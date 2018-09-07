import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ScrollingNavigation2 from '../components/ScrollingNavigation2';

class Exclude extends Component {
    render() {
        return (
            <div>
                <ScrollingNavigation2/>
                <div className="marginTopContain"></div>
                <h1>Exclude Page</h1>
                <Link to="/">Scroll page again</Link>
            </div>
        );
    }
}

export default Exclude;