import React, { Component } from 'react';
import './css/Skills.css';
import {Carousel} from 'react-materialize'
import $ from 'jquery';
import cplus from './assets/c++-icon.png';
import csharp from './assets/c-sharp-icon.png';
import java from './assets/java-icon.png';
import php from './assets/php-icon.png';
import python from './assets/python-icon.png';
import reacticon from './assets/react-icon.png';
import Typer from './Typer.js'

class Skills extends Component {
    componentDidMount() {
        var that = this;
        var children = $(".carousel").children();
        console.log(children[0]);
        $(".carousel-item").click( function() {
            var a = children.index(this);
            that.refs.terminal.resumeTyping(a);
        });
    }

    startTyping() {
        this.refs.terminal.firstType();
    }

    render() {
        return (
            <div id="skills">
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
                        <p id="resume">Lorem</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Skills;
