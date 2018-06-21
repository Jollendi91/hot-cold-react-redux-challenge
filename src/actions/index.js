export const MAKE_GUESS = 'MAKE_GUESS';
export const makeGuess = guess => ({
    type: MAKE_GUESS,
    guess
});

export const SET_AURAL_FEEDBACK = 'SET_AURAL_FEEDBACK';
export const setFeedback = () => ({
    type: SET_AURAL_FEEDBACK
});


export const RESTART_GAME = 'RESTART_GAME';
export const restartGame = () => ({
    type: RESTART_GAME
});