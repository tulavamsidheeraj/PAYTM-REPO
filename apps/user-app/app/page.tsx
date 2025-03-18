"use client"
import { Appbar } from "@repo/ui/appbar";
import { signIn, signOut, useSession } from "next-auth/react";
import {useRouter} from "next/navigation";
export default function Page() {
  const session=useSession();
  const router=useRouter();
    return (
    <div className="p-10">
        <button  className="border rounded p-2 bg-slate-300 hover:bg-slate-500" onClick={()=>{
          router.push("/transfer")
        }}>dashboard</button>
    </div>
  );
}
