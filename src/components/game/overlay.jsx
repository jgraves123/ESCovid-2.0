import React from 'react';

class Overlay extends React.Component {

    constructor(props) {
        super(props);
        this.state = {hidden : false};
    }

    componentDidMount() {
        this.setState({hidden: false});
    }

    handleClick = () => {
        this.state = {hidden: true};
    };

    render() {
        return this.state.hidden ? '' :
            <div className={"overlay"}>
                <span className="close" onClick={this.handleClick}>
                &times;
                </span>
                <div className={"overlay-content"}>{this.props.children}</div>
            </div>
    }
}

export default Overlay;