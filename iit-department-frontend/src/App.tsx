import React, {Fragment} from 'react';
import './App.css';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

// @ts-ignore
const App = ( { children } ) => (
    <Fragment>
        <Header />
        {children}
        <Footer />
    </Fragment>
);

export default App;
