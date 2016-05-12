import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import store from './store/configureStore';

function main() {
  const app = document.createElement('div');

  document.body.appendChild(app);

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    app);
}

main();
