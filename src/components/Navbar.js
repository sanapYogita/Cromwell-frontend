import React from "react";
import { AppBar, Toolbar, Button } from "@mui/material";
import { Link } from "react-router-dom";


export default function Navbar() {
      return (
    <AppBar position="static" alt="Logo"  >
     <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          {/* Logo on the left */}
          <img
            src="https://careers.cromwell.co.uk/cromwellgroup/jobs/custom/cromwell_Rebrand/resources/images/CromwellLogo.svg"
            alt="Logo"
            style={{ height: '10vh', width: 'auto', maxWidth: '150px', marginRight: '10px' }}
          />
        </div>

        {/* Buttons on the right */}
        <div>
          <Button component={Link} to="/login" color="inherit" >
            Login
          </Button>
          <Button component={Link} to="/registration" color="inherit">
            Register
          </Button>       
        </div>
      </Toolbar>
    </AppBar>
  
  );
}
