import React, { Component } from 'react';
import './Layout.css';
import Home from './Home.js'
import About from './About.js'
import Skills from './Skills.js'
import Nav from './Nav.js'
import $ from 'jquery';
import {Row, Col} from 'react-materialize'

var firstAbout = true;
var firstSkill = true;

class Layout extends Component {
    inView(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();

        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();

        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }

    componentDidMount() {
        var that = this;

        $(window).scroll(function() {
            if(that.inView("#aboutFinder")) {
                if(firstAbout) {
                    firstAbout = false;
                    $("#aboutLeft").fadeIn(2000);
                    $("#aboutRight").fadeIn(2000);
                }
            } else if(that.inView("#typedBody")) {
                if(firstSkill) {
                    firstSkill = false;
                    that.refs.skills.startTyping();
                }
            } /*else if(that.inView()) {

            } else if(that.inView()) {

            }*/
        });
    }

    render() {
        return (
            <div>
                <Row>
                    <Col s={12}>
                        <Home ref="home"/>
                        <About ref="about"/>
                        <Skills ref="skills"/>
                    </Col>
                    <Nav />
                </Row>
            </div>
        );
    }
}

export default Layout;
