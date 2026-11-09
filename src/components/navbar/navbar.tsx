import  AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Navbar = () => {
  return (
    <Box component="nav" aria-label="Main navigation">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div">
              WillowWealth
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;