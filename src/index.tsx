import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { initStore } from './reducers';
import { Provider } from 'react-redux';
import { AppConnected } from './components/App';
import './index.css';

const store = initStore();

ReactDOM.render(
  <Provider store={store}>
    <AppConnected />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
