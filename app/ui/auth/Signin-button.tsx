import { TextField } from "@mui/material";
import { signIn } from "../../auth";

export default function SignIn() {
  return (
    <main>
      <div className="form-group">
        <label
          style={{
            color: "white",
            fontFamily: "Times New Roman",
            fontWeight: "bold",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.9)",
            fontSize: "1.3rem",
          }}
          htmlFor="username"
        >
          Username
        </label>
        <TextField
          fullWidth
          id="username"
          variant="outlined"
          margin="normal"
          sx={{
            bgcolor: "white",
            border: "1px solid black",
            borderRadius: "10px",
          }}
        />
      </div>

      <div className="form-group">
        <label
          style={{
            fontFamily: "Times New Roman",
            fontWeight: "bold",
            fontSize: "1.3rem",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.9)",
            color: "white",
          }}
          htmlFor="password"
        >
          Password
        </label>

        <TextField
          fullWidth
          id="password"
          variant="outlined"
          margin="normal"
          type="password"
          sx={{
            bgcolor: "white",
            border: "1px solid black",
            borderRadius: "10px",
          }}
        />
      </div>
      <form
        action={async () => {
          "use server";
          await signIn();
        }}
      >
        <button type="submit">Sign in</button>
      </form>
    </main>
  );
}
