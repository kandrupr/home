import React, { Component } from 'react';
import './css/About.css'
import pkkanPhoto from './assets/pkkan-photo.jpg';

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
                    <p id="aboutCenter"><img src={pkkanPhoto} alt="head-shot"/></p>
                </div>
                <div id="aboutRight">
                    <div id="aboutBody">
                        <p>
                            Lorem ipsum dolor sit amet, eu vocibus corpora mea, id duo dolorem inciderint, putent dicunt ad pro. Ei semper dicunt suscipiantur eum, ius ne amet fuisset reformidans. In eam mutat propriae indoctum. Id viderer cotidieque ullamcorper vix, tantas everti comprehensam ut ius. Pro in omnis rationibus, sea integre impedit te. Sea ei meis oblique nominati, harum dolore tamquam te ius, ad sea amet aliquid verterem.

                            Justo homero cu eum, utroque torquatos pro ad. Possim nostrum percipitur nec ad. Eos detracto ocurreret vituperata ad. Sea idque minimum cu, et est probo consetetur consectetuer.

                            Summo novum eruditi no mel, ei pro deleniti moderatius. Ne falli oblique ceteros quo, et has nostro cotidieque. Mea suscipit appetere ut, duo dicit tractatos id. Pri cu eros petentium scribentur. Laudem libris mollis et usu.

                            Sea at cetero postulant, ne porro melius sententiae cum, quaeque delenit periculis vim in. Cu nec aperiri pertinax. Laudem imperdiet ad mel, mel quem paulo no. Ne odio dicant vel.

                            Posse deseruisse accommodare his et, epicurei lobortis id pro. Usu ea option electram consetetur. Aliquip vivendum id eum, eu nullam ancillae comprehensam sit. Sit quot singulis eu, ullum doctus delectus mea et. Exerci possit nostro mei te, sonet scaevola torquatos ad per. Fierent delectus eos at, at his dicunt iisque periculis.
                            Lorem ipsum dolor sit amet, eu vocibus corpora mea, id duo dolorem inciderint, putent dicunt ad pro. Ei semper dicunt suscipiantur eum, ius ne amet fuisset reformidans. In eam mutat propriae indoctum. Id viderer cotidieque ullamcorper vix, tantas everti comprehensam ut ius. Pro in omnis rationibus, sea integre impedit te. Sea ei meis oblique nominati, harum dolore tamquam te ius, ad sea amet aliquid verterem.

                            Justo homero cu eum, utroque torquatos pro ad. Possim nostrum percipitur nec ad. Eos detracto ocurreret vituperata ad. Sea idque minimum cu, et est probo consetetur consectetuer.

                            Summo novum eruditi no mel, ei pro deleniti moderatius. Ne falli oblique ceteros quo, et has nostro cotidieque. Mea suscipit appetere ut, duo dicit tractatos id. Pri cu eros petentium scribentur. Laudem libris mollis et usu.

                            Sea at cetero postulant, ne porro melius sententiae cum, quaeque delenit periculis vim in. Cu nec aperiri pertinax. Laudem imperdiet ad mel, mel quem paulo no. Ne odio dicant vel.

                            Posse deseruisse accommodare his et, epicurei lobortis id pro. Usu ea option electram consetetur. Aliquip vivendum id eum, eu nullam ancillae comprehensam sit. Sit quot singulis eu, ullum doctus delectus mea et. Exerci possit nostro mei te, sonet scaevola torquatos ad per. Fierent delectus eos at, at his dicunt iisque periculis.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;