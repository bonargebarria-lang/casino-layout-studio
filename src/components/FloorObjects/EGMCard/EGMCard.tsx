import type { MouseEvent } from "react";
import LayoutObject from "../LayoutObject/LayoutObject";
import type { Machine } from "../../../models/Machine";

interface Props {
    machine: Machine;
    selected?: boolean;
    onClick?: () => void;
    onMouseDown?: (e: MouseEvent<HTMLDivElement>) => void;
}

export default function EGMCard({
    machine,
    selected = false,
    onClick,
    onMouseDown,
}: Props) {

    return (

        <LayoutObject

            title={`🎰 ${machine.id}`}

            subtitle={machine.manufacturer}

            x={machine.x}

            y={machine.y}

            selected={selected}

            onClick={onClick}
            onMouseDown={onMouseDown}

        />

    );

}