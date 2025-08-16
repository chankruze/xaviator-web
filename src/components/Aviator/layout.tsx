import { Outlet } from "react-router";
import { Header } from "./header";

export default function Layout() {
  return (
    <div className="bg-neutral-950 text-white h-screen flex flex-col">
      <Header />
      <div className="flex-1 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
}
