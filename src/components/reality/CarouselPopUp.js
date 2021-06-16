import React, { Component } from "react";
import {Carousel} from "react-bootstrap";

export default class CarouselPopUp extends Component {
    state = {
    };

    handleClick = () => {
        this.props.toggle();
    };

    val = (1 - (parseFloat(this.props.width) / 100.0))/2

    render() {
        return (
            <div className="modal2">
                <div className="modal_content2">
                    <span className="close" onClick={this.handleClick}>
                        &times;
                    </span><br/>
                    <Carousel interval={10000} pause={"false"} style={{height: "100%"}}>
                        <Carousel.Item align='center'>
                            <img width={"80%"} src={"https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/xmas/life/2.png?raw=true"}/>
                        </Carousel.Item>
                        <Carousel.Item align='center'>
                            <img width={"80%"} src={"https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/xmas/life/3.png?raw=true"}/>
                        </Carousel.Item>
                        <Carousel.Item align='center'>
                            <img width={"80%"} src={"https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/xmas/life/4.png?raw=true"}/>
                        </Carousel.Item>
                        <Carousel.Item align='center'>
                            <img width={"80%"} src={"https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/xmas/life/5.png?raw=true"}/>
                        </Carousel.Item>
                        <Carousel.Item align='center'>
                            <img width={"80%"} src={"https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/xmas/life/6.png?raw=true"}/>
                        </Carousel.Item>
                        <Carousel.Item align='center'>
                            <img width={"80%"} src={"https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/xmas/life/7.png?raw=true"}/>
                        </Carousel.Item>
                        <Carousel.Item align='center'>
                            <img width={"80%"} src={"https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/xmas/life/8.png?raw=true"}/>
                        </Carousel.Item>
                        <Carousel.Item align='center'>
                            <img width={"80%"} src={"https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/xmas/life/9.png?raw=true"}/>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        );
    }
}