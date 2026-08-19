import "./Sidebar.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">

      <div className="sidebar-title">
        CASINO INSIGHT
      </div>


      {/* VISTAS */}

      <div className="sidebar-section">

        <div className="section-title">
          Vista
        </div>

        <button className="sidebar-button">
          <span className="sidebar-icon">▣</span>
          Layout
        </button>

        <button className="sidebar-button active">
          <span className="sidebar-icon">🔥</span>
          Heat Map
        </button>

        <button className="sidebar-button">
          <span className="sidebar-icon">▤</span>
          Analytics
        </button>

      </div>


      {/* CAPAS */}

      <div className="sidebar-section">

        <div className="section-title">
          Capas
        </div>

        <label className="layer-item">
          <input type="checkbox" defaultChecked />
          <span>Máquinas</span>
        </label>

        <label className="layer-item">
          <input type="checkbox" defaultChecked />
          <span>Mesas</span>
        </label>

        <label className="layer-item">
          <input type="checkbox" defaultChecked />
          <span>Zonas</span>
        </label>

        <label className="layer-item">
          <input type="checkbox" defaultChecked />
          <span>Plano</span>
        </label>

      </div>


      {/* HERRAMIENTAS */}

      <div className="sidebar-section">

        <div className="section-title">
          Herramientas
        </div>

        <button className="sidebar-button">
          <span className="sidebar-icon">↖</span>
          Seleccionar
        </button>

        <button className="sidebar-button">
          <span className="sidebar-icon">✥</span>
          Mover
        </button>

        <button className="sidebar-button">
          <span className="sidebar-icon">△</span>
          Dibujar Zona
        </button>

      </div>

    </aside>
  );
}