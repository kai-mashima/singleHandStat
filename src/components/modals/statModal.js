import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Collapse, CardBody, Card} from 'reactstrap';
import Player from '../player.js';
import { connect } from 'react-redux';
import {
    toggleStatModal,
} from '../../js/actions/index.js';

const mapDispatchToProps = dispatch => {
    return { 
        toggleStatModal: () => dispatch(
            toggleStatModal()
        ),
    }
};

const mapStateToProps = state => {
    return {
        statModalShowing: state.statModalShowing,
        players: state.players,
        selectedStatPlayer: state.selectedStatPlayer,
    };
};


class StatModal extends Component {
    constructor(props) {
        super(props);

        this.toggleInRally = this.toggleInRally.bind(this);
        this.toggleEarned = this.toggleEarned.bind(this);
        this.toggleError = this.toggleError.bind(this);
        this.toggleFault = this.toggleFault.bind(this);
        this.closeAll = this.closeAll.bind(this);

        this.state = {
            inRallyCollapseShowing: false,
            earnedCollapseShowing: false,
            errorCollapseShowing: false,
            faultCollapseShowing: false,
        };
    }

    toggleInRally() {
        this.setState({
            inRallyCollapseShowing: !this.state.inRallyCollapseShowing,
            earnedCollapseShowing: false,
            errorCollapseShowing: false,
            faultCollapseShowing: false,
        });
    }

    toggleEarned() {
        this.setState({
            earnedCollapseShowing: !this.state.earnedCollapseShowing,
            inRallyCollapseShowing: false,
            errorCollapseShowing: false,
            faultCollapseShowing: false,
        });
    }

    toggleError() {
        this.setState({
            errorCollapseShowing: !this.state.errorCollapseShowing,
            inRallyCollapseShowing: false,
            earnedCollapseShowing: false,
            faultCollapseShowing: false,
        });
    }

    toggleFault() {
        this.setState({
            faultCollapseShowing: !this.state.faultCollapseShowing,
            inRallyCollapseShowing: false,
            earnedCollapseShowing: false,
            errorCollapseShowing: false,
        });
    }

    closeAll() {
        this.setState({
            inRallyCollapseShowing: false,
            earnedCollapseShowing: false,
            errorCollapseShowing: false,
            faultCollapseShowing: false,
        });
    }

    render() {
        return (
            <Modal isOpen={this.props.statModalShowing} toggle={this.props.toggleStatModal}>
                <ModalHeader toggle={this.props.toggleStatModal}>
                    <div  className='players-container-wide'>
                        {this.props.statModalShowing ? <Player name={this.props.players[this.props.selectedStatPlayer].name} number={this.props.players[this.props.selectedStatPlayer].number} /> : <div></div>}
                    </div>
                </ModalHeader>
                <ModalBody> 
                    <div className='stat-button-container'>
                        <Button onClick={this.toggleInRally} color='secondary' className='stat-button' id='stat-button-override'>In-Rally</Button>
                            <Collapse isOpen={this.state.inRallyCollapseShowing}>   
                                <Card>
                                    <CardBody>
                                        <div className='stat-button-container'>
                                            <Button color='secondary' className='stat-button' id='stat-button-override'>block in play</Button>
                                            <Button color='secondary' className='stat-button' id='stat-button-override'>hit in play</Button>
                                            <Button color='secondary' className='stat-button' id='stat-button-override'>dig</Button>
                                            <Button color='secondary' className='stat-button' id='stat-button-override'>over pass</Button>
                                            <Button color='secondary' className='stat-button' id='stat-button-override'>block in play</Button>
                                            <Button color='secondary' className='stat-button' id='stat-button-override'>1-free ball pass</Button>
                                            <Button color='secondary' className='stat-button' id='stat-button-override'>2-free ball pass</Button>
                                            <Button color='secondary' className='stat-button' id='stat-button-override'>3-free ball pass</Button>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Collapse>
                        <Button onClick={this.toggleEarned} color='success' className='stat-button' id='stat-button-override'>Earned</Button>
                            <Collapse isOpen={this.state.earnedCollapseShowing}>   
                                <Card>
                                    <CardBody>
                                        <div className='stat-button-container'>
                                            <Button color='success' className='stat-button' id='stat-button-override'>spike</Button>
                                            <Button color='success' className='stat-button' id='stat-button-override'>tip</Button>
                                            <Button color='success' className='stat-button' id='stat-button-override'>dump</Button>
                                            <Button color='success' className='stat-button' id='stat-button-override'>block</Button>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Collapse>
                        <Button onClick={this.toggleError} color='warning'className='stat-button' id='stat-button-override'>Error</Button>
                            <Collapse isOpen={this.state.errorCollapseShowing}>   
                                <Card>
                                    <CardBody>
                                        <div className='stat-button-container'>
                                            <Button color='warning' className='stat-button' id='stat-button-override'>spike</Button>
                                            <Button color='warning' className='stat-button' id='stat-button-override'>tip</Button>
                                            <Button color='warning' className='stat-button' id='stat-button-override'>dump</Button>
                                            <Button color='warning' className='stat-button' id='stat-button-override'>block</Button>
                                            <Button color='warning' className='stat-button' id='stat-button-override'>dig</Button>
                                            <Button color='warning' className='stat-button' id='stat-button-override'>whose ball?</Button>
                                            <Button color='warning' className='stat-button' id='stat-button-override'>set</Button>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Collapse>
                        <Button onClick={this.toggleFault} color='danger' className='stat-button' id='stat-button-override'>Fault</Button>
                            <Collapse isOpen={this.state.faultCollapseShowing}>   
                                <Card>
                                    <CardBody>
                                        <div className='stat-button-container'>
                                            <Button color='danger' className='stat-button' id='stat-button-override'>ball handling</Button>
                                            <Button color='danger' className='stat-button' id='stat-button-override'>net</Button>
                                            <Button color='danger' className='stat-button' id='stat-button-override'>under</Button>
                                            <Button color='danger' className='stat-button' id='stat-button-override'>over</Button>
                                            <Button color='danger' className='stat-button' id='stat-button-override'>foot fault</Button>
                                            <Button color='danger' className='stat-button' id='stat-button-override'>out of rotation</Button>
                                            <Button color='danger' className='stat-button' id='stat-button-override'>back row attack</Button>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Collapse>
                    </div>
                </ModalBody>
                <ModalFooter> 
                    <Button color='danger' onClick={() => {this.props.toggle(); this.closeAll();}}>Close</Button>
                </ModalFooter>
            </Modal>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (StatModal);
