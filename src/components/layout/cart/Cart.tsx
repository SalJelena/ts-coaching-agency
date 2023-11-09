import { useEffect, useRef } from "react"
import Modal, { ModalHandle } from "../../UI/modal/Modal"

type CartProps = {
    onDone: () => void;
}

function Cart({ onDone }: CartProps) {
    const modal = useRef<ModalHandle>(null)

    useEffect(() => {
        if (modal.current) {
            modal.current.open()
        }
    }, [])

    return (
        <Modal ref={modal} onClose={onDone}>
            <h2>Your Cart</h2>
            <button onClick={onDone}>Close</button>
        </Modal>
    )
}

export default Cart