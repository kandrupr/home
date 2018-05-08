import React, { Component } from 'react';
import './Skills.css';
import $ from 'jquery';
import Typed from 'typed.js'

var options;
var complete = false;
var typing = false;

class Typer extends Component {
    constructor() {
        super();
        this.value = 0;
        this.languages = [
            "^400C++^1000\n installing components...^100\n Fetching from source...",
            "^2000C#",
            "^2000Java",
            "^2000PHP",
            "^2000Python",
            "^2000React"
        ];

        this.typed = null;

    }

    inView(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();

        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();

        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }

    getOptions(value) {
        var that = this;
        return {
            strings: [that.languages[value]],
            typeSpeed: 25,
            backSpeed: 15,
            loop: true,
            onComplete: function(self) {
                console.log("TOGGLE");
                if(!complete) {
                    typing = false;
                    complete = true;
                    self.toggle();
                }
            } ,
            onLastStringBackspaced: function(self) {
                that.typed.stop();
            },
            onDestroy: function(self) {

            }
        };
    }

    componentDidMount() {
        var that = this;
        options = this.getOptions(0);

        $(window).scroll(function() {
            console.log("TRUE");
            if(that.inView("#typedBody")) {
                that.typed = new Typed(that.refs.head, options);
                typing = true;
                $(window).off();
            }
        });
    }

    resumeTyping (value) {
        console.log(this.value);
        if(!typing){
            console.log("REVERSE");
            if(value !== this.value) {
                this.value = value;
                options = this.getOptions(value);
                typing = true;
                this.typed.toggle();
            }
        }
    }

    render() {
        return (
            <div id="typedBody">
                &nbsp;kandrupr@github.io:~$ <span id="typedSpan" ref="head"></span>
            </div>
        );
    }
}

export default Typer;