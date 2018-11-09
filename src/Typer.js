import React, { Component } from 'react';
import './css/Skills.css';
import Typed from 'typed.js'

var typed;
var options;
var complete = false;
var typing = false;

/**
 * Typing data component for command prompt in Skills page
 */
class Typer extends Component {
    constructor() {
        super();
        // Starting value
        this.value = 0;
        // Static information for each language
        this.languages = [
            "^400C++^1000\n Have experience in Object Oriented Programming...^100\n Expertise:^1000 Intermediate...",
            "^400C#^1000\n Developed a website in ASP.NET Core and a few console applications...^100\n Expertise:^1000 Novice...",
            "^400Java^1000\n Created multiple Android applications using Java...^100\n Expertise:^1000 Proficient...",
            "^400JavaScript^1000\n Developed JavaScript driven websites that give a better user experience...^100\n Expertise:^1000 Proficient...",
            "^400PHP^1000\n Experience scripting and building websites with PHP...^100\n Expertise:^1000 Proficient...",
            "^400Python^1000\n First choice when it comes to scripting and data analysis...^100\n Expertise:^1000 Proficient...",
            "^400React^1000\n Used React as a front end library for multiple websites...^100\n Expertise:^1000 Proficient..."
        ];
    }

    // Options for typed object
    getOptions(value) {
        var that = this;
        return {
            strings: [that.languages[value]],
            typeSpeed: 25,
            backSpeed: 15,
            loop: true,
            onComplete: function(self) {
                if(!complete) {
                    typing = false;
                    complete = true;
                    self.toggle();
                }
            },
            onLastStringBackspaced: function(self) {
                complete = false;
                typing = false;
            },
            onTypingResumed: function(self) {
                if(!complete && !typing) {
                    typed.toggle();
                    typed.destroy();
                    typed = new Typed(that.refs.head, options);
                    typing = true;
                }
            }
        };
    }

    componentDidMount() {
        /*
        var that = this;

        $(window).scroll(function() {
            if(that.inView("#typedBody")) {

                $(window).off();
            }
        });*/
    }

    // Used in skills page for the first typing
    firstType() {
        options = this.getOptions(0);
        typed = new Typed(this.refs.head, options);
        typing = true;
    }

    // Typing is over and completed delete and type something new
    resumeTyping (value) {
        // Typing done this way because of erratic behavior
        if(!typing && complete){
            if(value !== this.value) {
                this.value = value;
                options = this.getOptions(this.value);
                typing = true;
                typed.toggle();
            }
        }
    }

    render() {
        return (
            <div id="typedBody">
                kandrupr@github.io:~$ <span id="typedSpan" ref="head" />
            </div>
        );
    }
}

export default Typer;