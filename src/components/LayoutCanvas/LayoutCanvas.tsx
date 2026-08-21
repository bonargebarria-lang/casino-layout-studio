import { useEffect, useRef, useState } from "react";
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

    const canvasRef = useRef<HTMLDivElement>(null);
    const [floorplanSize, setFloorplanSize] = useState({
    width: 0,
    height: 0,
});

    const [selectedMachine, setSelectedMachine] = useState<string | null>(null);
    const [layoutMachines, setLayoutMachines] = useState<Machine[]>(machines);
    const [draggingMachine, setDraggingMachine] = useState<string | null>(null);
    const [dragOffset, setDragOffset] = useState({
    x: 0,
    y: 0,
});
const [fitScale, setFitScale] = useState(1);
const [worldOffsetX, setWorldOffsetX] = useState(0);

useEffect(() => {

    if (!floorplanImage) return;

    const img = new Image();

    img.onload = () => {

        setFloorplanSize({
            width: img.naturalWidth,
            height: img.naturalHeight,
        });

    };

    img.src = floorplanImage;

}, [floorplanImage]);
useEffect(() => {

    if (!canvasRef.current) return;

    if (
        floorplanSize.width === 0 ||
        floorplanSize.height === 0
    ) return;

    const rect =
        canvasRef.current.getBoundingClientRect();

    const padding = 40;

    const availableWidth =
        rect.width - padding * 2;

    const availableHeight =
        rect.height - padding * 2;

    const scaleX =
        availableWidth / floorplanSize.width;

    const scaleY =
        availableHeight / floorplanSize.height;

    const scale =
        Math.min(scaleX, scaleY);

    setFitScale(scale);
    const scaledWidth =
    floorplanSize.width * scale;

    const offsetX =
    (rect.width - scaledWidth) / 2;

    setWorldOffsetX(offsetX);
    
}, [floorplanSize]);

return (

        <div 
            ref={canvasRef}
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

            x: (mouseX - worldOffsetX - 75) / fitScale,

            y: (mouseY - 40) / fitScale,

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

                <div className="canvas-world"></div>
                
                <div className="floorplan-layer"

                    style={{
                    width: floorplanSize.width,
                    height: floorplanSize.height,

                    left: worldOffsetX,

                    backgroundImage: floorplanImage
                    ? `url("${floorplanImage}")`
                    : "none",
                    transform: `scale(${fitScale})`,
                }}
                ></div>

                <div className="zone-layer"></div>

                <div
                    className="machine-layer"
                    style={{
                    left: worldOffsetX,
                    }}
                >

                    {layoutMachines.map((machine) => (

                        <EGMCard

                            key={machine.id}

                            machine={{
                                ...machine,
                                x: machine.x * fitScale,
                                y: machine.y * fitScale,
                            }}

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