import { forwardRef } from "react";

const AdhkarBox = forwardRef(function AdhkarBox({ arabic, translation, animate }, ref) {
  return (
    <div ref={ref} className={`box ${animate}`} tabIndex={-1}>
      <div className="arabic">{arabic}</div>
      <div className="translation">{translation}</div>
    </div>
  );
});

export default AdhkarBox;
