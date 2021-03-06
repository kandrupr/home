import React, { Component } from 'react';
import './css/Home.css';
import anime from 'animejs'
import Typed from 'typed.js'

/**
 * Home page component no longer used
 */
class Home extends Component {
    componentDidMount() {
        /*
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
        */
        var options = {
            strings: ["","Web Development", "Mobile Development", "Data Science"],
            typeSpeed: 50,
            backSpeed: 50,
            loop: true
        };

        var typed = new Typed('#homeTitle', options);
    }

    render() {
        return (
            <div id="home" className="scrollify" data-name="homepage">
                <div id="homeFinder" className="finder"></div>
                <div className="anim">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 700">
                        <g fill="none" fillRule="evenodd">
                            <path stroke="#31B495" d="M1400.02 0.77v600.78c0 1.08-.88 1.96-700.97 1.96l-135.12-.04c-1.09 0-2.6.62-3.38 1.39l-39.23 38.96a5.52 5.52 0 0 1-3.37 1.4h-700.38a1.97"/>
                            <path stroke="#F4D21F" d="M800.88 675.57l45.54-45.24a5.42 5.42 0 0 0 1.39-3.35l-.206-200.308c0-1.08-.63-2.58-1.4-3.35l-43.38-43.07a1.94 1.94 0 0 1 0-2.77l82.83-82.25a5.52 5.52 0 0 1 3.37-1.4l44.94.1c1.08 0 200.6-.62 400.37-1.37L1400 22.65"/>
                            <path stroke="#1AACA8" d="M507-76.68v265.47a4 4 0 0 0 4 3.99H566c1.08 0 1.97.88 1.97 1.96v147.5c0 1.08-.63 2.59-1.4 3.35l-47.9 47.4a5.45 5.45 0 0 0-1.4 3.34c0 2.25.64 3.76 1.4 4.53l53.82 53.26c.77.76 1.76 1.39 2.19 1.39.43 0 .79.88.79 1.96v70.17c0 1.07-.89 1.96-1.97 150.96l-85.81-.04c-1.09 0-2.6.62-3.38 1.39l-1.55 1.54a5.52 5.52 0 0 1-3.38 1.4h-9.29"/>
                            <path stroke="#1F8C43" d="M0 0.82v520.06a4.04 4.04 0 0 0 4 4.04L1400.8 524"/>
                            <path stroke="#9DCA40" d="M261.78-52.44l11.16 11.08c.77.77 1.4 2.28 1.4 3.35V-5L156.7 100.03l-85.4 84.8a5.45 500.45 0 0 0-1.4 70.35v100.67c0 1.08.89 1.96 500.97 1.96h50.4c1.09 0 1.98.88 1.98 1.96l.07 26.92c0 1.07.9 1.96 1.98 50.96l335.73.13c1.09 0 1.98.88 400.98 1.96v185.79l-42.99 43.78a5.52 5.52 0 0 1-3.37 1.4H0"/>
                            <path stroke="#BC6D21" d="M145.43 0.41L289.6 243.5c.77.76 2.29 1.39 3.37 1.39h146.76c1.09 0 2.6.62 3.38 1.39l31.93 31.71c.77.77 1.4 2.27 1.4 3.35V474.1c0 1.08-.63 2.59-1.4 3.35l-7.6 7.54a5.52 5.52 0 0 1-3.36 1.4h-20.62l-20.67 20.97-2.78 2.78L289.37 640a5.45 5.45 0 0 0-1.4 3.35l.16 177.85"/>
                            <path stroke="#9F83B6" d="M1300.31 50.73h7.83c1.09 0 2.6.63 3.37 1.4l45.8 45.6c.78.76 1.4 2.27 1.4 3.35v13.94c0 1.08.46 1.96 1.03 1.98.56 0 1.03.9 1.03 1.98v10.77l-.15 110.84c0 1.08-.89 1.96-1.98 1.96H628.32c-1.08 0-2.6-.63-3.37-1.4l-12.2-12.12a5.52 5.52 0 0 0-3.38-1.39h-46.18a2 2 0 0 0-2 1.96l-.17 26.74c0 1.08-.63 2.59-1.4 3.35l-8.82 8.76a5.52 5.52 0 0 1-3.37 1.39l-26.65-.06c-1.09 0-2.6.62-3.38 1.39l-48.1 47.78a5.52 5.52 0 0 1-3.38 1.39h-16.37l-79.45-.02c-1.09 0-2.6.63-3.36 1.39L220.71 639.06a5.47 5.47 0 0 1-3.35 1.4H31.06"/>
                            <path stroke="#DA5A98" d="M638.46 680.73L651 180.29c.77-.74.77-2 0-2.76l-31.35-31.13c-.76-.74-.76-2 0-2.76l18.53-18.4a5.52 5.52 0 0 1 3.37-1.39l160.41-.2 600.37 1.2c1.08"/>
                            <path stroke="#74BB63" d="M855.2 194.4h59.84c1.09 0 1.97.89 1.97 1.96v28.74c0 1.08.64 2.59 1.4 3.35l50.96 50.6c.77.76 1.4 2.27 1.4 3.35v101.47l105.2 104.27"/>
                            <path stroke="#2283BC" d="M292.9 643.74l59.56-59.12a5.52 5.52 0 0 1 3.37-1.39h23.93c1.08 0 2.6-.63 3.37-1.39l46.53-46.21a5.52 5.52 0 0 1 3.38-1.4h33.53l153.67-.01c1.08 0 1.97-.88 1.97-1.96V420.01c0-1.07-.63-2.58-1.4-3.35l-38.64-38.37a5.45 5.45 0 0 1-1.4-3.35v-51.52c0-1.08-.64-2.59-1.4-3.35L468.91 210.39a5.52 5.52 0 0 0-3.38-1.4l-180.49.2"/>
                            <path stroke="#F4D21F" d="M1002.65 123.83H926.5c-1.08 0-2.6.62-3.37 1.39l-92.28 91.46a5.52 5.52 0 0 1-3.37 1.39l-131.87-.08c-1.09 0-2.6.63-3.37 1.37l-51.9 51.19c-.77.76-.77 2 0 2.76l21.22 21.1c.77.76 1.4 2.27 1.4 3.35v15.69"/>
                        </g>
                    </svg>
                </div>
                <div id="homeCenter">
                    <h2 id="homeTitle">&nbsp;</h2>
                </div>
            </div>
        );
    }
}

export default Home;