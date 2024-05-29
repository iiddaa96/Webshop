import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import SignInWithGitHubButton from "../ui/auth/SigninWithGithubButton";

function Login() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1517016006573-2eefaa2f5b63?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Grid container spacing={2} sx={{ maxWidth: 400, width: "100%", p: 2 }}>
        <Grid item xs={12}>
          <Box sx={{ textAlign: "center", mb: 3 }}>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "25px", md: "3rem", lg: "5.6rem" },
                fontFamily: "Arial, sans-serif",
                color: "#f0ff8c",
                textShadow: "4px 4px 8px rgba(245, 162, 38, 0.9)",
                fontWeight: "bold",
              }}
            >
              LOGGA IN
            </Typography>
            <SignInWithGitHubButton />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Login;
