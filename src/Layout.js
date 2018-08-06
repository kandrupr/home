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
import 'jquery-scrollify'

var firstAbout = true;
var firstSkill = true;
var firstProjects = true;
var firstContact = true;

class Layout extends Component {
    constructor() {
        super();
        this.state = {
            current: "home",
            custom: "Software Engineer"
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
        var link = window.location.href;
        var custom = link.split("sp=");
        console.log(decodeURI(custom[1]));
        if(custom.length === 2){
            this.setState({custom: custom[1].replace('+', ' ')}, function(){
                console.log(this.state.custom);
            });
        }

        // document.getElementById('home').scrollIntoView({block: "end", inline: "nearest", behavior: "smooth"});
        window.history.replaceState(null, '', "/");
        this.scrollSpy();
        var that = this;

        $(window).scroll(function() {
            that.scrollSpy();
        });

        $.scrollify({
            section : ".scrollify",
            sectionName : "name",
        });
    }

    componentWillUnmount() {
        //$(window).unbind('beforeunload');
    }

    scrollSpy() {
        if(this.inView("#homeFinder")){
            if(this.state.current !== "home") {
                this.changeNavColor("home");
            }
        } else if(this.inView("#aboutFinder")) {
            if(this.state.current !== "about") {
                if(firstAbout) {
                    if(window.innerWidth > 300) {
                        firstAbout = false;
                        $("#aboutLeft").fadeIn(1000);
                        $("#aboutRight").fadeIn(1000, function() {
                            //$("#aboutBody").addClass('animated bounceInRight');
                        });
                    }
                }
                this.changeNavColor("about");
            }
        } else if(this.inView("#skillsFinder")) {
            if(this.state.current !== "skills") {
                if (firstSkill) {
                    firstSkill = false;
                    this.refs.skills.startTyping();
                    window.Materialize.toast('Click on the Icons!', 2500);

                }
                this.changeNavColor("skills");
            }
        } else if(this.inView("#projectsFinder")) {
            if(this.state.current !== "projects") {
                if (firstProjects) {
                    if (window.innerWidth > 1024) {
                        firstProjects = false;
                        $("#projectsTopSlider").addClass('animated bounceInRight');
                        $("#projectHolder").addClass('animated bounceInLeft');
                    }
                }
                this.changeNavColor("projects");
            }
        } else if(this.inView("#contactFinder")) {
            if(this.state.current !== "contact") {
                if (firstContact) {
                    firstContact = false;
                    // add animation?
                }
                this.changeNavColor("contact");
            }
        }
    }

    changeNavColor(a, font) {
        this.refs.nav.changeNav(this.state.current, a, font);
        this.setState({current: a});
    }

    render() {
        return (
            <div>
                <Row>
                    <Col s={12}>
                        <Home ref="home"/>
                        <About occupation={this.state.custom} ref="about"/>
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
