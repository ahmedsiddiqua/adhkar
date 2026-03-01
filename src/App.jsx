import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Morning from "./pages/Morning";
import Evening from "./pages/Evening";
import Night from "./pages/Night";

function getDefaultPath() {
  const hour = new Date().getHours();

  if (hour >= 3 && hour < 15) return "/morning";
  if (hour >= 15 && hour < 20) return "/evening";
  return "/night";
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={getDefaultPath()} replace />} />
        <Route path="/morning" element={<Morning />} />
        <Route path="/evening" element={<Evening />} />
        <Route path="/night" element={<Night />} />
        <Route path="*" element={<Navigate to={getDefaultPath()} replace />} />
      </Routes>
    </BrowserRouter>
  );
}
