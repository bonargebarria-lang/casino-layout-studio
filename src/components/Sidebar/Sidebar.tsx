import "./Sidebar.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">

      <div className="sidebar-title">
        CASINO LAYOUT
      </div>

      <div className="sidebar-section">

        <div className="section-title">
          EGMs
        </div>

        <button>🎰 Aristocrat</button>
        <button>🎰 IGT</button>
        <button>🎰 Bally</button>
        <button>🎰 Konami</button>

      </div>

      <div className="sidebar-section">

        <div className="section-title">
          Herramientas
        </div>

        <button>➕ Agregar Máquina</button>
        <button>🪑 Agregar Mesa</button>
        <button>📐 Dibujar Zona</button>

      </div>

    </aside>
  );
}