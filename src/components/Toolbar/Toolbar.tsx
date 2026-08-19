import { useRef } from "react";
import "./Toolbar.css";

interface ToolbarProps {
  onOpenLayout?: (file: File) => void;
}

export default function Toolbar({
  onOpenLayout,
}: ToolbarProps) {

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleOpenLayout = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {

    const file = event.target.files?.[0];

    if (!file) return;

    onOpenLayout?.(file);

    // Permite volver a seleccionar el mismo archivo
    event.target.value = "";
  };

  return (

    <div className="toolbar">

      <div className="toolbar-actions">

        <button
          className="toolbar-button"
          onClick={handleOpenLayout}
        >
          📂 Abrir Layout
        </button>

        <input
          ref={fileInputRef}
          type="file"
          accept="image/png,image/jpeg,image/webp"
          onChange={handleFileChange}
          style={{ display: "none" }}
        />

        <button className="toolbar-button">
          💾 Guardar
        </button>

        <button className="toolbar-button">
          📥 Importar Excel
        </button>

        <button className="toolbar-button">
          📤 Exportar
        </button>

      </div>


      <div className="toolbar-search">

        <input
          type="text"
          placeholder="Buscar máquina (ID)..."
        />

      </div>


      <div className="toolbar-filters">

        <select defaultValue="all">

          <option value="all">
            Todas las Zonas
          </option>

          <option value="A">
            Zona A
          </option>

          <option value="B">
            Zona B
          </option>

          <option value="C">
            Zona C
          </option>

        </select>

      </div>

    </div>

  );
}