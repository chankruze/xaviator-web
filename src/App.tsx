import { Route, Routes } from "react-router";
import AviatorIndex from "@/components/Aviator";

export default function App() {
  return (
    <Routes>
      <Route index element={<AviatorIndex />} />
    </Routes>
  );
}
