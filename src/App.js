import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Morning from "./pages/Morning";
import Evening from "./pages/Evening";
import Night from "./pages/Night";  

export default function App() {
  const hour = new Date().getHours();

  let period = "morning";

  if (hour >= 15 && hour < 20) {
    period = "evening";     // 3 PM → 7:59 PM
  } else if (hour >= 20 || hour < 3) {
    period = "night";       // 8 PM → 2:59 AM
  } else {
    period = "morning";     // 3 AM → 2:59 PM
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/morning" element={<Morning />} />
        <Route path="/evening" element={<Evening />} />
        <Route path="/night" element={<Night />} />

        <Route path="/" element={<Navigate to={`/${period}`} />} />
      </Routes>
    </BrowserRouter>
  );
}
