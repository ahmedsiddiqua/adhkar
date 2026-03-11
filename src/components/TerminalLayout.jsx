export default function TerminalLayout({ title, children }) {
  const handleRedDotClick = () => {
    if (!window.matchMedia("(min-width: 768px) and (pointer: fine)").matches) {
      return;
    }

    window.location.href = "https://asterhyphen.xyz";
  };

  return (
    <main className="terminal-shell">
      <div className="terminal">
        <header className="terminal-header">
          <div className="dots">
            <button
              className="dot red dot-button"
              type="button"
              onClick={handleRedDotClick}
              aria-label="Go to asterhyphen.xyz"
            />
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
