import React, { Component } from 'react';
import './Layout.css';
import Home from './Home.js'
import Skills from './Skills.js'
import {Button, Icon, Row, Col} from 'react-materialize'

class Layout extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col m={12}>
                        <Home />
                        <Skills />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Layout;
