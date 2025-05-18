import { Excalidraw } from "@excalidraw/excalidraw";
import "@excalidraw/excalidraw/index.css";
import { toastConfig } from 'react-simple-toasts';
import 'react-simple-toasts/dist/style.css';
import 'react-simple-toasts/dist/theme/dark.css';
import Navbar from "./components/Navbar";
import { useState } from "react";

toastConfig({ theme: 'dark' });

const UIOptions = {
  canvasActions: {
    toggleTheme: true
  }
}

export default function() {

  const [theme, setTheme] = useState<"dark" | "light">("dark")

  return (
    <div className="h-screen w-screen flex flex-col">
      <Navbar theme={theme} setTheme={setTheme}/>
      <div className="flex-grow w-full">
        <Excalidraw theme={theme} UIOptions={UIOptions}/>
      </div>
    </div>
  );
}