import React, {FC} from 'react';
import './styles/index.scss';
import './styled';
import {Route, Routes} from "react-router";
import Layout from "./pages/layout/layout";
import Characters from "./pages/characters/characters";
import Locations from "./pages/locations/locations";
import Episodes from "./pages/episodes/episodes";
import NotFound from "./pages/not-found/not-found";

const App:FC = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route path='/' element={<Characters/>}/>
                <Route path={'locations'} element={<Locations/>}/>
                <Route path={'episodes'} element={<Episodes/>}/>
                <Route path={'/*'} element={<NotFound/>}/>
            </Route>
        </Routes>
    );
};

export default App;