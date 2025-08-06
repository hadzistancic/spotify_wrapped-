import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { IconButton } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import useAuth from "../hooks/useAuth";

type Props = {
  user: any;
  toggleTheme: () => void;
  mode: "light" | "dark";
};

const Header = ({ user, toggleTheme, mode }: Props) => {
  const { logout } = useAuth();

  return (
    <AppBar position="static" color="default" elevation={1} sx={{ mb: 8 }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6">
          Hi {user?.display_name ? `${user.display_name}` : ""}
        </Typography>

        <Box>
          <IconButton onClick={toggleTheme} color="inherit" sx={{ mr: 3 }}>
            {mode === "dark" ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          <Button variant="outlined" color="inherit" onClick={logout}>
            Logout
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
