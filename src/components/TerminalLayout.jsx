export default function TerminalLayout({ title, children }) {
  return (
    <main className="terminal-shell">
      <div className="terminal">
        <header className="terminal-header">
          <div className="dots" aria-hidden="true">
            <div className="dot red"></div>
            <div className="dot yellow"></div>
            <div className="dot green"></div>
          </div>
          <h1 className="title">{title}</h1>
        </header>

        <div className="terminal-body">{children}</div>
      </div>
    </main>
  );
}
