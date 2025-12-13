import { Outlet } from "react-router-dom";

export default function CleanLayout() {
  return (
    <div className="min-h-screen">
      <Outlet />
    </div>
  );
}
