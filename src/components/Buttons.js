import React, { Component } from 'react'

export default class Buttons extends Component {
    render() {
        return (
            <div
                id={this.props.Trigger}
                className='drum-pad'
                onClick={this.playSound}
            >
                {this.props.Trigger}
                <audio src={this.props.audio} className='clip' />
            </div>
        )
    }
}
