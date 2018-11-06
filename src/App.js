import React, { Component } from 'react';
// import logo from './logo.svg'; 
import './App.css';
import Info from './components/info.js';
import Players from './components/players.js';
import Adjustments from './components/adjustments.js';
import SubModal from './components/modals/subModal.js';
import ScoreModal from './components/modals/scoreModal.js';
import StatModal from './components/modals/statModal.js';

class App extends Component {
    render() {
        return (
            <div className="App container">
                <SubModal />
                <ScoreModal />
                <StatModal />
                <Info />
                <Players />
                <Adjustments />
            </div>
        );
    }
}

export default App;