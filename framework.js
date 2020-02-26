
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
        handleAction(state, action);
        onStateChange(state);
    },
}
