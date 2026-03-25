import { useEffect, useRef, useState } from "react";
import TerminalLayout from "./TerminalLayout";
import AdhkarBox from "./AdhkarBox";

export default function AdhkarPage({ title, data }) {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState("");
  const timeoutRef = useRef(null);
  const frameRef = useRef(null);
  const isAnimatingRef = useRef(false);
  const boxRef = useRef(null);

  const moveTo = (direction) => {
    if (data.length <= 1 || isAnimatingRef.current) return;

    isAnimatingRef.current = true;
    const directionClass = direction === "next" ? "slide-out-left" : "slide-out-right";
    setAnimate(directionClass);

    timeoutRef.current = setTimeout(() => {
      if (direction === "next") {
        setIndex((i) => (i + 1) % data.length);
      } else {
        setIndex((i) => (i - 1 + data.length) % data.length);
      }

      setAnimate(direction === "next" ? "slide-in-right" : "slide-in-left");

      frameRef.current = requestAnimationFrame(() => {
        frameRef.current = requestAnimationFrame(() => {
          setAnimate("");
          isAnimatingRef.current = false;
        });
      });
    }, 110);
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
    isAnimatingRef.current = false;
  }, [data]);

  useEffect(() => {
    boxRef.current?.scrollTo({ top: 0, behavior: "auto" });
  }, [index]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const progress = ((index + 1) / data.length) * 100;

  return (
    <TerminalLayout title={title}>
      <div className="progress-wrap" aria-hidden="true">
        <div className="progress-bar" style={{ width: `${progress}%` }} />
      </div>

      <AdhkarBox
        ref={boxRef}
        arabic={data[index].arabic}
        translation={data[index].translation}
        animate={animate}
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

      <p className="desktop-hint">Use left/right keys.</p>
      <p className="footer">Made by Aster</p>
    </TerminalLayout>
  );
}
