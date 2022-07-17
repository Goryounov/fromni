import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import store from './store/store';

export const Context = createContext({
    store
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Context.Provider value={{store}}>
            <App/>
        </Context.Provider>
    </React.StrictMode>
);
