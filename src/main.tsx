import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createStore, applyMiddleware, compose } from "redux";
import reducers from './reducers/index.ts';
import { Provider } from 'react-redux';
import createSagaMiddleware from "redux-saga"
import rootSaga from './sagas/rootSaga.ts';

const sagaMiddleware = createSagaMiddleware()

const initialState = {};
export const composeEnhancers =
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(
  reducers,
  initialState,
  composeEnhancers(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(rootSaga)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
