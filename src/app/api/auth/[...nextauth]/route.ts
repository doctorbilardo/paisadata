import NextAuth, { NextAuthOptions } from "next-auth";
import GitHubProviders from "next-auth/providers/github";

export const authOptions: NextAuthOptions = {
  providers: [
    GitHubProviders({
      clientId: process.env.GITHUB_ID as string || "",
      clientSecret: process.env.GITHUB_SECRET as string || "",
    }),
  ],
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };


