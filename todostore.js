const framework = require('./framework');

module.exports = {
    onStateChange: framework.onStateChange,
    dispatch: framework.dispatch,
};

framework.setInitialState({
    items: [],
    highscores: [],
});

let items = (state, action) => {
    if (action.type == 'ADD_ITEM') {
        state.push({
            done: false,
            title: action.title
        });
    }
    else if (action.type == 'CHECK_ITEM') {
        let index = state.findIndex(o => o.title == action.title)
        state[index].done = true;
    }
    else if (action.type == 'DELETE_ITEM') {
        let index = state.findIndex(o => o.title == action.title)
        state.splice(index, 1);
    }

    return state;
}


let highscores = (state, action) => {
    // TODO: Logic
    return state;
}


framework.setActionHandler(framework.combineReducers({ items, highscores }));
