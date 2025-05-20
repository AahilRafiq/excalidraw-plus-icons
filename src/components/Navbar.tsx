import IconModal from "./Modal"
import { useState } from "react"
import { Github } from "lucide-react"
import type { Dispatch, SetStateAction } from "react"
import { Moon, Sun } from "lucide-react"

interface IProps {
    theme: "dark" | "light"
    setTheme: Dispatch<SetStateAction<"dark" | "light">>
} 

export default function ({theme, setTheme}:IProps) {

    const [openModal, setOpenModal] = useState(false)

    function handleThemeToggle() {
        setTheme(val => {
            return val == "dark" ? "light" : "dark"
        })
    }

    return (
        <div className="flex flex-row p-1 place-items-center bg-base-100 shadow-sm">
            <div className="flex-1">
                <a className="btn btn-ghost text-lg ">Excalidraw+Icons</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><button className="btn btn-sm mx-2 btn-ghost rounded-full" onClick={handleThemeToggle}>
                        {theme == "dark" ? <Sun/> : <Moon/>}
                    </button></li>
                    <li><button onClick={() => setOpenModal(true)} className="btn btn-sm btn-soft btn-primary mr-2">+ Add Icon</button></li>
                    <li><a href="https://github.com/AahilRafiq/excalidraw-plus-icons" className="btn btn-sm btn-outline ml-2"><Github/></a></li>
                </ul>
            </div>
            <IconModal openModal={openModal} setOpenModal={setOpenModal}/>
        </div>
    )
}