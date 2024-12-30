"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Appbar from "./Appbar";

export default function AppbarClient() {
  const session = useSession();
  return (
    <div className="text-9xl">
      <Appbar onSignin={signIn} onSignout={signOut} user={session.data?.user} />
    </div>
  );
}
