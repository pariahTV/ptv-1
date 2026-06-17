export default function Home() {
  return (
    <main className="gp-shell">
      <header className="gp-row" style={{ marginBottom: "24px" }}>
        <div className="gp-col" style={{ flex: 1 }}>
          <div className="gp-status-live">
            <span className="gp-status-dot" />
            <span>PariahTV • Live Broadcast</span>
          </div>
          <h1 style={{ marginTop: "12px", fontSize: "24px" }}>
            PTV‑1 Viewer • Genesis‑Pro
          </h1>
          <p className="gp-text-muted" style={{ marginTop: "8px", fontSize: "13px" }}>
            This is the live theme shell. The full viewer layout will plug into this
            system without changing the look.
          </p>
        </div>
      </header>

      <section className="gp-row">
        <div className="gp-col" style={{ flex: 2 }}>
          <div className="gp-panel gp-panel--primary">
            <div className="gp-panel-header">
              <span className="gp-panel-title">Primary viewport</span>
              <span className="gp-pill">Video • Radio • Chat</span>
            </div>
            <p className="gp-text-soft" style={{ fontSize: "13px" }}>
              This panel will become the main PariahTV Viewer: live video, radio
              stream, chat, ticker, and overlays.
            </p>
          </div>
        </div>

        <div className="gp-col" style={{ flex: 1 }}>
          <div className="gp-panel gp-panel--accent">
            <div className="gp-panel-header">
              <span className="gp-panel-title">System status</span>
              <span className="gp-pill">Genesis‑Pro</span>
            </div>
            <p className="gp-text-soft" style={{ fontSize: "13px" }}>
              Theme variables are now active: colours, spacing, typography, and
              glow. The final viewer layout will reuse these tokens.
            </p>
          </div>
        </div>
      </section>

      <section style={{ marginTop: "24px" }}>
        <div className="gp-ticker">
          <span className="gp-ticker-label">System ticker</span>
          <span className="gp-ticker-text">
            PTV‑1 theme online • Genesis‑Pro hybrid ready • Next step: plug in the
            full viewer layout.
          </span>
        </div>
      </section>
    </main>
  );
}
