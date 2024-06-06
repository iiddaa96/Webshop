import { auth } from "@/app/auth";

export default async function RenderUser() {
  const session = await auth();

  if (session)
    //Du är authenticated genom Github och lagrad i en kaka
    return (
      <div
        style={{
          marginLeft: "30px",
          marginTop: "25px",
          fontSize: "20px",
          fontWeight: "bold",
          fontFamily: "monospace",
          textDecoration: "underline",
        }}
      >
        <p>Kund: {session?.user?.name}</p>
      </div>
    );

  if (!session)
    return (
      <div>
        <p>Användare är inte inloggad</p>
      </div>
    );
}
