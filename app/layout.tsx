import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      HOME
      {children}
      FOOTER
    </div>
  );
}
