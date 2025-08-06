import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import useAuth from "../hooks/useAuth";
type Props = {
  user: any;
};

const Header = ({ user }: Props) => {
  const { logout } = useAuth();

  return (
    <AppBar position="static" color="default" elevation={1} sx={{ mb: 8 }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6">
          Hi {user?.display_name ? `${user.display_name}` : ""}
        </Typography>

        <Box>
          <Button variant="outlined" color="inherit" onClick={logout}>
            Logout
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
