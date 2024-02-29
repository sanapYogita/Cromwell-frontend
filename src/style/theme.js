import { createTheme } from "@mui/material/styles";

// Customize the theme properties here
const theme = createTheme({
  palette: {
    primary: {
      // main: '#2196f3',
      main: "#1c355e",
    },
    secondary: {
      main: "#ff4081",
    },
  },
  sharedStyles: {
    formContainer: {
      marginTop: 8,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
      borderRadius: '8px',
      padding: '20px',
      backgroundColor: '#ffffff',
    },
    centeredContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      minHeight: '100vh',
      padding: '16px',
    },
    centerDiv: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh', // Adjust the height as needed
    },
    backgroundImage:{
      backgroundImage: `url('https://careers.cromwell.co.uk/cromwellgroup/jobs/custom/cromwell_rebrand/resources/images/cinemagraphs/drill.gif')`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
    }
  },
});

export default theme;
