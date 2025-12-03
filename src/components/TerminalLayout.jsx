export default function TerminalLayout({ title, children }) {
  return (
    <div className="terminal">
      <div className="terminal-header">
        <span className="dot red"></span>
        <span className="dot yellow"></span>
        <span className="dot green"></span>
        <span className="title">{title}</span>
      </div>

      <div className="terminal-body">{children}</div>
    </div>
  );
}
