import NextAuth, { DefaultSession } from "next-auth";
import github from "next-auth/providers/github";

export const { handlers, signIn, signOut, auth } = NextAuth({
  pages: {
    signIn: "/login",
  },
  providers: [github],
});

declare module "next-auth" {
  interface Session {
    user: {
      isAdmin: boolean;
    } & DefaultSession["user"];
  }
}
