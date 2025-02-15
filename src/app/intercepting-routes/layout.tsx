import React from "react";

interface Props {
  children: React.ReactNode;
  modal: React.ReactNode;
}
export default function Layout({ children, modal }: Props) {
  return (
    <main>
      {children}
      {modal}
    </main>
  );
}
