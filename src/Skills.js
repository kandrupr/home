import React, { Component } from 'react';
import './css/Skills.css';
import {Carousel} from 'react-materialize'
import $ from 'jquery';
import cplus from './assets/c++-icon.svg';
import csharp from './assets/c-sharp-icon.svg';
import java from './assets/java-icon.svg';
import javascript from './assets/javascript-icon.svg';
import php from './assets/php-icon.svg';
import python from './assets/python-icon.svg';
import reacticon from './assets/react-icon.svg';
import resume from './assets/Resume.pdf';
import Typer from './Typer.js'

// Skills page component
class Skills extends Component {
    componentDidMount() {
        var that = this;
        // Get all carousel items
        var children = $(".carousel").children();
        // Create carousel listener for clicking on language images
        $(".carousel-item").click( function() {
            var a = children.index(this);
            that.refs.terminal.resumeTyping(a);
        });
    }

    // Function passed up to layout to start typing on Skills component
    startTyping() {
        this.refs.terminal.firstType();
    }

    render() {
        return (
            <div id="skills" className="scrollify" data-name="myskills">
                <div id="skillsFinder" className="finder"></div>
                <div id="skillsTop">
                    <h1 id="section">Skills</h1>
                </div>
                <div id="skillsBot">
                    <div id="left">
                        <Carousel images={[
                            cplus,
                            csharp,
                            java,
                            javascript,
                            php,
                            python,
                            reacticon
                        ]} />
                    </div>
                    <div id="right">
                        <div id="typedBox">
                            <div id="typedHeader">
                                <p>kandrupr@github.io:~</p>
                            </div>
                            <Typer ref="terminal" />
                        </div>
                        <p id="resume">For a comprehensive list, check out my <a href={resume}>resume.</a></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Skills;
