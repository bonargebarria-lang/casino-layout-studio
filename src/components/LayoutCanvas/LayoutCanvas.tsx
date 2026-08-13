import "./LayoutCanvas.css";
import EGMCard from "../FloorObjects/EGMCard/EGMCard";
import { machines } from "../../services/MachineService";

export default function LayoutCanvas() {
  return (
    <div className="layout-canvas">
      <div className="canvas-grid">
        <div className="zone-layer"></div>

        <div className="machine-layer">
          {machines.map((machine) => (
            <EGMCard
              key={machine.id}
              machine={machine}
            />
          ))}
        </div>

        <div className="table-layer"></div>

        <div className="selection-layer"></div>
      </div>
    </div>
  );
}