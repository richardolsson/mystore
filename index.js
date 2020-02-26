const store = require('./todostore');

store.onStateChange(newState => {
    console.log('= State ======================');
    newState.items.forEach(item => {
        let check = item.done? 'x' : ' ';
        console.log('  [' + check + '] ' + item.title);
    });
});

store.dispatch({ type: 'ADD_ITEM', title: 'Buy food' });
store.dispatch({ type: 'ADD_ITEM', title: 'Clean house' });
store.dispatch({ type: 'DELETE_ITEM', title: 'Clean house' });
store.dispatch({ type: 'ADD_ITEM', title: 'Call mom' });
store.dispatch({ type: 'CHECK_ITEM', title: 'Buy food' });
