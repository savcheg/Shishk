import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import UserStore from './store/UserStore'
import './assets/styles/global.css';
import Home from "./pages/Home/Home";
import AppRouter from "./router/AppRouter";

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider value={{
        userStore: new UserStore
    }}>
        <AppRouter/>
    </Context.Provider>
);