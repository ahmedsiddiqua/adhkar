export default function AdhkarBox({ arabic, translation, animate }) {
  return (
    <div className={`box ${animate}`}>
      <div className="arabic">{arabic}</div>
      <div className="translation">{translation}</div>
    </div>
  );
}
