import React from "react";
import { Nav } from "@/app/components/Nav";

export function Layout({
  children,
  navSubPath,
}: React.PropsWithChildren<{ navSubPath?: string }>) {
  return (
    <>
      <Nav />

      <div id="root">{children}</div>
    </>
  );
}
