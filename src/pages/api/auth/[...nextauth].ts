import { PrismaAdapter } from "@/lib/auth/prismaAdapter";
import { NextApiRequest, NextApiResponse } from "next";
import NextAuth, { NextAuthOptions } from 'next-auth'

export function buildNextAuthOptions(
  req: NextApiRequest,
  res: NextApiResponse
): NextAuthOptions {
  return {
    adapter: PrismaAdapter(req, res),

    providers: []
  }
}
export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  return NextAuth(req, res, buildNextAuthOptions(req, res));
}