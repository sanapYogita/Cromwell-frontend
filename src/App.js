// App.js
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router} from "react-router-dom";
import theme from "./style/theme"
import Navbar from './components/Navbar';
import AppRouter from './routers/AppRouter';

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
      <CssBaseline />
       <Router>
       <div style={theme.sharedStyles.backgroundImage}> 
            <Navbar />
            <AppRouter />
          </div>
       </Router>
      </ThemeProvider>
    </>
  );
};

export default App;
