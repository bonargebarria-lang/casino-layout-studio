import "./LayoutCanvas.css";
import EGMCard from "../FloorObjects/EGMCard/EGMCard";

export default function LayoutCanvas() {

    return (

        <div className="layout-canvas">

            <div className="canvas-grid">

                <div className="zone-layer"></div>

                <div className="machine-layer">

                    <EGMCard />

                </div>

                <div className="table-layer"></div>

                <div className="selection-layer"></div>

            </div>

        </div>

    );

}