import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BaseMenu} from './components/BaseMenu'

import { createStore, applyMiddleware, compose} from 'redux'
import { Provider } from 'react-redux'
import reducer from './store/reducer'
import thunk from 'redux-thunk'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(

<Provider store = {store} >
  <BaseMenu>
    <App />
  </BaseMenu>

</Provider>, document.getElementById('root'));
registerServiceWorker();
