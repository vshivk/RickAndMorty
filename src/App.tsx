import React, { FC, useEffect } from 'react';
import 'normalize.css';
import './styled';
import { Route, Routes, useLocation } from "react-router";

import Layout from "./pages/layout/layout";
import Characters from "./pages/characters/characters";
import NotFound from "./pages/not-found/not-found";
import Character from "./pages/character-details/character";

function ScrollToTop() {
    const {pathname} = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

const App: FC = () => {
    return (
        <>
            <ScrollToTop/>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path='/' element={<Characters/>}/>
                    <Route path={'character/:id'} element={<Character/>}/>
                    <Route path={'/*'} element={<NotFound/>}/>
                </Route>
            </Routes>
        </>
    );
};

export default App;