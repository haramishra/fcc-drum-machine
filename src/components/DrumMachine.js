import React, { Component } from 'react';
import data from './data';
import Buttons from './Buttons';
import Display from './Display';

export default class DrumMachine extends Component {
    constructor(props){
        super(props);
        this.state = {
            display:''
        }
        this.handleDisplay = this.handleDisplay.bind(this);
    }
    handleDisplay(e){
        this.setState({display: e})
    }
    render() {
        const buttons = data.map((item) =>
            <Buttons
                key={item.keyTrigger}
                trigger={item.keyTrigger}
                audio={item.url}
                keyCode={item.keyCode}
                id={item.id}
                display={this.handleDisplay}
            />
        )
        return (
            <div className='drum-pad'>
                <Display id={this.state.display}/>
               {buttons}
            </div>
        )
    }
}
