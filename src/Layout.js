import React, { Component } from 'react';
import './css/Layout.css';
// import Home from './Home.js'
import About from './About.js'
import Skills from './Skills.js'
import Projects from './Projects.js'
import Contact from './Contact.js'
import Nav from './Nav.js'
import $ from 'jquery';
import {Row, Col} from 'react-materialize'
import 'jquery-scrollify'
import anime from 'animejs'

var firstAbout = true;
var firstSkill = true;
var firstProjects = true;
var firstContact = true;

class Layout extends Component {
    constructor() {
        super();
        this.state = {
            current: "contact",
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
        document.getElementById('about').scrollIntoView({block: "end", inline: "nearest", behavior: "smooth"});
        window.history.pushState(null, '', "/");
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

    componentWillUnmount() {}

    scrollSpy() {
        if(this.inView("#aboutFinder")) {
            if(this.state.current !== "about") {
                if(firstAbout) {
                    if(window.innerWidth > 300) {
                        var lineDrawing = anime({
                            targets: '#aboutBodyTop svg g path',
                            strokeDashoffset: [anime.setDashoffset, 0],
                            easing: 'easeInOutSine',
                            delay: 1000,
                            duration: 1500,
                            complete: function(anim) {
                                $("#aboutBodyBot").fadeIn(500, function(){
                                    $("svg g").css({fill:"black"});
                                });
                            }
                        });
                    }
                    firstAbout = false;
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
                        {/*<Home ref="home"/>*/}
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
