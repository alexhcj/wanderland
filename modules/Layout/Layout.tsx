import React, { ReactNode } from "react";
import {Navbar} from "../Navbar/Navbar";
import {Footer} from "../Footer/Footer";
// TODO: add components aliases
// TODO: add svg aliases

type Props = {
    children: ReactNode;
};

export const Layout: React.FC<Props> = ({children}) => (
    <>
        <Navbar />
        <main className="layout">{children}</main>
        <Footer />
    </>
);
