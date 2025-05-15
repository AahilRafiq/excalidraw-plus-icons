import IconGrid from "./IconGrid";


export default function IconModal({ openModal, setOpenModal }: { openModal: boolean, setOpenModal: (val: boolean) => void }) {

    return (
        <>
            {openModal && (
                <dialog open id="my_modal_3" className="modal">
                    <div className="modal-box">
                        <button
                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                            onClick={() => setOpenModal(false)}
                        >
                            ✕
                        </button>
                        <h3 className="font-bold text-lg">Select Icon</h3>

                        <IconGrid/>
                    </div>
                </dialog>
            )}
        </>
    );
}