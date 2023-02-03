import React, {FC} from 'react';
import Header from "../../components/header/header";
import {Outlet} from "react-router";
import './style.scss'

const Layout:FC = () => {
    return (
        <>
            <Header/>
            <main className={'container'}>
                <section className={'section'}>
                    <Outlet/>
                </section>
            </main>
        </>
    );
};

export default Layout;