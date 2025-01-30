import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { loginSchema } from "../schema";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import bcrypt from "bcryptjs";
import { getUserByEmail } from "../data/user";
export default {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOGGLE_CLIENT_SECRET,
    }),
    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    Credentials({
      name: "Credentials",
      async authorize(credentials) {
        const validatedfeilds = loginSchema.safeParse(credentials);

        if (!validatedfeilds.success) {
          return null;
        }

        const { email, password } = validatedfeilds.data;
        const user = await getUserByEmail(email);

        if (!user || !user.password) {
          return null;
        }

        const passwordmath = await bcrypt.compare(password, user.password);

        if (passwordmath) {
          return user;
        }

        return null; // Explicitly return null for failed password match
      },
    }),
  ],
} satisfies NextAuthConfig;
