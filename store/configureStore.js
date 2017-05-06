var redux = require('redux');
import thunk from 'redux-thunk';
import { workordersReducer } from '../reducers/workorder';


export var configure = () => {
  var reducer = redux.combineReducers({
      workorder: workordersReducer
  });

    var store = redux.createStore(reducer, redux.compose (
        redux.applyMiddleware(thunk), // With this, we can make an action to work as a function
        window.devToolsExtension ? window.devToolsExtension() : f => f

    ));

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextReducer = require('../reducers')
            store.replaceReducer(nextReducer)
        })
    }


    return store;
}

