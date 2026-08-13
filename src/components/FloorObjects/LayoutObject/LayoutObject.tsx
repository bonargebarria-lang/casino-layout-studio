import "./LayoutObject.css";

interface LayoutObjectProps {
  title: string;
  subtitle?: string;
  x?: number;
  y?: number;
}

export default function LayoutObject({
  title,
  subtitle,
  x = 100,
  y = 100,
}: LayoutObjectProps) {
  return (
    <div
      className="layout-object"
      style={{
        left: x,
        top: y,
      }}
    >
      <div className="object-title">{title}</div>

      {subtitle && (
        <div className="object-subtitle">
          {subtitle}
        </div>
      )}
    </div>
  );
}