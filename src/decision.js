import React, {Component} from 'react';
import "./App.css";
import Confetti from 'react-confetti'

function home(){
    console.log("here too?")
    window.location.reload();
}


class Decision extends Component {


    render(){
        //send drum beats played

        return(
            <div>
                <body>
                <Confetti/>
                <header id="main-header">
                    <div className="container">
                        <h1 align='center'>Setting off on a Voyage</h1>
                    </div>
                </header>
                <nav id="navbar">
                    <div className="container">
                        <ul align='center'>
                            <li><a href="home">Return</a></li>
                        </ul>
                    </div>
                </nav>

                {/*<section><div className="container"><img src={ship} className="image" usemap="#wayout" alt=""/>*/}
                {/*    <map name="wayout">*/}
                {/*        <area shape="polygon" coords="1, 1, 20vw, 1, 20vw, 20vw, 1, 20vw" title="View" href="gliese876.html"></area>*/}
                {/*    </map>*/}
                {/*    </div></section>*/}
                <div height="400">
                </div>
                <section>
                        <p>It's time to make your decision of which star's planetary system you will explore. Here's what you know:</p>
                        <table border="1" width="80%" align="center" bgcolor="#708090">
                            <tr align = "center">
                                <td>Star System</td>
                                <td>Gliese 876</td>
                                <td>TRAPPIST-1</td>
                            </tr>
                            <tr>
                                <td>Time passing for Astronauts</td>
                                <td>9.9 years</td>
                                <td>26.3 years</td>
                            </tr>
                            <tr>
                                <td>Time passing on earth</td>
                                <td>31.5 years</td>
                                <td>84.2 years</td>
                            </tr>
                            <tr>
                                <td>Likelihood of Success</td>
                                <td>2 planets with each one having about 15% chance of success</td>
                                <td>1 planet with about 30% chance of success, two more planets with success rate ~10%</td>
                            </tr>
                            <tr>
                                <td>Net Success Rate assuming Independence of results</td>
                                <td>~28%</td>
                                <td>~43%</td>
                            </tr>
                        </table>
                </section>
                <div id="top_block">
                    <div className="rocket blastOff"><img
                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1517444/rocket.png"/></div>
                </div>
                <section id="showcase"><div className="container">
                    <h3>Lift Off in &nbsp;&nbsp;3...&nbsp;&nbsp; 2...&nbsp;&nbsp; 1...</h3>
                </div></section>
                </body>
                {/*<footer id="main-footer">*/}
                {/*    <h3>Contact info?</h3>*/}
                {/*</footer>*/}
            </div>
        )
    }
}

export default Decision;