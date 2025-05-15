import { Excalidraw } from "@excalidraw/excalidraw";
import "@excalidraw/excalidraw/index.css";
import Navbar from "./components/Navbar";

export default function() {

  return (
    <div className="h-screen w-screen flex flex-col">
      <Navbar/>
      <div className="flex-grow w-full">
        <Excalidraw />
      </div>
    </div>
  );
}