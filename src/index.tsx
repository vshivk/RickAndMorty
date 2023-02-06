import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import { FontsGlobal } from './styles/fonts';
import { GlobalStyle } from './styles/global';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <FontsGlobal/>
            <GlobalStyle/>
            <App/>
        </BrowserRouter>
    </React.StrictMode>
);

