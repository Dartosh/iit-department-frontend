import React, { Fragment } from 'react';

import './App.css';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

interface AppProps {
  children: any;
}

const App: React.FC<AppProps> = ( { children } ) => {
    return (
        <Fragment>
            <div className="wrapper">
                <Header />
                {children}
                <Footer />
            </div>
        </Fragment>
    );
}

export default App;
