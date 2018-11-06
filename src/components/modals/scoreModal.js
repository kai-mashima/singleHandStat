import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { connect } from 'react-redux';
import { 
    increaseOurScore,
    decreaseOurScore,
    increaseTheirScore,
    decreaseTheirScore,
    toggleScoreModal,
} from '../../js/actions/index.js';

const mapDispatchToProps = dispatch => {
    return { 
        increaseOurScore: () => dispatch(
            increaseOurScore()
        ),
        decreaseOurScore: () => dispatch(
            decreaseOurScore()
        ),
        increaseTheirScore: () => dispatch(
            increaseTheirScore()
        ),
        decreaseTheirScore: () => dispatch(
            decreaseTheirScore()
        ),
        toggleScoreModal: () => dispatch(
            toggleScoreModal()
        ),
    }
};

const mapStateToProps = state => {
    return {
        ourScore: state.ourScore,
        theirScore: state.theirScore,
        scoreModalShowing: state.scoreModalShowing,
    };
};

class ScoreModal extends Component {
    render() {
        return (
            <Modal isOpen={this.props.scoreModalShowing} toggle={this.props.toggleScoreModal}>
                <ModalHeader toggle={this.props.toggleScoreModal}>
                    Score Adjustment
                </ModalHeader>
                <ModalBody> 
                    <div className='score-container'>
                        <div className='score-item'>
                            <div className='score-who our-player center-text'>
                                <span>US</span>
                            </div>
                            <div className='score-number our-player center-text'>
                                <span>{this.props.ourScore}</span>
                            </div>
                            <div className='score-number our-player center-text'>
                                <span onClick={this.props.increaseOurScore}>+</span>
                            </div>
                            <div className='score-number our-player center-text'>
                                <span onClick={this.props.decreaseOurScore}>-</span>
                            </div>
                        </div>
                        <div className='score-item'> 
                            <div className='score-who their-player center-text'>
                                <span>THEM</span>
                            </div>
                            <div className='score-number their-player center-text'>
                                <span>{this.props.theirScore}</span>
                            </div>
                            <div className='score-number their-player center-text' onClick={this.props.increaseTheirScore}>
                                <span>+</span>
                            </div>
                            <div className='score-number their-player center-text' onClick={this.props.decreaseTheirScore}>
                                <span>-</span>
                            </div>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter> 
                    <Button color='danger' onClick={this.props.toggleScoreModal}>Close</Button>
                </ModalFooter>
            </Modal>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (ScoreModal);
