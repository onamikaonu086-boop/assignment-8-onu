
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import React from 'react';

const MainLayout = ({ children }) => {
    return (
        <body>
            <Navbar />
            <main>{children}</main>
            <Footer></Footer>
        </body>
    );
};

export default MainLayout;