import { useState } from "react";
import { AppBar, Toolbar, Box, Typography, TextField, Button, Avatar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, setSearchQuery, signOut, selectSearchQuery } from "../features/appSlice";
import { googleLogout } from "@react-oauth/google";

export default function Navbar() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const currentQuery = useSelector(selectSearchQuery);

  const [draft, setDraft] = useState(currentQuery);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const q = draft.trim();
    if (!q) return;
    dispatch(setSearchQuery(q));
  };

  const handleLogout = () => {
    googleLogout();
    dispatch(signOut());
  };

  return (
    <AppBar position="sticky" elevation={0} sx={{ bgcolor: "#000", color: "#fff" }}>
      <Toolbar sx={{ gap: 2 }}>
        <Typography sx={{ fontWeight: 800, whiteSpace: "nowrap" }}>My Blog App</Typography>

        <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", gap: 1, flex: 1 }}>
          <TextField
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder="Search topic..."
            size="small"
            sx={{
              flex: 1,
              bgcolor: "#fff",
              borderRadius: 1,
              "& .MuiInputBase-input": { color: "#000" },
            }}
          />
          <Button type="submit" variant="contained">
            Search
          </Button>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Typography sx={{ display: { xs: "none", sm: "block" } }}>
            {user?.name}
          </Typography>
          <Avatar
            src={user?.picture}
            alt={user?.name}
            sx={{ width: 36, height: 36, cursor: "pointer" }}
            onClick={handleLogout}
            title="Logout"
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
