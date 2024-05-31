import { Button, Link } from "@mui/material";
import { auth } from "../auth";

export default async function AdminButton() {
  const session = await auth();

  console.log(session?.user);

  if (session?.user.isAdmin) {
    return (
      <div>
        <Button
          component={Link}
          href="/admin"
          color="inherit"
          sx={{
            fontSize: "1rem",
            "@media (max-width: 600px)": {
              fontSize: "0.75rem",
            },
          }}
        >
          Admin
        </Button>
      </div>
    );
  }

  return null;
}
