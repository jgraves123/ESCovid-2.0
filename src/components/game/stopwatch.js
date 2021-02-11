
import { PureComponent } from 'react';
import ms from 'ms';
import { fillTextWithFormat } from './format_stopwatch';

export default class ReactStopWatch extends PureComponent {
    static displayName = 'ReactStopWatch';

    static defaultProps = {
        autoStart: true,
        withLoop: false,
        onCallback: () => {},
        onChange: () => {},
    };

    intervalId;

    constructor(props) {
        super(props);

        const {
            hours,
            minutes,
            seconds,
        } = props;

        const formatted = fillTextWithFormat(hours, minutes, seconds);

        this.intervalId = setInterval(() => {}, Number.MAX_VALUE);
        this.state = {
            formatted,
            stateHours: hours,
            stateMinutes: minutes,
            stateSeconds: seconds,
        };
    }

    componentWillReceiveProps() {
        this.intervalId = setInterval(() => {}, Number.MAX_VALUE);
        let sec = localStorage.getItem('seconds');
        let min = localStorage.getItem('minutes');
        let hr = localStorage.getItem('hours');
        if (sec == null) {
            sec = 0;
        }
        if (min == null) {
            min = 0;
        }
        if (hr == null) {
            hr = 0;
        }
        this.setState({
            stateHours: parseInt(hr),
            stateMinutes: parseInt(min),
            stateSeconds: parseInt(sec),
        });
    }

    componentDidMount() {
        const { autoStart } = this.props;
        if (autoStart) {
            this.timer();
        }
    }

    componentWillUnmount() {
        this.stopToCount();
    }

    stopToCount() {
        clearInterval(this.intervalId);
    }

    counter() {
        const {
            limit,
            withLoop,
            onCallback,
            onChange,
        } = this.props;

        const {
            stateHours,
            stateMinutes,
            stateSeconds,
        } = this.state;

        this.setState(prevState => ({
            stateSeconds: prevState.stateSeconds + 1,
        }));

        if (stateSeconds >= 59) {
            this.setState(prevState => ({
                stateSeconds: 0,
                stateMinutes: prevState.stateMinutes + 1,
            }));

            if (stateMinutes >= 59) {
                this.setState(prevState => ({
                    stateMinutes: 0,
                    stateHours: prevState.stateHours + 1,
                }));
            }
        }

        const formatted = fillTextWithFormat(stateHours, stateMinutes, stateSeconds);

        this.setState({ formatted });

        onChange({
            hours: stateHours,
            minutes: stateMinutes,
            seconds: stateSeconds,
        });

        if (limit === formatted) {
            setTimeout(() => {
                this.stopToCount();
                if (withLoop) {
                    this.timer();
                }
                onCallback();
            }, 0);
        }
    }

    timer() {
        this.counter();

        const intervalId = setInterval(() => {
            this.counter();
        }, ms('1s'));

        this.intervalId = intervalId;
    }


    render() {
        const { children, render } = this.props;

        const {
            formatted,
            stateHours: hours,
            stateMinutes: minutes,
            stateSeconds: seconds,
        } = this.state;

        if (children) {
            return children({
                formatted,
                hours,
                minutes,
                seconds,
            });
        }

        if (render) {
            return render({
                formatted,
                hours,
                minutes,
                seconds,
            });
        }

        // eslint-disable-next-line
        console.error(
            'Component ReactStopWatch:',
            'no children or render prop are present',
        );

        return null;
    }
}