import React, { Component } from 'react';

class Button extends Component {
    render() {
        return (
            <div className={'button ' + this.props.class}>
                <div className='center-text'>
                    <span>{this.props.text}</span>
                    {
                        this.props.value !== null ? <div className='button-value'>{this.props.value}</div> : <span></span>
                    }
                </div>
            </div>
        );
    }
}

export default Button;