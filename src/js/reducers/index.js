import { 
    INCREASE_OUR_SCORE, 
    DECREASE_OUR_SCORE, 
    INCREASE_THEIR_SCORE, 
    DECREASE_THEIR_SCORE,
    TOGGLE_SCORE_MODAL,
    TOGGLE_SUB_MODAL,
    TOGGLE_STAT_MODAL,
    SUBSTITUTE_PLAYER
} from '../constants/action-types.js';

const initialState = {
    ourScore: 0,
    theirScore: 0,
    scoreModalShowing: false,
    subModalShowing: false,
    statModalShowing: false,
    selectedSubPlayer: null,
    selectedStatPlayer: null,
    players: {
        player1: {
            name:'Haley',
            number:'14'
        },
        player2: {
            name:'Bella',
            number:'5'
        },
        player3: {
            name:'Amber',
            number:'17'
        },
        player4: {
            name:'Dani',
            number:'10'
        },
        player5: {
            name:'Bri',
            number:'1'
        },
        player6: {
            name:'Jenna',
            number:'6'
        },
    },
    substitutes: {
        substitute1: {
            name:'Emma',
            number:'9'
        },
        substitute2: {
            name:'Cassie',
            number:'15'
        },
        substitute3: {
            name:'Jackie',
            number:'20'
        },
        substitute4: {
            name:'Danielle',
            number:'8'
        },
    },
    pointLog: [
        {
            ourScore: 0,
            theirScore: 0,
            number: null,
            player: null,
            action: null,
            value: null,
            startGame: true,
        },
        {
            ourScore: 1,
            theirScore: 0,
            number: 1,
            player: 'Bri',
            action: 'kill',
            value: 'earned',
            startGame: false,
        },
    ],
    theirTimeouts: {
        timeout1: {used: false, ourScore: null, theirScore: null},
        timeout2: {used: false, ourScore: null, theirScore: null},
    },
    ourTimeouts: {
        timeout1: {used: false, ourScore: null, theirScore: null},
        timeout2: {used: false, ourScore: null, theirScore: null},
    },
    rotation: 0,
    subCount: 0,
    lastEntry: {
            ourScore: 1,
            theirScore: 0,
            number: 1,
            player: 'Bri',
            action: 'kill',
            value: 'earned',
            startGame: false,
    },
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case (INCREASE_OUR_SCORE): {
            return {...state, ourScore: state.ourScore + 1};
        }

        case (DECREASE_OUR_SCORE): {
            if (state.ourScore <= 0) {
                return state;
            } else {
                return {...state, ourScore: state.ourScore - 1};
            }
        }

        case (INCREASE_THEIR_SCORE): {
            return {...state, theirScore: state.theirScore + 1};
        }

        case (DECREASE_THEIR_SCORE): {
            if (state.theirScore <= 0) {
                return state;
            } else {
                return {...state, theirScore: state.theirScore - 1};
            }
        }

        case (TOGGLE_SCORE_MODAL): {
            return {...state, scoreModalShowing: !state.scoreModalShowing};
        }

        case (TOGGLE_SUB_MODAL): {
            return {...state, subModalShowing: !state.subModalShowing, selectedSubPlayer: action.payload};
        }

        case (TOGGLE_STAT_MODAL): {
            return {...state, statModalShowing: !state.statModalShowing, selectedStatPlayer: action.payload};
        }

        case (SUBSTITUTE_PLAYER): {
            return {...state, players: action.payload.players, substitutes: action.payload.substitutes};
        }

        default: {
            return state;
        }
    }
};

export default rootReducer;