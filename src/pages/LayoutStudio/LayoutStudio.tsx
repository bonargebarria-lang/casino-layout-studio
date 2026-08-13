import "./LayoutStudio.css";

import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Sidebar from "../../components/Sidebar/Sidebar";
import LayoutCanvas from "../../components/LayoutCanvas/LayoutCanvas";
import StatusBar from "../../components/StatusBar/StatusBar";

export default function LayoutStudio() {
  return (
    <div className="layout">

      <Header />

      <MenuBar />

      <div className="workspace">

        <Sidebar />

        <LayoutCanvas />

      </div>

      <StatusBar />

    </div>
  );
}