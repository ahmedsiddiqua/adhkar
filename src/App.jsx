import { useEffect, useState } from "react";
import AdhkarPage from "./components/AdhkarPage";
import morningData from "./data/morning.json";
import eveningData from "./data/evening.json";
import nightData from "./data/night.json";

function getTimeSection() {
  const hour = new Date().getHours();

  if (hour >= 3 && hour < 15) return "morning";
  if (hour >= 15 && hour < 20) return "evening";
  return "night";
}

function getCurrentContent(section) {
  if (section === "morning") {
    return { title: "Morning Adhkar", data: morningData };
  }

  if (section === "evening") {
    return { title: "Evening Adhkar", data: eveningData };
  }

  return { title: "Sleep Adhkar", data: nightData };
}

export default function App() {
  const [section, setSection] = useState(getTimeSection);

  useEffect(() => {
    const syncSection = () => {
      const nextSection = getTimeSection();
      setSection((prevSection) => (prevSection === nextSection ? prevSection : nextSection));
    };

    syncSection();
    const intervalId = setInterval(syncSection, 60 * 1000);
    return () => clearInterval(intervalId);
  }, []);

  const { title, data } = getCurrentContent(section);

  return (
    <AdhkarPage
      key={section}
      title={title}
      data={data}
    />
  );
}
