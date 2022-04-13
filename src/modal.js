import { createPortal } from "react-dom"
export default function modal(){
    return createPortal(
        <div>
            Modal
        </div>,document.getElementById('modal')
    )
}