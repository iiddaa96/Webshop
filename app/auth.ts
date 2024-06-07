import NextAuth from "next-auth";
import github from "next-auth/providers/github";

/* interface ExtendedToken extends JWT {
  id?: string;
  picture?: string;
}

interface ExtendedSession extends Session {
  user: {
    id: string;
    image?: string;
    name?: string;
    email?: string;
  };
} */

export const { handlers, signIn, signOut, auth } = NextAuth({
  pages: {
    signIn: "/login",
  },
  providers: [github],
  trustHost: true,

  /* callbacks: {
    async session({ session, token }: { session: Session; token: JWT }) {
      const extendedSession = session as ExtendedSession;

      if (token.sub) {
        extendedSession.user.id = token.sub;
      }

      if (token.picture) {
        extendedSession.user.image = token.picture;
      }

      return extendedSession;
    },

    async jwt({
      token,
      user,
      account,
      profile,
    }: {
      token: JWT;
      user?: any;
      account?: any;
      profile?: any;
    }) {
      const extendedToken = token as ExtendedToken;

      if (account?.provider === "github" && profile) {
        extendedToken.id = profile.id as string;
        extendedToken.picture = (profile as any).avatar_url as string;
      }
      return extendedToken;
    },
  }, */
});

// declare module "next-auth" {
//   interface Session {
//     user: {
//       isAdmin: boolean;
//     } & DefaultSession["user"];
//   }
// }
