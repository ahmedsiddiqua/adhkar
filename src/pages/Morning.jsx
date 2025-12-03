import { useState, useEffect } from "react";
import TerminalLayout from "../components/TerminalLayout";
import AdhkarBox from "../components/AdhkarBox";
import data from "../data/morning.json"; // or evening.json

export default function Morning() {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState("");

  // Swipe detection
  let touchStartX = 0;

  const handleTouchStart = (e) => {
    touchStartX = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const diff = e.changedTouches[0].clientX - touchStartX;

    if (diff > 40) prev();   // swipe right
    if (diff < -40) next();  // swipe left
  };

  const next = () => {
    setAnimate("slide-left");
    setTimeout(() => {
      setIndex((i) => (i + 1) % data.length);
      setAnimate("");
    }, 200);
  };

  const prev = () => {
    setAnimate("slide-right");
    setTimeout(() => {
      setIndex((i) => (i - 1 + data.length) % data.length);
      setAnimate("");
    }, 200);
  };

  return (
    <TerminalLayout title="Morning Adhkar">
      <div 
        onTouchStart={handleTouchStart} 
        onTouchEnd={handleTouchEnd}
        style={{ width: "100%" }}
      >
        <AdhkarBox
          arabic={data[index].arabic}
          translation={data[index].translation}
          animate={animate}
        />
      </div>

      <div className="controls">
        <button onClick={prev}>⬅ Previous</button>
        <span>{index + 1} / {data.length}</span>
        <button onClick={next}>Next ➡</button>
      </div>

      <div className="footer">Made with ❤️ by Aster.</div>
    </TerminalLayout>
  );
}
