import { GoogleLogin } from "@react-oauth/google";
import { Box, Container, Paper, Typography, Stack } from "@mui/material";
import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";
import { signIn } from "../features/appSlice";
import type { GoogleUser } from "../types/auth";

export default function LandingPage() {
  const dispatch = useDispatch();

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default", py: 6 }}>
      <Container maxWidth="sm">
        <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
          <Stack spacing={2} alignItems="center" textAlign="center">
            <Typography variant="h3">📗</Typography>
            <Typography variant="h4" fontWeight={800}>
              Reader favourite place
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Sign in to search and read blogs.
            </Typography>

            <GoogleLogin
              onSuccess={(res) => {
                if (!res.credential) return;
                const user = jwtDecode<GoogleUser>(res.credential);
                dispatch(signIn(user));
              }}
              onError={() => console.log("Login Failed")}
            />
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}
