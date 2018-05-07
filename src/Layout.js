import React, { Component } from 'react';
import './Layout.css';
import Home from './Home.js'
import Skills from './Skills.js'
import Nav from './Nav.js'

import {Row, Col} from 'react-materialize'

class Layout extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col s={12}>
                        <Home />
                        <Skills />
                    </Col>
                    <Nav />
                </Row>
            </div>
        );
    }
}

export default Layout;
