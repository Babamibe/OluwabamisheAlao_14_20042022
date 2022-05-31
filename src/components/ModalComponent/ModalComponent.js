import React from "react";
import Modal from '@babamibe/modal-component-library'

/**
 * create a modal component
 * @param {Boolean} isVisible 
 * @param {Function} setIsVisible
 * @returns Component
 */
const ModalComponent = ({isVisible, setIsVisible}) => {
    return (
        <Modal isVisible={isVisible} setIsVisible={setIsVisible}>
            <p>Employee saved!</p>
        </Modal>
    )
}

export default ModalComponent;