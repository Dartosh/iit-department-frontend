import React, { Fragment, useEffect } from 'react';

import './App.css';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { useAppDipatch } from './hooks/redux';
import { fetchGetProfile } from './redux/actions/userActions';
import authService from './services/auth';
import usersService from './services/users';

interface AppProps {
  children: any;
}

const App: React.FC<AppProps> = ( { children } ) => {
    const dispatch = useAppDipatch();

    useEffect(() => {
        const token = authService.getAuthToken();

        if (!token) {
            return;
        }

        const userId = authService.getUserIdFromToken(token);
        
        dispatch(fetchGetProfile(userId));
    }, []);

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
