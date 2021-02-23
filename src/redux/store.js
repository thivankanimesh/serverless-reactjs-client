import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';

import reduxThunk from 'redux-thunk';

const middlewares = [reduxThunk];
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));

export default store;