import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import theme from "../style/theme";
import { loginUserService } from "../services/apiService";
import { Alert, ThemeProvider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../store/reducers/UserReducer";

export default function Login() {
  const [errors, setErrors] = useState({
    email: false,
  });
  const [errorsMsg, setErrorsMsg] = useState({
    email: "",
  });
  const dispatch = useDispatch();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isUnauthorized, setIsUnauthorized] = useState(false);
  // const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    // Setting a timeout to hide the alert after 3000 milliseconds (3 seconds)
    const timeoutId = setTimeout(() => {
      setIsLoggedIn(false);
    }, 3000);
    return () => clearTimeout(timeoutId);
  }, [isLoggedIn]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = new FormData(event.currentTarget);
      const email = data.get("email");
      const password = data.get("password");
      const loginData = { email, password };
      // const {email,password} = event.currentTarget;
      if (validateInput(email)) {
        try {
          const response = await loginUserService(loginData);
          if (response.status === 200) {
            const { user } = response.data.data;
            user.token = response.data.data.token;
            user.isAuthenticated = true;
            dispatch(setUser({ ...user }));
            setIsLoggedIn(true);
            navigate("/home");
          }
        } catch (err) {
          if (err.response.status === 401) setIsUnauthorized(true);
          else console.log(err);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };
  const validateInput = (email) => {
    let isValid = true;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      const errorMessage =
        "Enter a valid email address in the format test@test.com";
      setErrors({ email: true });
      setErrorsMsg({ email: errorMessage });
      isValid = false;
    }
    return isValid;
  };
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        {isLoggedIn && (
          <Alert severity="success" sx={{ m: 3 }}>
            Login Successful..!!
          </Alert>
        )}
        {isUnauthorized && (
          <Alert severity="error" sx={{ m: 3 }}>
            Unauthorized Access
          </Alert>
        )}
        <CssBaseline />
        <Box sx={theme.sharedStyles.formContainer}>
          <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Log In
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              type="email"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              helperText={errorsMsg.email}
              error={errors.email}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Log In
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
