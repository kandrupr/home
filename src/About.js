import React, { Component } from 'react';
import './css/About.css'
import pkkanPhoto from './assets/pkkan-photo.jpg';
import {Chip} from 'react-materialize';

class About extends Component {
    render() {
        return (
            <div id="about">
                <div id="aboutFinder" className="finder"></div>
                <div id="aboutTop">
                    <div id="aboutTopLeft"></div>
                    <div id="aboutTopRight"><h1>About</h1></div>
                </div>
                <div id="aboutLeft">
                    <div id="aboutCenter">
                        <img src={pkkanPhoto} alt="head-shot"/>
                        <div id="hobbies">
                            <p>Interests &amp; Hobbies: </p>
                            <Chip>Film</Chip>
                            <Chip>Basketball</Chip>
                            <Chip>Running</Chip>
                            <Chip>4</Chip>
                            <Chip>5</Chip>
                        </div>
                    </div>

                </div>
                <div id="aboutRight">
                    <div id="aboutBody">
                        <p>o k</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;