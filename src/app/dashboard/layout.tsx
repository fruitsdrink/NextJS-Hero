import React from "react";

interface Props {
  children: React.ReactNode;
  team: React.ReactNode;
  analytics: React.ReactNode;
}
export default function Layout({ children, team, analytics }: Props) {
  return (
    <main>
      <h2 className=" text-lg font-bold text-center my-4">
        Dashboard-并行路由
      </h2>

      <div className="grid grid-cols-2 gap-2 mb-4">
        {team}
        {analytics}
      </div>

      {children}
    </main>
  );
}
