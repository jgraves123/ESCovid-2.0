import * as React from 'react';
import ReactStopwatch from 'react-stopwatch';
import {Component} from "react";

class Stopwatch extends Component {

    render() {
        return (<ReactStopwatch
            seconds={this.props.sec}
            minutes={this.props.min}
            hours={this.props.hrs}
            limit="10:00:00"
            onChange={({hours, minutes, seconds}) => {
                // do something
            }}
            onCallback={() => console.log('Finish')}
            render={({formatted, hours, minutes, seconds}) => {

                return (
                    <div>
                        Formatted: {formatted}
                    </div>
                );
            }}
        />)
    }

}

export default Stopwatch;