import React, { Component } from 'react';
import './css/Layout.css';
import Home from './Home.js'
import About from './About.js'
import Skills from './Skills.js'
import Projects from './Projects.js'
import Contact from './Contact.js'
import Nav from './Nav.js'
import $ from 'jquery';
import {Row, Col} from 'react-materialize'

var firstAbout = true;
var firstSkill = true;
var firstProjects = true;
var firstContact = true;

class Layout extends Component {
    constructor() {
        super();
        this.state = {
            current: "home",
            firstP: "#projectsStart"
        };
    }
    inView(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();

        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();

        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }

    componentDidMount() {
        // document.getElementById('home').scrollIntoView({block: "end", inline: "nearest", behavior: "smooth"});
        window.history.pushState(null, '', '/');

        var that = this;
        $(window).scroll(function() {
            if(that.inView("#homeFinder")){
                if(that.state.current !== "home") {
                    $(".navTitle").css("color", "#FFFFFF");
                    that.setState({current: "home"});
                }

            } else if(that.inView("#aboutFinder")) {
                if(that.state.current !== "about") {
                    if(firstAbout) {
                        firstAbout = false;
                        $("#aboutLeft").fadeIn(2000);
                        $("#aboutRight").fadeIn(2000);
                        console.log("About First");
                    } else {
                        console.log("About Last");
                    }
                    // Nav Change
                    $(".navTitle").css("color", "#FFFFFF");
                    that.setState({current: "about"});
                }
            } else if(that.inView(that.state.firstP)) {
                if (firstProjects) {
                    firstProjects = false;
                    $("#projectsTopSlider").addClass('animated bounceInRight');
                    $("#projectsForeground").addClass('animated bounceInLeft');
                } else {
                    if(that.state.current !== "projects") {
                        console.log("projects");
                        // Nav Change
                        $(".navTitle").css("color", "#FFFFFF");
                    }
                }
                that.setState({current: "projects", firstP: "#projectsFinder"});

            } else if(that.inView("#skillsFinder")) {
                if(that.state.current !== "skills") {
                    if (firstSkill) {
                        firstSkill = false;
                        that.refs.skills.startTyping();
                    }
                    // Nav Change
                    $(".navTitle").css("color", "#FFFFFF");
                    that.setState({current: "skills"});
                }
            } else if(that.inView("#contactFinder")) {
                if(that.state.current !== "contact") {
                    if (firstContact) {
                        firstContact = false;
                        // something cool?
                    }
                    // Nav Change
                    $(".navTitle").css("color", "#FFFFFF");
                    that.setState({current: "contact"});
                }
            }
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
                        <Projects ref="projects"/>
                        <Contact ref="contact"/>
                    </Col>
                    <Nav ref="nav"/>
                </Row>
            </div>
        );
    }
}

export default Layout;
