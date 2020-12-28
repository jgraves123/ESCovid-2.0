import React, {Component} from 'react';
import GliesePopUp from "./GliesePopUp";
import TrappistPopUp from "./TrappistPopUp";
import ComparePopUp from "./ComparePopUp";
import ReactDOM from 'react-dom';
import './index.css';
import Congrats from "./congrats"




class Home extends Component {
    componentDidMount(){
        document.title = "ESCovid: Last Step!"
    }

    state = {
        gliese: false,
        trappist: false,
        compare: false
    };

    GliesePop = () => {
        console.log("I'm here")
        this.setState({
            gliese: !this.state.gliese
        });
    };

    TrappistPop = () => {
        console.log("I'm here")
        this.setState({
            trappist: !this.state.trappist
        });
    };

    ComparePop = () => {
        console.log("I'm here")
        this.setState({
            compare: !this.state.compare
        });
    };

    trappist = () => {
        console.log("why")
        ReactDOM.render(
            <React.StrictMode>
                <Congrats planet="TRAPPIST-1"/>
            </React.StrictMode>,
            document.getElementById('root')
        );
    }

    gliese = () => {
        console.log("why")
        ReactDOM.render(
            <React.StrictMode>
                <Congrats planet="Gliese 876" />
            </React.StrictMode>,
            document.getElementById('root')
        );
    }




    render() {
        return(
            <div>
                <body>
                {/*<Confetti/>*/}
                <header id="main-header">
                    <div className="container">
                        <h1 align='center'>Choose your Target Destination</h1>
                    </div>
                </header>
                <div height="400">
                    {/*if state is true, do this pop-up*/}
                    {this.state.gliese ? <GliesePopUp toggle={this.GliesePop} /> : null}
                    {this.state.trappist ? <TrappistPopUp toggle={this.TrappistPop} /> : null}
                    {this.state.compare ? <ComparePopUp toggle={this.ComparePop} /> : null}
                </div>
                <section>
                    <div className="scaling-svg-container">
                        {/*resizing*/}
                        <svg className="scaling-svg" viewBox="0 0 1600 900"> {/* Needs auto
                         updating*/}
                            <image width="100%" height="100%" href="https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/ship.jpg?raw=true"/>
                            <rect x="1010" y="200" width="375" height="400" className="clickable-done" onClick={this.GliesePop}/>
                            <rect x="590" y="200" width="410" height="400" className="clickable-done" onClick={this.ComparePop}/>
                            <rect x="220" y="200" width="360" height="400" className="clickable-done" onClick={this.TrappistPop}/>
                        </svg>
                    </div>
                </section>
                <div align="center">
                    <h2>Time to make your decision. Where will you travel to?</h2>
                    <button className="button" onClick={this.trappist}><h3>TRAPPIST-1</h3></button>
                    <button className="button" onClick={this.gliese}><h3>Gliese 876</h3></button>
                </div>
                <section id="showcase"><div className="container">
                    <h3 align="center">Lift Off in &nbsp;&nbsp;3...&nbsp;&nbsp; 2...&nbsp;&nbsp; 1...</h3>
                </div></section>

                </body>
                {/*<footer id="main-footer">*/}
                {/*    <h3>Contact info?</h3>*/}
                {/*</footer>*/}
            </div>
        );
    }
}



ReactDOM.render(<Home />, document.getElementById("root"));

export default Home;
