import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { } from '../js/actions/index.js';

// const mapDispatchToProps = dispatch => {
//     return {
//     }
// };

const mapStateToProps = state => {
    return {
        startGame: state.lastEntry.startGame,
        value: state.lastEntry.value,
        number: state.lastEntry.number,
        player: state.lastEntry.player,
        action: state.lastEntry.action,
    }
}

class LastEntry extends Component {
    render() {
        return (
            <div className='last-entry-container'>
                <div className='last-entry-title center-text'>
                    <span>LAST ENTRY</span>
                </div>
                <div className={'last-entry-content ' + this.props.value}>
                    {
                        this.props.startGame ? (
                            <div className='center-text'>
                                <span></span>
                            </div>
                        ) : (
                            <div className='center-text'>
                                <span>{this.props.number + ' ' + this.props.player + ' ' + this.props.action}</span>
                            </div>
                        )
                    }
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, null) (LastEntry);