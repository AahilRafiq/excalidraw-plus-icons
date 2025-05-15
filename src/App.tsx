import { Excalidraw } from "@excalidraw/excalidraw";
import "@excalidraw/excalidraw/index.css";
import { toastConfig } from 'react-simple-toasts';
import 'react-simple-toasts/dist/style.css';
import 'react-simple-toasts/dist/theme/dark.css';
import Navbar from "./components/Navbar";

toastConfig({ theme: 'dark' });

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