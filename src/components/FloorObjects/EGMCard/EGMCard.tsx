import LayoutObject from "../LayoutObject/LayoutObject";
import type { Machine } from "../../../models/Machine";

interface Props {

    machine: Machine;

}

export default function EGMCard({ machine }: Props) {

    return (

        <LayoutObject

            title={`🎰 ${machine.id}`}

            subtitle={machine.manufacturer}

            x={machine.x}

            y={machine.y}

        />

    );

}