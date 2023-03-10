import React, {FC} from 'react';
import 'normalize.css';
import './styled';
import {Route, Routes} from "react-router";
import Layout from "./pages/layout/layout";
import Characters from "./pages/characters/characters";
import Locations from "./pages/locations/locations";
import Episodes from "./pages/episodes/episodes";
import NotFound from "./pages/not-found/not-found";
import Character from "./pages/character-details/character";

const App: FC = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route path='/' element={<Characters/>}/>
                <Route path={'character/:id'} element={<Character/>}/>
                <Route path={'locations'} element={<Locations/>}/>
                <Route path={'episodes'} element={<Episodes/>}/>
                <Route path={'/*'} element={<NotFound/>}/>
            </Route>
        </Routes>
    );
};

export default App;