import { DynamicIcon } from 'lucide-react/dynamic'

export default function IconModal({ openModal, setOpenModal }: { openModal: boolean, setOpenModal: (val: boolean) => void }) {

    function handleIconClick(e: React.MouseEvent<SVGSVGElement>) {
        const svgString = e.currentTarget.outerHTML;
        navigator.clipboard.writeText(svgString).then(() => {
            console.log("SVG copied to clipboard");
        }
        ).catch((err) => {
            console.error("Could not copy text: ", err);
        }
        );

    }

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

                        <DynamicIcon onClick={handleIconClick} name="camera" color="red" size={48} />
                    </div>
                </dialog>
            )}
        </>
    );
}