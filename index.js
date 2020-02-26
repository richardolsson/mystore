const store = require('./todostore');

store.onStateChange(newState => {
    console.log('This is the state now:', newState);
});

store.dispatch({ type: 'ADD_ITEM', title: 'Buy food' });
store.dispatch({ type: 'ADD_ITEM', title: 'Clean house' });
store.dispatch({ type: 'DELETE_ITEM', title: 'Clean house' });
store.dispatch({ type: 'ADD_ITEM', title: 'Call mom' });
store.dispatch({ type: 'CHECK_ITEM', title: 'Buy food' });
