import React from "react";
import Modal from '@babamibe/modal-component-library'

const ModalComponent = ({isVisible, setIsVisible}) => {
    return (
        <Modal isVisible={isVisible} setIsVisible={setIsVisible}>
            <p>Employee saved!</p>
        </Modal>
    )
}

export default ModalComponent;