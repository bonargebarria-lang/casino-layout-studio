import { useState } from "react";
import type { DragState } from "../models/DragState";

export function useDrag() {

    const [dragState, setDragState] = useState<DragState | null>(null);

    function startDrag(state: DragState) {

        setDragState(state);

    }

    function stopDrag() {

        setDragState(null);

    }

    return {

        dragState,

        startDrag,

        stopDrag,

    };

}