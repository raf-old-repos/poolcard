import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials"

export default NextAuth({
    adapter: PrismaAdapter,
    providers: [
        CredentialsProvider({
            async authorize(credentials, req) {
                    // ! TODO finish up
            }
        })
    ],
    pages: {
        signIn: '/auth/signin',
        // ! TODO add rest
    }
})