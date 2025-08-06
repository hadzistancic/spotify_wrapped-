import { useEffect } from "react";
import { Button, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const { getToken } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    window.location.href = "http://localhost:3001/auth/login";
  };

  const token = getToken();

  useEffect(() => {
    if (token) {
      navigate("/dashboard");
    }
  }, [token]);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      flexDirection="column"
    >
      <Typography variant="h3">Welcome to SpotStat</Typography>
      <Typography variant="subtitle1" gutterBottom>
        View your top artists and tracks from Spotify
      </Typography>
      <Button variant="contained" color="primary" onClick={handleLogin}>
        Login with Spotify
      </Button>
    </Box>
  );
};

export default Login;
