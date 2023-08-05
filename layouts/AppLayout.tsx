import Navbar from "components/Navbar/Navbar";
import React, { ReactNode } from "react";

interface AppLayoutProps {
  children: ReactNode;
}

function AppLayout({ children }: AppLayoutProps) {
  return (
    <div
      className="app-container"
      style={{ minHeight: "100vh" }}
    >
      <Navbar />
      {children}
    </div>
  );
}

export default AppLayout;
