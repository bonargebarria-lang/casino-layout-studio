import { useState } from "react";
import "./LayoutStudio.css";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Toolbar from "../../components/Toolbar/Toolbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import LayoutCanvas from "../../components/LayoutCanvas/LayoutCanvas";
import Bullpen from "../../components/Bullpen/Bullpen";
import StatusBar from "../../components/StatusBar/StatusBar";

export default function LayoutStudio() {
  const [floorplanImage, setFloorplanImage] = useState<string | null>(null);
  const handleOpenLayout = (file: File) => {

    const imageUrl = URL.createObjectURL(file);

    setFloorplanImage(imageUrl);

  };
  return (

    <div className="layout">

      <Header />

      <MenuBar />

      <Toolbar onOpenLayout={handleOpenLayout} />

      <div className="workspace">

        <Sidebar />

        <LayoutCanvas floorplanImage={floorplanImage} />

        <Bullpen />

      </div>

      <StatusBar />

    </div>
  );
}