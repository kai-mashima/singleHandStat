import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
    toggleScoreModal,
} from '../js/actions/index.js';

const mapDispatchToProps = dispatch => {
    return { 
        toggleScoreModal: () => dispatch(
            toggleScoreModal()
        ),
    }
};

const mapStateToProps = state => {
    return {
        ourScore: state.ourScore,
        theirScore: state.theirScore,
    };
};

class Score extends Component {
    render() {
        return (
            <div className='score-container'>
                <div className='score-item'>
                    <div className='score-who our-player center-text'>
                        <span>US</span>
                    </div>
                    <div className='score-number our-player center-text' onClick={this.props.toggleScoreModal}>
                        <span>{this.props.ourScore}</span>
                    </div>
                    <div className='score-timeout center-text'>
                        <span>T.O.</span>
                    </div>
                </div>
                <div className='score-item'> 
                    <div className='score-who their-player center-text'>
                        <span>THEM</span>
                    </div>
                    <div className='score-number their-player center-text' onClick={this.props.toggleScoreModal}>
                        <span>{this.props.theirScore}</span>
                    </div>
                    <div className='score-timeout center-text'>
                        <span>T.O.</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Score);