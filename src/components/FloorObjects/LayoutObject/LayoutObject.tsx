import "./LayoutObject.css";

interface LayoutObjectProps {
  title: string;
  subtitle?: string;
  x?: number;
  y?: number;

  selected?: boolean;

  onClick?: () => void;
}

export default function LayoutObject({
  title,
  subtitle,
  x = 100,
  y = 100,
  selected = false,
  onClick,
}: LayoutObjectProps) {

  return (
  <div
    className={`layout-object ${selected ? "selected" : ""}`}
    style={{
      left: x,
      top: y,
    }}
    onClick={onClick}
  >
    <div className="object-title">
      {title}
    </div>

    {subtitle && (
      <div className="object-subtitle">
        {subtitle}
      </div>
    )}
  </div>
);
}