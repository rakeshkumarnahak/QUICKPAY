"use client";
import { RecoilRoot } from "recoil";
import { SessionProvider } from "next-auth/react";

const RecoilProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <RecoilRoot>
      <SessionProvider>{children}</SessionProvider>
    </RecoilRoot>
  );
};

export default RecoilProvider;
