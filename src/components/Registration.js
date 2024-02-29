import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ThemeProvider,
  CssBaseline,
  Container,
  Box,
  Avatar,
  Typography,
  TextField,
  Button,
  Alert,
} from "@mui/material";
import AppRegistrationOutlinedIcon from "@mui/icons-material/AppRegistrationOutlined";
import theme from "../style/theme";

import { registerUserService } from "../services/apiService";

const Registration = () => {
  const [userState, setUserState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [isRegistered, setIsRegistered] = useState(false);
  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
  });
  const [errorsMsg, setErrorsMsg] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    // Setting a timeout to hide the alert after 3000 milliseconds (3 seconds)
    const timeoutId = setTimeout(() => {
      setIsRegistered(false);
    }, 3000);
    return () => clearTimeout(timeoutId);
  }, [isRegistered]);

  const handleChange = ({ target: { name, value } }) => {
    setUserState({ ...userState, [name]: value });
  };

  const validateInputData = () => {
    let isValid = true;
    const nameRegex = /^[A-Za-z'-]{1,50}$/;
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Validate first name
    if (!nameRegex.test(userState.firstName)) {
      const errorMessage =
        "Enter a valid name (only letters, ', -), max 50 characters";
      setErrors({ ...errors, firstName: true });
      setErrorsMsg({ ...errorsMsg, firstName: errorMessage });
      isValid = false;
    }

    // Validate last name
    if (!nameRegex.test(userState.lastName)) {
      const errorMessage =
        "Enter a valid name (only letters, ', -), max 50 characters";
      setErrors({ ...errors, lastName: true });
      setErrorsMsg({ ...errorsMsg, lastName: errorMessage });
      isValid = false;
    }

    // Validate email
    if (!emailRegex.test(userState.email)) {
      const errorMessage =
        "Enter a valid email address in the format test@test.com";
      setErrors({ ...errors, email: true });
      setErrorsMsg({ ...errorsMsg, email: errorMessage });
      isValid = false;
    }

    // Validate password
    if (!passwordRegex.test(userState.password)) {
      const errorMessage =
        "Password must be 8 characters long with at least one letter, one digit, and one special character";
      setErrors({ ...errors, password: true });
      setErrorsMsg({ ...errorsMsg, password: errorMessage });
      isValid = false;
    }
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (validateInputData()) {
        const { firstName, lastName, email, password } = userState;
        const newUser = { firstName, lastName, email, password };
        const response = await registerUserService(newUser);
        const { field, message } = response.data;
        if (response.status === 201) {
          setIsRegistered(true);
        }
        if (response.status === 200) {
          setErrors({ ...errors, [field]: true });
          setErrorsMsg({ ...errorsMsg, [field]: [message] });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component="main" maxWidth="xs">
        {isRegistered && (
          <Alert severity="success" sx={{ m: 3 }}>
            User Registered Successfully..!! To login click on Login
          </Alert>
        )}
        <Box sx={theme.sharedStyles.formContainer}>
          <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
            <AppRegistrationOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <form onSubmit={handleSubmit} action={<Link to="/login" />}>
            <TextField
              variant="outlined"
              color="secondary"
              label="First Name"
              name="firstName"
              value={userState.firstName}
              onChange={handleChange}
              fullWidth
              required
              helperText={errorsMsg.firstName}
              error={errors.firstName}
              sx={{ mb: 4 }}
            />
            <TextField
              variant="outlined"
              color="secondary"
              label="Last Name"
              name="lastName"
              value={userState.lastName}
              onChange={handleChange}
              fullWidth
              required
              helperText={errorsMsg.lastName}
              error={errors.lastName}
              sx={{ mb: 4 }}
            />
            <TextField
              type="email"
              variant="outlined"
              color="secondary"
              label="Email"
              name="email"
              value={userState.email}
              onChange={handleChange}
              fullWidth
              required
              helperText={errorsMsg.email}
              error={errors.email}
              sx={{ mb: 4 }}
            />
            <TextField
              type="password"
              variant="outlined"
              color="secondary"
              label="Password"
              name="password"
              value={userState.password}
              onChange={handleChange}
              required
              helperText={errorsMsg.password}
              error={errors.password}
              fullWidth
              sx={{ mb: 4 }}
            />
            <Button variant="contained" color="primary" type="submit" fullWidth>
              Register
            </Button>
          </form>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Registration;
