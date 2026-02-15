import { AppBar, Toolbar, Typography } from "@mui/material";

function Header() {
  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: "center" }}>
        <Typography variant="h6">
          YouTube Search App
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;