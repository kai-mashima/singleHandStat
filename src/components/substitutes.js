import React, { Component } from 'react';
import Substitute from './substitute.js';
import { connect } from 'react-redux';
// import { } from '../js/actions/index.js';

// const mapDispatchToProps = dispatch => {

// };

const mapStateToProps = state => {
    return {
        substitutes: state.substitutes,
    }
};

class Substitutes extends Component {
    render() {
        let subsRender = Object.keys(this.props.substitutes).map((sub, index) => 
            <Substitute 
                sub={sub}
                key={index}
                name={this.props.substitutes[sub].name}
                number={this.props.substitutes[sub].number}
            />
        );
        
        return (
            <div className='players-container-wide'>
                {subsRender}
            </div>
        );
    }
}

export default connect(mapStateToProps, null) (Substitutes);