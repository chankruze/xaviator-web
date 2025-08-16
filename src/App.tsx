import { Navigate, Route, Routes } from "react-router";
import AviatorLayout from "@/components/Aviator/layout";
import AviatorIndex from "@/components/Aviator";

export default function App() {
  return (
    <Routes>
      <Route index element={<Navigate replace to="/aviator" />} />
      <Route element={<AviatorLayout />}>
        <Route path="aviator" element={<AviatorIndex />} />
      </Route>
    </Routes>
  );
}
