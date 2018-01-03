
import ReactDOM from 'react-dom';
import React from 'react';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
/* import SearchBar from './containers/search_bar'; */
import ReduxPromise from 'redux-promise';
import App from './components/app';
import reducers from './reducers';



const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
    < App / >
     </Provider> ,document.querySelector('.container'));

