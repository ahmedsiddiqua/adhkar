import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Morning from "./pages/Morning";
import Evening from "./pages/Evening";
import Night from "./pages/Night";

export default function App() {
  const hour = new Date().getHours();

  let redirect = "/";

  if (hour >= 3 && hour < 15) redirect = "/";
  else if (hour >= 15 && hour < 20) redirect = "/evening";
  else redirect = "/night";

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Morning />} />
        <Route path="/evening" element={<Evening />} />
        <Route path="/night" element={<Night />} />

        <Route path="*" element={<Navigate to={redirect} />} />
      </Routes>
    </BrowserRouter>
  );
}
