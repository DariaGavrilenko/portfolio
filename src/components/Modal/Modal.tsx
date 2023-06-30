import { createPortal } from "react-dom";
import React, { FC } from "react";
import style from './Modal.module.css'


export type ModalType = {
    showModal: boolean,
    setShowModal: (value: boolean) => void
}



const ModalWindow: FC<ModalType> = ({ showModal, setShowModal }) => {



    const handleCloseModal = () => {
        setShowModal(false)
    }
    return showModal
        ? createPortal(
            <div >
                <div onClick={handleCloseModal} className={style.modalForm} >
                    <div className={style.modalMessage}>Your message was send. I will answer you as soon as possible.</div>
                    <button onClick={handleCloseModal} className={style.modalButton}> ok </button>
                </div>
            </div>
            , document.getElementById("modal") as HTMLElement)
        : null

}

export default ModalWindow