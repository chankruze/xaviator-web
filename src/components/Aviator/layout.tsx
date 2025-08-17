import { Outlet } from "react-router";
import { Header } from "./Header";

export default function Layout() {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex-1 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
}
