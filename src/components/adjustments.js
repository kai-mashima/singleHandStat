import React, { Component } from 'react';
import ButtonComponent from './button.js';
import { connect } from 'react-redux';

// const mapDispatchToProps = dispatch => {
//     return { 
//         FUNCNAME: ITEM => 
//             dispatch(FUNCNAME(ITEM))
//     }
// };

// const mapStateToProps = state => {
//     return {
//     };
// };

class Adjustment extends Component {
    render() {
        return (
            <div className='adjustments-container'>
                <div className='adjustments-container-item'>
                    <div className='half-button-container'>
                        <ButtonComponent classs='half-button' text='SERVER'/>
                        <ButtonComponent class='half-button' text='LINEUP'/>
                    </div>
                    <ButtonComponent class='adjustment' text='UNDO'/>
                    <div className='half-button-container'>
                        <ButtonComponent class='half-button adjustment' text='REPLAY'/>
                        <ButtonComponent class='half-button adjustment' text='ADJUST'/>
                    </div>  
                </div>

                <div className='adjustments-container-item'>
                    <ButtonComponent class='libero' text='LIBERO'/>
                    <ButtonComponent class='their-player' text='THEIR PLAYER'/>
                    <ButtonComponent text='STATS'/>
                </div>
            </div>
        );
    }
}

export default connect(null, null) (Adjustment);