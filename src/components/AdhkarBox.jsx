export default function AdhkarBox({ arabic, translation, animate, onTouchStart, onTouchEnd }) {
  return (
    <div className={`box ${animate}`} tabIndex={-1} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
      <div className="arabic">{arabic}</div>
      <div className="translation">{translation}</div>
    </div>
  );
}
