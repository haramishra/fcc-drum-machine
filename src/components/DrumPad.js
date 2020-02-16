import React, { Component } from 'react';
import drumData from './drumData'

export default class DrumPad extends Component {
    constructor(props) {
        super(props);
        this.state = {
            drum: drumData
        }
        this.handleKeys = this.handleKeys.bind(this);
        this.playSound = this.playSound.bind(this);

    }

    handleKeys(e) { }
    playSound() { }

    render() {
        const drumPad = this.state.drum.map((item) => (
            <div
                id={item.keyTrigger}

            >
                {item.keyTrigger}
            </div>
        ));
        return (
            <div>
                <div id='drum-pad'>
                    {drumPad}
                </div>
            </div>
        )
    }
}
