"use client"
import { Appbar } from "@repo/ui/appbar";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Page() {
  const session=useSession();
  return (
    <div className="p-10">
       {/* <Appbar onSignin={signIn} onSignout={signOut} user={session.data?.user}/> */}
    </div>
  );
}
