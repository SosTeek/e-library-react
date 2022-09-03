import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from '@redux-saga/core';

import reducers from './reducers';
import sagas from './saga';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;;

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

function configureReduxStore(initialState) {
    const store = createStore(
        reducers,
        initialState,
        composeEnhancers(applyMiddleware(...middlewares))
    );
    sagaMiddleware.run(sagas);

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
} 

const store = configureReduxStore();

export default store;
