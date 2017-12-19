import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { initialState } from '../reducers';
import { AppConnected } from '../components/App';

const store = createStore((s) => s, initialState);

describe('AppConnected', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Provider store={store}><AppConnected /></Provider>, div);
  });
});
