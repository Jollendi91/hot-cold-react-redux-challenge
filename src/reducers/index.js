import * as actions from '../actions';

const initialState = {
    guesses: [],
    feedback: 'Make your guess!',
    auralStatus: '',
    correctAnswer: Math.floor(Math.random() * 99) + 1 
};

export const gameReducer = (state=initialState, action) => {
    if (action.type === actions.MAKE_GUESS) {
        if (isNaN(action.guess)) {
            return Object.assign({}, state, {
                feedback: 'Please enter a valid number'
            });
        }

        const difference = Math.abs(action.guess - state.correctAnswer);
        
        let feedback;
        if (difference >= 50) {
          feedback = 'You\'re Ice Cold...';
        } else if (difference >= 30) {
          feedback = 'You\'re Cold...';
        } else if (difference >= 10) {
          feedback = 'You\'re Warm.';
        } else if (difference >= 1) {
          feedback = 'You\'re Hot!';
        } else {
          feedback = 'You got it!';
        }

        document.title = feedback ? `${feedback} | Hot or Cold` : 'Hot or Cold';

        return Object.assign({}, state, {
            guesses: [...state.guesses, action.guess],
            feedback
        });
    }
    else if (action.type === actions.RESTART_GAME) {
        return Object.assign({}, state, {
            guesses: [],
            feedback: 'Make your guess!',
            auralStatus: '',
            correctAnswer: Math.floor(Math.random() * 99) + 1 
        });
    }
    else if (action.type === actions.SET_AURAL_FEEDBACK) {

        const pluralize = state.guesses.length !== 1;

        let  auralStatus = `Here's the status of the game right now: ${state.feedback} You've made ${state.guesses.length} ${pluralize ? 'guesses' : 'guess'}.`;

        if (state.guesses.length > 0) {
        auralStatus += ` ${pluralize ? 'In order of most- to least-recent, they are' : 'It was'}: ${state.guesses.reverse().join(', ')}`;
        }
        return Object.assign({}, state, {
            auralStatus
        });
    }
    return state;
};