import { useEffect, useRef } from "react";

export default function AdhkarBox({ arabic, translation, animate }) {
  const boxRef = useRef(null);

  // Reset scroll to top when content changes
  useEffect(() => {
    if (boxRef.current) boxRef.current.scrollTop = 0;
  }, [arabic]);

  return (
    <div className={`box ${animate}`} ref={boxRef}>
      <div className="arabic">{arabic}</div>
      <div className="translation">{translation}</div>
    </div>
  );
}
