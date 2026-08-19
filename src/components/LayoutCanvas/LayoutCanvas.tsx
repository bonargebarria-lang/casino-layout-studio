import { useState } from "react";
import type { Machine } from "../../models/Machine";
import "./LayoutCanvas.css";
import EGMCard from "../FloorObjects/EGMCard/EGMCard";
import { machines } from "../../services/MachineService";

interface LayoutCanvasProps {
    floorplanImage?: string | null;
}
export default function LayoutCanvas({
    floorplanImage,
}: LayoutCanvasProps) {

    const [selectedMachine, setSelectedMachine] = useState<string | null>(null);
    const [layoutMachines, setLayoutMachines] = useState<Machine[]>(machines);
    const [draggingMachine, setDraggingMachine] = useState<string | null>(null);
    const [dragOffset, setDragOffset] = useState({
    x: 0,
    y: 0,
});

    return (

        <div 
            className="layout-canvas"
            
            onMouseMove={(e) => {

                 if (!draggingMachine) return;

                    const rect = e.currentTarget.getBoundingClientRect();

                    const mouseX = e.clientX - rect.left;

                    const mouseY = e.clientY - rect.top;

            setLayoutMachines((prev) =>

                    prev.map((machine) => {

                    if (machine.id !== draggingMachine) {

            return machine;

        }

        return {

            ...machine,

            x: mouseX - 75,

            y: mouseY - 40,

        };

    })

);

            }}
            onMouseUp={() => {

                 if (draggingMachine) {

                    console.log("Fin arrastre");

                    setDraggingMachine(null);

                }

            }}
        >
                <div className="canvas-grid">

                <div
                    className="floorplan-layer"
                    style={{
                    backgroundImage: floorplanImage
                    ? `url("${floorplanImage}")`
                    : "none",
                     }}
                ></div>

                <div className="zone-layer"></div>

                <div className="machine-layer">

                    {layoutMachines.map((machine) => (

                        <EGMCard

                            key={machine.id}

                            machine={machine}

                            selected={selectedMachine === machine.id}

                            onClick={() => {
                              console.log("Seleccionada:", machine.id);
                              setSelectedMachine(machine.id);
                          }}
                            onMouseDown={(e) => {
                                console.log("Iniciando arrastre:", machine.id);

                                const rect = e.currentTarget.getBoundingClientRect();

                                setDragOffset({
                                    x: e.clientX - rect.left,
                                    y: e.clientY - rect.top,
                                });

                                setDraggingMachine(machine.id);
                            }}

                        />

                    ))}

                </div>

                <div className="table-layer"></div>

                <div className="selection-layer"></div>

            </div>

        </div>

    );

}