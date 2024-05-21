import { auth } from "@/app/auth";
import AdminHeader from "./AdminHeader";
import GuestHeader from "./GuestHeader";
import UserHeader from "./UserHeader";

export default async function Header() {
  const session = await auth();

  if (!session)
    return (
      <>
        <GuestHeader></GuestHeader>
      </>
    );
  if (session)
    return (
      <>
        <UserHeader></UserHeader>
      </>
    );
  else
    return (
      <>
        <AdminHeader />
      </>
    );
}
