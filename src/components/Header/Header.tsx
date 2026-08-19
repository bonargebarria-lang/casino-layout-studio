import "./Header.css";
import KPICard from "../KPI/KPICard";

export default function Header() {
  return (
    <header className="header">

      <div className="header-left">

        <div className="logo">
          🎰
        </div>

        <div>

          <h1>Ocean Casino</h1>

          <span>Casino Insight Studio • Heat Map MVP v0.3</span>

        </div>

      </div>

      <div className="header-center">

        <KPICard
          title="Coin In"
          value="$2.45M"
          status="+4.8% vs ayer"
          color="#38BDF8"
        />

        <KPICard
          title="Win"
          value="$315K"
          status="+2.1% vs ayer"
          color="#22C55E"
        />

        <KPICard
          title="Hold"
          value="12.86%"
          status="Dentro del objetivo"
          color="#F59E0B"
        />

        <KPICard
          title="Machines"
          value="270"
          status="267 Online"
          color="#8B5CF6"
        />

        <KPICard
          title="Offline"
          value="3"
          status="Requieren atención"
          color="#EF4444"
        />

      </div>

      <div className="header-right">

        <div className="casino-name">
          Heat Map
        </div>

        <div className="user-name">
          Build 0.3
        </div>

      </div>

    </header>
  );
}