import React, { Component } from 'react';
import './css/About.css'
import pkkanPhoto from './assets/pkkan-photo.jpg';
import {Chip} from 'react-materialize';
import $ from 'jquery';
import Wdev from '-!svg-react-loader?name=Wdev!./assets/webDev.svg'; // eslint-disable-line import/no-webpack-loader-syntax
import Seng from '-!svg-react-loader?name=Seng!./assets/softwareEng.svg'; // eslint-disable-line import/no-webpack-loader-syntax
import Sdev from '-!svg-react-loader?name=Sdev!./assets/softwareDev.svg'; // eslint-disable-line import/no-webpack-loader-syntax
import Mdev from '-!svg-react-loader?name=Mdev!./assets/mobileDev.svg'; // eslint-disable-line import/no-webpack-loader-syntax

const items  = {
    "sEng" : <Seng />,
    "sDev" : <Sdev />,
    "mDev" : <Mdev />,
    "wDev" : <Wdev />,
};

class About extends Component {
    constructor() {
        super();
        this.state = {
            custom: "sEng"
        }
    }

    hover() {
        $("#pk_photo").addClass('animated bounce');
        //$("#pk_photo").removeClass('animated bounce');
        setTimeout(function() {
            $("#pk_photo").removeClass('animated bounce');
        }, 1000);
    }

    render() {
        let svg = "";
        var link = window.location.href;
        var custom = link.split("sp=");
        if(custom.length === 2){
            svg = items[custom[1]];
            localStorage.setItem("JOBTITLE", custom[1]);
        } else {
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
                            <Chip>Basketball</Chip>
                            {/*
                            <Chip>Traveling</Chip>
                            <Chip>Running</Chip>
                            <Chip>Cooking</Chip>*/}
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

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;