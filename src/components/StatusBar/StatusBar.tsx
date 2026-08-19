import "./StatusBar.css";

export default function StatusBar() {
  return (
    <div className="status-bar">

      <div className="status-left">

        <div className="status-item">
          <span className="status-dot online"></span>
          Layout listo
        </div>

        <div className="status-divider"></div>

        <div className="status-item">
          Datos: Demo
        </div>

        <div className="status-divider"></div>

        <div className="status-item">
          270 máquinas
        </div>

      </div>


      <div className="status-right">

        <div className="status-item">
          KPI:
          <strong>Coin In</strong>
        </div>

        <div className="status-divider"></div>

        <div className="status-item">
          Zoom 100%
        </div>

        <button
          className="status-icon-button"
          title="Ajustar mapa a pantalla"
        >
          ⛶
        </button>

      </div>

    </div>
  );
}