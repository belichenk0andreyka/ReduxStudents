import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import rootReducer from "./store/rootReducer";

import App from "./components/App";

ReactDOM.render(<Provider store={rootReducer}>
    <App />
</Provider>, document.getElementById("root"));