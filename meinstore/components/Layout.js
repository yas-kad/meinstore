import Head from 'next/head'
import Navbar from "./Navbar";

const Layout = ({children}) => {
    return (
        <div className="container mx-auto">
            <Head>
                <title>MeinStore</title>
            </Head>
            <Navbar />
            {children}
        </div>
    );
};

export default Layout;