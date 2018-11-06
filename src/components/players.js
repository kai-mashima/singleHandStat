import React, { Component } from 'react';
import Player from './player.js';
import Swipe from 'react-easy-swipe';
import { connect } from 'react-redux';
import {  
    toggleSubModal, 
    toggleStatModal,
} from '../js/actions/index.js';

const mapDispatchToProps = dispatch => {
    return {
        toggleSubModal: (player) => dispatch(
            toggleSubModal(player)
        ),
        toggleStatModal: (player) => dispatch(
            toggleStatModal(player)
        ),
    }
};

const mapStateToProps = state => {
    return {
        players: state.players,
    }
};

class Players extends Component {
    constructor(props) {
        super(props);
        this.highlightButton = this.highlightButton.bind(this);
    }

    highlightButton(e) {
        e.target.classList.toggle("player-container-wide-highlighted");
    }

    render() {
        let playersRender = Object.keys(this.props.players).map((player, index) => (
            <Swipe 
                allowMouseEvents={true}
                onClick={() => this.props.toggleStatModal(player)}
                key={index}
                onSwipeStart={(e) => this.highlightButton(e)}
                onSwipeEnd={(e) => this.highlightButton(e)}
                onSwipeLeft={() => this.props.toggleSubModal(player)}
            > 
                <Player 
                    name={this.props.players[player].name}
                    number={this.props.players[player].number}
                />
            </Swipe>
        ));

        return (
            <div className='players-container-wide'>
                {playersRender}
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Players);