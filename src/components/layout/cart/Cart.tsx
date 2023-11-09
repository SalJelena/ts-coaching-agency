import { useEffect, useRef } from "react"
import Modal, { ModalHandle } from "../../UI/modal/Modal"


function Cart() {
    const modal = useRef<ModalHandle>(null)

    useEffect(() => {
        if (modal.current) {
            modal.current.open()
        }
    }, [])

    function handleClose() {
        console.log('close')
    }

    return (
        <Modal ref={modal} onClose={handleClose}>
            <h2>Your Cart</h2>
        </Modal>
    )
}

export default Cart