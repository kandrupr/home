import React, { Component } from 'react';
import './css/About.css'
import pkkanPhoto from './assets/pkkan-photo.jpg';
import {Chip} from 'react-materialize';
import $ from 'jquery';
import Wdev from '-!svg-react-loader?name=Wdev!./assets/webDev.svg'; // eslint-disable-line import/no-webpack-loader-syntax
import Seng from '-!svg-react-loader?name=Seng!./assets/softwareEng.svg'; // eslint-disable-line import/no-webpack-loader-syntax
import Sdev from '-!svg-react-loader?name=Sdev!./assets/softwareDev.svg'; // eslint-disable-line import/no-webpack-loader-syntax
import Mdev from '-!svg-react-loader?name=Mdev!./assets/mobileDev.svg'; // eslint-disable-line import/no-webpack-loader-syntax

// Structure holding all svg files
const items  = {
    "sEng" : <Seng />,
    "sDev" : <Sdev />,
    "mDev" : <Mdev />,
    "wDev" : <Wdev />,
};

/**
 * About Page Component
 */
class About extends Component {
    constructor() {
        super();
        // Software Engineer as default
        this.state = {
            custom: "sEng"
        }
    }

    // Add a bounce animation to profile picture
    hover() {
        // Add bounce class
        $("#pk_photo").addClass('animated bounce');
        // Remove after 1 second
        setTimeout(function() {
            $("#pk_photo").removeClass('animated bounce');
        }, 1000);
    }

    render() {
        let svg = "";
        var link = window.location.href;
        // Look to url to get type of profession
        var custom = link.split("sp=");
        if(custom.length === 2){
            // If title is given set it
            svg = items[custom[1]];
            localStorage.setItem("JOBTITLE", custom[1]);
        } else {
            // If a title is not given, look to see if it is set or set to defaul
            if(localStorage.getItem("JOBTITLE")) {
                svg = items[localStorage.getItem("JOBTITLE")];
            } else {
                svg = items["sEng"];
                localStorage.setItem("JOBTITLE", "sEng");
            }
        }

        return (
            <div id="about" className="scrollify" data-name="aboutme">
                <div id="aboutFinder" className="finder"></div>
                <div id="aboutTop">
                    <div id="aboutTopLeft"></div>
                    <div id="aboutTopRight"><h1>About</h1></div>
                </div>
                <div id="aboutLeft">
                    <div id="aboutCenter">
                        <img id="pk_photo" onMouseOver={this.hover.bind(this)} src={pkkanPhoto} alt="head-shot"/>
                        <div id="hobbies">
                            <p>Interests &amp; Hobbies: </p>
                            <Chip>Film</Chip>
                            <Chip>Cooking</Chip>
                            <Chip>Weightlifting</Chip>
                            <Chip>Traveling</Chip>
                            <Chip>Listening to Music</Chip>
                        </div>
                    </div>
                </div>
                <div id="aboutRight">
                    <div id="aboutBody">
                        <div id="aboutBodyTop">
                            {svg}{/*{sEng} <h2>Hi, I'm Pranay. A {this.props.occupation}.</h2> */ }
                        </div>
                        <div id="aboutBodyBot">
                            <p>
                                I graduated from Michigan State University with a Bachelors in Computer Science. My interests include Computer Security, Machine Learning, and Scripting.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;