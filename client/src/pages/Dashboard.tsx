import { Container, Typography, Button } from "@mui/material";
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Dashboard = () => {
  const { isAuthenticated, getToken, logout } = useAuth();

  if (!isAuthenticated()) {
    return <Navigate to="/" />;
  }

  const token = getToken();
  return (
    <Container>
      <Typography variant="h4">Your Wrapped Stats</Typography>
      <Typography variant="h4">{token}</Typography>
      <Button onClick={logout}>Logout</Button>
    </Container>
  );
};

export default Dashboard;
