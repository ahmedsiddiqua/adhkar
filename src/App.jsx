import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Morning from "./pages/Morning";
import Evening from "./pages/Evening";
import Night from "./pages/Night";

function TimeRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    const hour = new Date().getHours();

    if (hour >= 3 && hour < 15) navigate("/", { replace: true });
    else if (hour >= 15 && hour < 20) navigate("/evening", { replace: true });
    else navigate("/night", { replace: true });
  }, [navigate]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <TimeRedirect />

      <Routes>
        <Route path="/" element={<Morning />} />
        <Route path="/evening" element={<Evening />} />
        <Route path="/night" element={<Night />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
