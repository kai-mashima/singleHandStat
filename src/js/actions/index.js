import { 
    INCREASE_OUR_SCORE, 
    DECREASE_OUR_SCORE, 
    INCREASE_THEIR_SCORE, 
    DECREASE_THEIR_SCORE,
    TOGGLE_SCORE_MODAL,
    TOGGLE_SUB_MODAL,
    TOGGLE_STAT_MODAL,
    SUBSTITUTE_PLAYER,
} from '../constants/action-types.js';

export const increaseOurScore = () => {
    return {
        type: INCREASE_OUR_SCORE, 
        payload: null,
    }
};

export const decreaseOurScore = () => {
    return {
        type: DECREASE_OUR_SCORE, 
        payload: null,
    }
};

export const increaseTheirScore = () => {
    return {
        type: INCREASE_THEIR_SCORE, 
        payload: null,
    }
};

export const decreaseTheirScore = () => {
    return {
        type: DECREASE_THEIR_SCORE, 
        payload: null,
    }
};

export const toggleScoreModal = () => {
    return {
        type: TOGGLE_SCORE_MODAL, 
        payload: null,
    }
};

export const toggleSubModal = (player = null) => {
    return {
        type: TOGGLE_SUB_MODAL, 
        payload: player,
    }
};

export const toggleStatModal = (player = null) => {
    return {
        type: TOGGLE_STAT_MODAL, 
        payload: player,
    }
};

export const substitutePlayer = (players, substitutes) => {
    return {
        type: SUBSTITUTE_PLAYER, 
        payload: {players: players, substitutes: substitutes},
    }
};


























