import { NavLink } from "react-router-dom";

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

        <nav className="section-nav" aria-label="Adhkar sections">
          <NavLink to="/morning" className={({ isActive }) => `section-link ${isActive ? "active" : ""}`}>
            🌅 Morning
          </NavLink>
          <NavLink to="/evening" className={({ isActive }) => `section-link ${isActive ? "active" : ""}`}>
            🌇 Evening
          </NavLink>
          <NavLink to="/night" className={({ isActive }) => `section-link ${isActive ? "active" : ""}`}>
            🌙 Sleep
          </NavLink>
        </nav>

        <div className="terminal-body">{children}</div>
      </div>
    </main>
  );
}
