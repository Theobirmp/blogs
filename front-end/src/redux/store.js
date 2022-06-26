import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import blogReducer from './blogs/blogReducer'

const rootReducer=combineReducers({
    blogs:blogReducer
});

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))

export default store