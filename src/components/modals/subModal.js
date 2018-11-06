import React, { Component } from 'react';
import Substitues from '../substitutes.js';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { connect } from 'react-redux';
import {
    toggleSubModal
} from '../../js/actions/index.js';

const mapDispatchToProps = dispatch => {
    return {
        toggleSubModal: () => dispatch(
            toggleSubModal()
        ),
    }
};

const mapStateToProps = state => {
    return {
        subModalShowing: state.subModalShowing,
    }
};

class SubModal extends Component {
    render() {
        return (
            <Modal isOpen={this.props.subModalShowing} toggle={this.props.toggle}>
                <ModalHeader toggle={this.props.toggle}>
                    Player Substitutions
                </ModalHeader>
                <ModalBody> 
                    <Substitues />
                </ModalBody>
                <ModalFooter> 
                    <Button color='danger' onClick={this.props.toggle}>Close</Button>
                </ModalFooter>
            </Modal>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (SubModal);