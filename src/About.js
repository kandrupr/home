import React, { Component } from 'react';
import './css/About.css'
import pkkanPhoto from './assets/pkkan-photo.jpg';
import {Chip} from 'react-materialize';
import $ from 'jquery';
import sEng from './assets/softwareEng.svg';
import sDev from './assets/softwareDev.svg';
import wDev from './assets/webDev.svg';
import mDev from './assets/mobileDev.svg';

const occupation  = {
    "Software Engineer" : sEng,
    "Software Developer" : sDev,
    "Web Developer" : wDev,
    "Android Developer" : mDev
};

class About extends Component {
    hover() {
        $("#pk_photo").addClass('animated bounce');
        //$("#pk_photo").removeClass('animated bounce');
        setTimeout(function() {
            $("#pk_photo").removeClass('animated bounce');
        }, 1000);
    }

    render() {
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
                            <p><img id="occImage" alt={"I'm Pranay a, " + this.props.occupation + "."} src={occupation[this.props.occupation]}/></p>{/* <h2>Hi, I'm Pranay. A {this.props.occupation}.</h2> */ }
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