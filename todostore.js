

var state = {
    items: [],
};

var onStateChange;

module.exports = {
    dispatch: (action) => {
        if (action.type == 'ADD_ITEM') {
            state.items.push({
                done: false,
                title: action.title
            });
        }
        else if (action.type == 'CHECK_ITEM') {
            let index = state.items.findIndex(o => o.title == action.title)
            state.items[index].done = true;
        }
        else if (action.type == 'DELETE_ITEM') {
            let index = state.items.findIndex(o => o.title == action.title)
            state.items.splice(index, 1);
        }

        onStateChange(state);
    },

    onStateChange: (func) => {
        onStateChange = func;
    },
}
