import React, { Component } from 'react';


export default class Buttons extends Component {
    constructor(props) {
        super(props);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.playSound = this.playSound.bind(this);

    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyPress);
    }

    handleKeyPress(event) {
        if (event.keyCode === this.props.keyCode) {
            this.playSound();
        }
    };

    playSound() {
        const sound = document.getElementById(this.props.trigger);
        sound.play();
        this.props.display(this.props.id)
    }

    render() {
        return (
            <div>
                <div
                    id={this.props.id}
                    class='buttons'
                    onClick={this.playSound}
                >
                    <audio src={this.props.audio} className='clip' id={this.props.trigger} />
                    {this.props.trigger}
                </div>
            </div>
        )
    }
}
