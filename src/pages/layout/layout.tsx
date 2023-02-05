import React, {FC} from 'react';
import Header from "../../components/header/header";
import {Outlet} from "react-router";
import {Container, Section} from "../../styled";

const Layout: FC = () => {
    return (
        <>
            <Header/>
            <Container>
                <Section>
                    <Outlet/>
                </Section>
            </Container>
        </>
    );
};

export default Layout;