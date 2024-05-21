import { db } from "@/prisma/db";
import { auth } from "../auth";

export default async function RenderUser() {
  const session = await auth();

  const users = await db.user.findMany({
    where: {
      isAdmin: true,
    },
  });
  return (
    <div>
      <p>{session.user.isAdmin}</p>
    </div>
  );
}
