import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    substitutePlayer,
    toggleSubModal,
} from '../js/actions/index.js';

const mapDispatchToProps = dispatch => {
    return {
        substitutePlayer: (players, substitutes) => dispatch(
            substitutePlayer(players, substitutes)
        ),
        toggleSubModal: () => dispatch(
            toggleSubModal()
        ),
    }
};

const mapStateToProps = state => {
    return {
        players: state.players,
        substitutes: state.substitutes,
        selectedSubPlayer: state.selectedSubPlayer,
    }
};

class Substitute extends Component {
    constructor(props) {
        super(props);
        this.highlightButton = this.highlightButton.bind(this);
        this.handleSub = this.handleSub.bind(this);
    }

    highlightButton(e) {
        e.target.classList.toggle("player-container-wide-highlighted");
    }

    handleSub() {
        let players = JSON.parse(JSON.stringify(this.props.players));
        let substitutes = JSON.parse(JSON.stringify(this.props.substitutes));

        let temp = players[this.props.selectedSubPlayer];
        players[this.props.selectedSubPlayer] = substitutes[this.props.sub];
        substitutes[this.props.sub] = temp;

        this.props.substitutePlayer(players, substitutes);

        this.props.toggleSubModal();
    }

    render() {
        return (
            <div className='player-container-wide our-player' onClick={(e) => {this.highlightButton(e); setTimeout(this.props.handleSub, 250);}}>
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

export default connect(mapStateToProps, mapDispatchToProps) (Substitute);