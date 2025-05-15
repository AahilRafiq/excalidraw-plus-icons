import IconModal from "./IconModal"
import { useState } from "react"

export default function () {

    const [openModal, setOpenModal] = useState(false)

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">Excalidraw+Icons</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><button onClick={() => setOpenModal(true)} className="btn btn-soft btn-primary mr-2">+ Add Icon</button></li>
                    <li><button className="btn btn-outline btn-secondary">?</button></li>
                </ul>
            </div>
            <IconModal openModal={openModal} setOpenModal={setOpenModal}/>
        </div>
    )
}