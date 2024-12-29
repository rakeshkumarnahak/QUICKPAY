// import client from "@repo/db/client";
"use client";
import { signIn, signOut, useSession } from "next-auth/react";
// import { Appbar } from "@repo/ui/Appbar";
import Appbar from "./components/Appbar";
import Balance from "./components/Balance";
import AppSidebar from "./components/AppSidebar";

export default function Home() {
  const session = useSession();
  return (
    <div className="text-9xl">
      <Appbar onSignin={signIn} onSignout={signOut} user={session.data?.user} />

      {/* <Balance /> */}
    </div>
  );
}
