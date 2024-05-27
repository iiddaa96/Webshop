import { auth } from "../auth";
import RenderUser from "../ui/RenderUser";

export default async function ProfilePage() {
  const session = await auth();
  return (
    <div>
      <RenderUser />
    </div>
  );
}
