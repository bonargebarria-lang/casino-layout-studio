import { useState } from "react";
import type { MouseEvent } from "react";
import "./LayoutObject.css";

interface LayoutObjectProps {
  title: string;
  subtitle?: string;
  tooltip?: string;
  x?: number;
  y?: number;
  rotation?: number;

  selected?: boolean;

  onClick?: () => void;
  onMouseDown?: (e: MouseEvent<HTMLDivElement>) => void;
}

export default function LayoutObject({
  title,
  subtitle,
  tooltip,
  x = 100,
  y = 100,
  rotation = 0,
  selected = false,
  onClick,
  onMouseDown,
}: LayoutObjectProps) 
{
  const [tooltipSide, setTooltipSide] =
    useState<"right" | "left">("right");
  return (

  <div
    className={`layout-object ${selected ? "selected" : ""}`}
    style={{
      left: x,
      top: y,
      transform: `rotate(${rotation}deg)`,
    }}
    onClick={onClick}
    onMouseDown={onMouseDown}
  onMouseEnter={(e) => {
  const machineRect =
    e.currentTarget.getBoundingClientRect();

  const canvas =
    e.currentTarget.closest(".layout-canvas");

  if (!canvas) return;

  const canvasRect =
    canvas.getBoundingClientRect();

  const spaceRight =
    canvasRect.right - machineRect.right;

  if (spaceRight < 180) {
    setTooltipSide("left");
  } else {
    setTooltipSide("right");
  }
}}
  >
    <div className="object-title">
      {title}
    </div>

    {subtitle && (
      <div className="object-subtitle">
        {subtitle}
      </div>
    )}

    {tooltip && (
      <div className={`machine-tooltip ${tooltipSide}`}>
        {tooltip.split("\n").map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </div>
    )}
  </div>
);
}