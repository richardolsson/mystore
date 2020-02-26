
var state;

var onStateChange;

var handleAction;

module.exports = {
    onStateChange: (func) => {
        onStateChange = func;
    },

    setActionHandler: (func) => {
        handleAction = func;
    },

    setInitialState: initialState => {
        state = initialState;
    },

    dispatch: (action) => {
        state = handleAction(state, action);
        onStateChange(state);
    },

    combineReducers: (reducers) => {
        return (state, action) => {
            let newState = {};
            Object.keys(reducers).forEach(key => {
                let reducer = reducers[key];
                newState[key] = reducer(state[key], action);
            });

            return newState;
        };
    },
}
