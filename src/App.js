import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Morning from "./pages/Morning";
import Evening from "./pages/Evening";

export default function App() {
  const hour = new Date().getHours();

  // Evening = 3pm → 3am
  const isEvening = hour >= 15 || hour < 3;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/morning" element={<Morning />} />
        <Route path="/evening" element={<Evening />} />

        <Route
          path="/"
          element={<Navigate to={isEvening ? "/evening" : "/morning"} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
