import { useState } from "react";
import type { Machine } from "../../models/Machine";
import "./LayoutCanvas.css";
import EGMCard from "../FloorObjects/EGMCard/EGMCard";
import { machines } from "../../services/MachineService";

export default function LayoutCanvas() {

    const [selectedMachine, setSelectedMachine] = useState<string | null>(null);
    const [layoutMachines, setLayoutMachines] = useState<Machine[]>(machines);
    const [draggingMachine, setDraggingMachine] = useState<string | null>(null);

    return (

        <div className="layout-canvas">

            <div className="canvas-grid">

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
                             onMouseDown={() => {
                                console.log("Iniciando arrastre:", machine.id);
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