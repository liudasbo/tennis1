import React from "react";

export default function Footer() {
  return (
    <footer className="container mx-auto my-8 flex rounded-3xl">
      <div className="mx-auto flex flex-col items-center gap-4">
        <a href="/" className="text-2xl font-bold">
          Tennis1
        </a>
        <a href="/rights" className="text-slate-400 text-sm font-thin">
          ©2024 - Tennis1 | Visos teisės saugomos
        </a>
      </div>
    </footer>
  );
}
