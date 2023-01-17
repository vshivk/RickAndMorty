import React, {FC} from 'react';
import Header from "../../components/header/header";
import {Outlet} from "react-router";
import './style.scss'

const Layout:FC = () => {
    return (
        <>
            <Header/>
            <div className={'container'}>
                <div className={'section'}>
                    <Outlet/>
                </div>
            </div>
        </>
    );
};

export default Layout;