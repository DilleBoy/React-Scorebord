import React, {Component} from 'react';

class Stopwatch extends Component {
    
    state = {
        isRunning: false,
        elapsedTime: 0,
        previousTime: 0,
    }
    
    componentDidMount() {
        this.intervalID = setInterval(() => this.tick(), 100);
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }
    tick = () => {
        if (this.state.isRunning) {
            const now = Date.now();
            
            this.setState(prevState => ({
                previousTime: now,
                elapsedTime: prevState.elapsedTime + (now -
                    this.state.previousTime)
            }));
        }
    }
    
    handleStopwatch = () => {
        this.setState(prevState => ({
            isRunning: !prevState.isRunning
        }));
        if (!this.state.isRunning) {
            this.setState({previousTime: Date.now()});
        }
    }

    handleReset = () => {
        this.setState(prevState => ({
            elapsedTime: 0
        }));
    }

    render() {

        const seconds = Math.floor(this.state.elapsedTime / 1000);
        return (
            <div className="stopwatch">
                <h2>Stopwatch</h2>
                <span className="stopwatch-time">{seconds}</span>
                <button onClick={this.handleStopwatch}>
                    {this.state.isRunning ? 'Stop' : this.state.elapsedTime > 0 ? 'Fortsätt' : 'Start'}
                </button>
                <button onClick={this.handleReset}>återställ</button>
            </div>
        );
    }
}

export default Stopwatch;
