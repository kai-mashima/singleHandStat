import React, { Component } from 'react';
import Button from './button.js';
import Score from './score.js';
import LastEntry from './lastEntry.js';
import { connect } from 'react-redux';
// import { } from '../js/actions/index.js';

// const mapDispatchToProps = dispatch => {
//     return {
//     }
// };

const mapStateToProps = state => {
    return {
        rotation: state.rotation,
        subCount: state.subCount
    }
};

class Info extends Component {
    render() {
        return (
            <div className='info-container'>
                <div className='info-container-item'>
                    <Button text=''/>
                    <Button value={this.props.rotation} text='ROTATION'/>
                </div>
                <div className='info-container-middle'>
                    <Score />
                    <LastEntry />
                </div>
                <div className='info-container-item'>
                    <Button text='MENU'/>
                    <Button value={this.props.subCount} text='SUBS'/>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, null) (Info);