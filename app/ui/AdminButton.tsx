import { db } from "@/prisma/db";
import { Button, Link } from "@mui/material";
import { auth } from "../auth";

export default async function AdminButton() {
  const session = await auth();

  const loggedInUser = session?.user?.email as string | undefined;

  if (loggedInUser) {
    const foundUser = await db.user.findFirst({
      where: { email: loggedInUser },
    });

    if (foundUser && foundUser.isAdmin) {
      return (
        <div>
          <Button component={Link} href="/admin" color="inherit">
            Admin
          </Button>
        </div>
      );
    }
  }

  return null;
}
