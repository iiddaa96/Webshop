import { auth } from "@/app/auth";
import AdminHeader from "./AdminHeader";
import GuestHeader from "./GuestHeader";
import UserHeader from "./UserHeader";

export default async function Header() {
  const session = await auth();

  const token = await getToken({
    req: { headers: { cookie: session.user.token } },
  });

  if (!session) {
    <>
      <GuestHeader></GuestHeader>
    </>;
  }
  if (session) {
    <>
      <UserHeader></UserHeader>
    </>;
  }

  return (
    <>
      <AdminHeader />
    </>
  );
}
