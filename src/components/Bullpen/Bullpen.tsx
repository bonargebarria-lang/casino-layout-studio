import "./Bullpen.css";

export default function Bullpen() {
  return (
    <aside className="bullpen">

      <div className="bullpen-header">

        <div>
          <div className="bullpen-title">
            BULLPEN
          </div>

          <div className="bullpen-subtitle">
            Máquinas sin ubicar
          </div>
        </div>

        <div className="bullpen-count">
          267
        </div>

      </div>


      <div className="bullpen-search">

        <span>⌕</span>

        <input
          type="text"
          placeholder="Buscar máquina..."
        />

      </div>


      <div className="bullpen-section-title">
        PENDIENTES
      </div>


      <div className="bullpen-list">

        <div className="bullpen-machine">
          <div className="machine-icon">🎰</div>

          <div className="machine-info">
            <strong>EGM-004</strong>
            <span>Aristocrat</span>
          </div>

          <div className="machine-menu">⋮</div>
        </div>


        <div className="bullpen-machine">
          <div className="machine-icon">🎰</div>

          <div className="machine-info">
            <strong>EGM-005</strong>
            <span>IGT</span>
          </div>

          <div className="machine-menu">⋮</div>
        </div>


        <div className="bullpen-machine">
          <div className="machine-icon">🎰</div>

          <div className="machine-info">
            <strong>EGM-006</strong>
            <span>Konami</span>
          </div>

          <div className="machine-menu">⋮</div>
        </div>


        <div className="bullpen-machine">
          <div className="machine-icon">🎰</div>

          <div className="machine-info">
            <strong>EGM-007</strong>
            <span>Bally</span>
          </div>

          <div className="machine-menu">⋮</div>
        </div>

      </div>


      <div className="bullpen-footer">

        <span className="bullpen-dot"></span>

        <span>
          267 pendientes
        </span>

      </div>

    </aside>
  );
}