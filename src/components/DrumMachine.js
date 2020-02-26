import React, { Component } from 'react';
import data from './data';
import Buttons from './Buttons';

export default class Display extends Component {
    render() {
        const buttons = data.map((item) =>
            <Buttons
                key={item.keyTrigger}
                trigger={item.keyTrigger}
                audio={item.url}
                keyCode={item.keyCode}
                display={item.id}
            />
        )
        return (
            <div className='drum-pad'>
               {buttons}
            </div>
        )
    }
}
