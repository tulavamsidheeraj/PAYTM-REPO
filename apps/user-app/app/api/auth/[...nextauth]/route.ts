import NextAuth from "next-auth";
import { authOptions } from "../../../lib/auth";

const handler=NextAuth(authOptions)
// console.log("hellooo")
export {handler as GET, handler as POST}