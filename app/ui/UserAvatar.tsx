import { Avatar, Box } from "@mui/material";
import { auth } from "../auth";

export default async function UserAvatar() {
  const session = await auth();

  if (!session || !session.user) {
    return <div>Du måste logga in</div>;
  }

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Avatar
        alt="Github Profile Picture"
        src={session?.user?.image || ""}
        sx={{ width: 40, height: 40, marginRight: "0.5rem" }}
      />
    </Box>
  );
}
