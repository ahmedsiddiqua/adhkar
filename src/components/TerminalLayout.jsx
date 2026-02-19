export default function TerminalLayout({ title, children }) {
  return (
    <div className="terminal">
      <div className="terminal-header">
        <div className="dot red"></div>
        <div className="dot yellow"></div>
        <div className="dot green"></div>
        <div className="title">{title}</div>
      </div>

      <div className="terminal-body">{children}</div>
    </div>
  );
}
