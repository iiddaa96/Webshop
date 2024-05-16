import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

function Login() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",

        backgroundSize: "cover",
      }}
    >
      <Grid container spacing={2} sx={{ maxWidth: 400, width: "100%", p: 2 }}>
        <Grid item xs={12}>
          <Box sx={{ textAlign: "center", mb: 3 }}>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "25px", md: "3rem", lg: "2.6rem" },
                fontFamily: "Caveat",
              }}
            >
              Log In
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12}>
          <form className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <TextField
                fullWidth
                id="username"
                variant="outlined"
                margin="normal"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>

              <TextField
                fullWidth
                id="password"
                variant="outlined"
                margin="normal"
                type="password"
              />
            </div>
            <Button
              fullWidth
              type="submit"
              variant="contained"
              sx={{
                mt: 2,
                bgcolor: "#020202",
                "&:hover": { bgcolor: "#38403a" },
              }}
            >
              Log In
            </Button>
          </form>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Login;
