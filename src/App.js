import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './globalStyle';

import Router from './Router';
import Navbar from './components/Navbar/Navbar';
import AppProvider from './context/Context';



const App = () => {
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <AppProvider>

                    <Navbar />

                    <div style={{ marginTop: "90px" }}><Router /></div>

                </AppProvider>
            </ThemeProvider>

        </BrowserRouter >
    );
}

export default App;
