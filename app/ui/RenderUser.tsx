import { auth } from "../auth";

export default async function RenderUser() {
  const session = await auth();

  if (session)
    //Du är authenticated genom Github och lagrad i en kaka
    return (
      <div>
        <p>{session?.user?.name}</p>
      </div>
    );

  if (!session)
    return (
      <div>
        <p>User is not logged in</p>
      </div>
    );
}
