import React, { Component } from 'react';
import './Home.css';
import anime from 'animejs'
import Typed from 'typed.js'

class Home extends Component {
    componentDidMount() {
        var colors = ['#F4D21F', '#1AACA8', '#9DCA40', '#DA5A98', '#E5683E',
            '#BC6D21', '#74BB63', '#DA1817', '#2283BC', '#31B495', '#1EB2D8',
            '#EB9D12', '#9DCA40', '#F4D21F', '#1EB2D8', '#E5683E', '#BE2F39',
            '#F4D21F', '#E6632A', '#DA5A98', '#1AA5D0', '#9DCA40', '#31B495',
            '#1EB2D8', '#F5C739', '#1F8C43', '#74BB63', '#2765B0', '#9DCA40',
            '#2283BC', '#BC6D21', '#9F83B6', '#ED8E3F'];
        var colorLength = colors.length;
        var pathEls = document.querySelectorAll('path');
        for (var i = 0; i < pathEls.length; i++) {
            var pathEl = pathEls[i];
            var offset = anime.setDashoffset(pathEl);
            pathEl.setAttribute('stroke-dashoffset', offset);
            anime({
                targets: pathEl,
                stroke: colors[anime.random(0, colorLength-1)],
                strokeDashoffset: [offset, 0],
                duration: anime.random(1000, 3000),
                delay: anime.random(1000, 3000),
                loop: true,
                opacity: anime.random(0,100)/100,
                direction: 'alternate',
                easing: 'easeInOutSine',
                autoplay: true
            });
        }
        var options = {
            strings: ["Web Development", "Mobile Development", "Data Science"],
            typeSpeed: 50,
            backSpeed: 50,
            loop: true
        };

        var typed = new Typed('#homeTitle', options);
    }

    render() {
        return (
            <div id="home">
                <div className="anim">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 700">
                        <g fill="none" fillRule="evenodd">
                            <path stroke="#F4D21F" d="M200 0 L200 700"/>
                            <path stroke="#1AACA8" d="M400 0 L400 700"/>
                            <path stroke="#9DCA40" d="M600 0 L600 700"/>
                            <path stroke="#DA5A98" d="M800 0 L800 700"/>
                            <path stroke="#E5683E" d="M1000 0 L1000 700"/>
                            <path stroke="#BC6D21" d="M1200 0 L1200 700"/>
                            <path stroke="#74BB63" d="M0 100 L1400 100"/>
                            <path stroke="#DA1817" d="M0 200 L1400 200"/>
                            <path stroke="#2283BC" d="M0 300 L1400 300"/>
                            <path stroke="#31B495" d="M0 400 L1400 400"/>
                            <path stroke="#1EB2D8" d="M0 500 L1400 500"/>
                            <path stroke="#EB9D12" d="M0 600 L1400 600"/>
                        </g>
                    </svg>
                </div>
                <div id="homeCenter">
                    <h2 id="homeTitle" />
                </div>
            </div>
        );
    }
}

export default Home;