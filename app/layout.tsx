'use client'
import Link from "@/node_modules/next/link";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <ul>
        <li><Link href={"/"}>Home</Link></li>
        <li><Link href="/dashboard">Dashboard</Link></li>
        <li><Link href={"/setting"}>Setting</Link></li>
      </ul>
      {children}
      FOOTER
    </div>
  );
}
