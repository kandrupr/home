import React, { Component } from 'react';
import './css/Projects.css'
import $ from 'jquery';
import {Button, Card, CardTitle, Col} from 'react-materialize'
import movieR from './assets/movieR.jpg';
import movieP from './assets/movieP.jpg';
import captcha from './assets/captcha.jpg';
import githubIcon from './assets/github-icon.png';
import Slider from "react-slick";

class Projects extends Component {
    constructor() {
        super();
        this.state = {
          resize: false
        };
        this.info = [
            "BANJO",
            "CAVOOI",
            "HELIOS"
        ];

        this.links = [
            "https://goo.gl/AfpGX5",
            "https://github.com/kandrupr/MoviePast",
            "#SOON"
        ];
    }
    componentDidMount() {
        var that = this;
        $(window).resize(function() {
            setTimeout(function() {
                that.setState({resize: true});
            }, 500);
        });
    }

    createProjectHolder() {
        if(window.innerWidth < 1024) {
            const settings = {
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1
            };
            return (
                <Col id="projectHolder" s={8}>
                    <Slider s={12} settings{...settings}>
                        <Col s={3}>
                            {this.createCard(0, "Movie Recommender", movieR, true)}
                        </Col>
                        <Col s={3}>
                            {this.createCard(1, "Movie Past", movieP, true)}
                        </Col>
                        <Col s={3}>
                            {this.createCard(2, "Beat the Captcha", captcha, true)}
                        </Col>
                    </Slider>
                </Col>
            );
        } else {
            return (
                <Col id="projectHolder" s={8}>
                    <Col s={3}>
                        {this.createCard(0, "Movie Recommender", movieR, false)}
                    </Col>
                    <Col s={1}/>
                    <Col s={3}>
                        {this.createCard(1, "Movie Past", movieP, false)}
                    </Col>
                    <Col s={1}/>
                    <Col s={3}>
                        {this.createCard(2, "Beat the Captcha", captcha, false)}
                    </Col>
                </Col>
            );
        }
    }

    createCard(key, title, image, check) {
        if(check) {
            return  (
                <Card key={key} className='small'
                      header={<CardTitle key={key + "title"} image={image}>{title}</CardTitle>}
                      actions={[<a key={key + "link"} href={this.links[key]}>{title}</a>]}>
                    {this.info[key]}
                </Card>
            );
        } else {
            return (
                <Card key={key} className='medium'
                      header={<CardTitle key={key + "title"} image={image}>{title}</CardTitle>}
                      actions={[<a key={key + "link"} href={this.links[key]}>{title}</a>]}>
                    {this.info[key]}
                </Card>
            );
        }
    }

    render() {
        return (
            <Col id="projects" s={12}>
                <div id="projectsStart"></div>
                <div id="projectsFinder" className="finder"></div>
                <Col id="projectsBackground" s={12}>
                    <div id="projectsBackTop">
                        <div id="projectsHeader">
                            <p>Projects</p>
                        </div>
                        <div id="projectsTopSlider">
                            <p id="projectsGithub">Projects</p>
                            <p>See what I'm working on<Button waves='light'><img src={githubIcon} alt="github"/></Button></p>
                        </div>
                    </div>
                    <div id="projectsBackBot"></div>
                </Col>
                <Col id="projectsForeground" s={12}>
                    {this.createProjectHolder()}
                </Col>
            </Col>
        );
    }
}

export default Projects;
