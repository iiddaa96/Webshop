import NextAuth, { Session } from "next-auth";
import { JWT } from "next-auth/jwt";
import github from "next-auth/providers/github";

interface ExtendedToken extends JWT {
  id?: string;
  picture?: string | null;
}

interface ExtendedSession extends Session {
  user: {
    id: string;
    image?: string | null;
    name?: string;
    email?: string;
  };
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  pages: {
    signIn: "/login",
  },
  providers: [github],

  callbacks: {
    async session({ session, token }: { session: Session; token: JWT }) {
      const extendedSession = session as ExtendedSession;
      if (token.sub) {
        extendedSession.user.id = token.sub;
      }

      if (token.picture) {
        extendedSession.user.image = token.picture;
      }
      return session;
    },
    async jwt({ token, user, account, profile }) {
      if (account?.provider === "github" && profile) {
        token.id = profile.id;
        token.picture = (profile as any).avatar_url;
      }
      return token;
    },
  },
});

// declare module "next-auth" {
//   interface Session {
//     user: {
//       isAdmin: boolean;
//     } & DefaultSession["user"];
//   }
// }
