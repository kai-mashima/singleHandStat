import React, { Component } from 'react';

class Player extends Component {
    render() {
        return (
            <div className='player-container-wide our-player'>
                <div className='center-text'>
                    <div className='player-info'>
                        <div>{this.props.number}</div>
                        <div>{this.props.name}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Player;