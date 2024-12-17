import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import { FontsGlobal } from './styles/fonts';
import { GlobalStyle } from './styles/global';
import {Provider} from "react-redux";
import {store} from "./core/store/store";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <FontsGlobal/>
            <GlobalStyle/>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);

