import { useEffect, useRef, useState } from "react";
import TerminalLayout from "./TerminalLayout";
import AdhkarBox from "./AdhkarBox";

export default function AdhkarPage({ title, data }) {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState("");
  const [touchStartX, setTouchStartX] = useState(null);
  const timeoutRef = useRef(null);

  const moveTo = (direction) => {
    if (data.length <= 1) return;

    const directionClass = direction === "next" ? "slide-left" : "slide-right";
    setAnimate(directionClass);

    timeoutRef.current = setTimeout(() => {
      if (direction === "next") {
        setIndex((i) => (i + 1) % data.length);
      } else {
        setIndex((i) => (i - 1 + data.length) % data.length);
      }
      setAnimate("");
    }, 180);
  };

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "ArrowRight" || event.key === "PageDown") {
        event.preventDefault();
        moveTo("next");
      }
      if (event.key === "ArrowLeft" || event.key === "PageUp") {
        event.preventDefault();
        moveTo("prev");
      }
      if (event.key === " " || event.key === "Enter") {
        event.preventDefault();
        moveTo("next");
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    setIndex(0);
    setAnimate("");
    setTouchStartX(null);
  }, [data]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleTouchStart = (event) => {
    setTouchStartX(event.changedTouches[0]?.clientX ?? null);
  };

  const handleTouchEnd = (event) => {
    if (touchStartX === null) return;
    const touchEndX = event.changedTouches[0]?.clientX;
    if (typeof touchEndX !== "number") return;

    const deltaX = touchEndX - touchStartX;
    const threshold = 36;

    if (deltaX > threshold) moveTo("prev");
    if (deltaX < -threshold) moveTo("next");

    setTouchStartX(null);
  };

  const progress = ((index + 1) / data.length) * 100;

  return (
    <TerminalLayout title={title}>
      <div className="progress-wrap" aria-hidden="true">
        <div className="progress-bar" style={{ width: `${progress}%` }} />
      </div>

      <AdhkarBox
        arabic={data[index].arabic}
        translation={data[index].translation}
        animate={animate}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      />

      <div className="controls">
        <button className="prev-btn" type="button" onClick={() => moveTo("prev")} aria-label="Previous dhikr">
          &lt; Previous
        </button>
        <span className="count" aria-live="polite">
          {index + 1} / {data.length}
        </span>
        <button className="next-btn" type="button" onClick={() => moveTo("next")} aria-label="Next dhikr">
          Next &gt;
        </button>
      </div>

      <p className="desktop-hint">Use left/right keys or swipe.</p>
      <p className="footer">Made by Aster</p>
    </TerminalLayout>
  );
}
