import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialProvider from "next-auth/providers/credentials";
import connectDB from "@/utils/db";
import User from "@/models/User";
import bcrytp from "bcryptjs";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_SECRET_KEY || "",
    }),
    CredentialProvider({
      id: "credentials",
      name: "Credentials",
      async authorize(credentials: { email: string; password: string }) {
        await connectDB();
        try {
          const user = await User.findOne({ email: credentials.email });
          if (user) {
            //check password
            const isPasswordCorrect = await bcrytp.compare(
              credentials.password,
              user.password
            );
            if (isPasswordCorrect) {
              return user;
            } else {
              throw new Error("email or password wrong");
            }
          } else {
            throw new Error("user not found");
          }
        } catch (error) {
          throw new Error(error);
        }
      },
      credentials: undefined,
    }),
  ],
  pages: {
    error: "/dashboard/login",
  },
});
export { handler as GET, handler as POST };
