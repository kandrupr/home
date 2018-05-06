import React, { Component } from 'react';
import './Skills.css';
import {Carousel} from 'react-materialize'
import $ from 'jquery';
import cplus from './assets/c++-icon.png';
import csharp from './assets/c-sharp-icon.png';
import java from './assets/java-icon.png';
import php from './assets/php-icon.png';
import python from './assets/python-icon.png';
import reacticon from './assets/react-icon.png';

class Skills extends Component {
    constructor() {
        super();
        this.languages = [
            "C++",
            "C#",
            "Java",
            "PHP",
            "Python",
            "React"
        ];
    }
    componentDidMount() {
        var that = this;
        var children = $(".carousel").children();
        console.log(children[0]);
        var languages = this.languages;
        $(".carousel-item").click( function() {
            var a = languages[children.index(this)];
            that.cool(a);
        });
    }

    cool(lang) {
        console.log(lang);
    }

    render() {
        return (
            <div id="skills">
                <div id="skillsTop">
                    <Carousel images={[
                        cplus,
                        csharp,
                        java,
                        php,
                        python,
                        reacticon
                    ]} />
                </div>
                <div id="skillsBot"></div>
            </div>
        );
    }
}

export default Skills;
