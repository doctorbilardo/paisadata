import NextAuth from "next-auth";
import GitHubProviders from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GitHubProviders({
      clientId: process.env.GITHUB_ID as string || "",
      clientSecret: process.env.GITHUB_SECRET as string || "",
    }),
  ],
};

export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
