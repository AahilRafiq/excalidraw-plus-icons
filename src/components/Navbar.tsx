import IconModal from "./Modal"
import { useState } from "react"
import { Github } from "lucide-react"

export default function () {

    const [openModal, setOpenModal] = useState(false)

    return (
        <div className="navbar bg-base-100 shadow-sm h-2">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">Excalidraw+Icons</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><button onClick={() => setOpenModal(true)} className="btn btn-soft btn-primary mr-2">+ Add Icon</button></li>
                    <li><a className="btn btn-outline ml-2"><Github/></a></li>
                </ul>
            </div>
            <IconModal openModal={openModal} setOpenModal={setOpenModal}/>
        </div>
    )
}