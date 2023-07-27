import React, { useRef } from "react";
import CustomModalFwdRef, { CustomModal } from "./CustomModal";

const CustomModelDemo = () => {
    const newRef = useRef();
    const ModalBodyContent = () => <div> Modal body content... </div>;
    const ModalFooter = () => {
        return (
            <>
                <button type="button" className="btn btn-app-tertiary" data-dismiss="modal" onClick={() => modalRef.current.hide()}>
                    Cancel from App
                </button>
                <button
                    type="button"
                    className="btn btn-app-primary"
                    onClick={() => {
                        console.log("you clicked me..");
                    }}
                >
                    Confirm
                </button>
            </>
        );
    };
    const modalRef = useRef();
    const modalRefRight = useRef();
    const modalRefLeft = useRef();
    const modalOverlay = useRef();

    return (
        <>
            <button type="button" className="btn btn-app-primary btn-primary" onClick={() => modalRef.current.show()}>
                Launch Regular Modal
            </button> &nbsp;
            <button type="button" className="btn btn-app-primary btn-primary" onClick={() => modalRefRight.current.show()}>
                Launch Large Modal from Right
            </button> &nbsp;
            <button type="button" className="btn btn-app-primary  btn-primary" onClick={() => modalRefLeft.current.show()}>
                Launch Large Modal from left
            </button> &nbsp;
             <button type="button" className="btn btn-app-primary  btn-primary" onClick={() => modalOverlay.current.show()}>
                Launch overlay Modal 
            </button>
            <CustomModalFwdRef
                ref={modalRef}
                transition="" // left,right , empty("") for default transition
                modalSize={"modal-lg"}
                isOverlay={false}
                modalTitle={"Modal Title"}
                modalBody={<ModalBodyContent />}
                modalFooter={<ModalFooter />}
                onConfirm={() => {}}
                onCancel={() => {
                    newRef.current.hide();
                }}
                // onClose={() => {
                // }}                
            />
            <CustomModalFwdRef
                ref={modalRefRight}
                transition="right" // left,right , empty("") for default transition
                modalSize={"modal-lg"}
                isOverlay={false}
                modalTitle={"Modal Title"}
                modalBody={<ModalBodyContent />}
                modalFooter={<ModalFooter />}
                onConfirm={() => {}}
                onCancel={() => {
                    console.log("closeddd")
                    modalRefRight.current.hide();
                }}
                // onClose={() => {
                // }}
            />
            <CustomModalFwdRef
                ref={modalRefLeft}
                transition="left" // left,right , empty("") for default transition
                modalSize={"modal-lg"}
                isOverlay={false}
                modalTitle={"Modal Title"}
                modalBody={<ModalBodyContent />}
                modalFooter={<ModalFooter />}
                onConfirm={() => {}}
                onCancel={() => {
                    modalRefLeft.current.hide();
                }}
                // onClose={() => {
                // }}
            />
            <CustomModalFwdRef
                ref={modalOverlay}
                transition="" // left,right , empty("") for default transition
                modalSize={"modal-lg"}
                isOverlay={true}
                modalTitle={"Modal Title"}
                modalBody={<ModalBodyContent />}
                modalFooter={<ModalFooter />}
                onConfirm={() => {}}
                onCancel={() => {
                    modalOverlay.current.hide();
                }}
                // onClose={() => {
                // }}                
            />
        </>
    );
};

export default CustomModelDemo;
