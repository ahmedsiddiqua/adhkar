export default function TerminalLayout({ title, children }) {
  return (
    <main className="page-shell">
      <div className="page-card">
        <header className="page-header">
          <p className="eyebrow">Daily Adhkar</p>
          <h1 className="title">{title}</h1>
        </header>

        <div className="page-body">{children}</div>
      </div>
    </main>
  );
}
