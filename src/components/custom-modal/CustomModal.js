import React, { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import PropTypes from "prop-types";
import "./CustomModal.css";
// import "animate.css";

const DefaultModalFooter = (props) => {
    return (
        <>
            <div className="button-wrapper">
                <button
                    type="button"
                    className="btn btn-app-secondary"
                    data-dismiss="modal"
                    onClick={() => {
                        props.onCancel();
                    }}
                >
                    {props.secondaryButtonLabel ? !props.secondaryButtonLabel : "Cancel"}
                </button>
                <button
                    type="button"
                    className="btn btn-app-primary"
                    onClick={() => {
                        props.onConfirm();
                    }}
                >
                    {props.primaryButtonLabel ? props.primaryButtonLabel : "Confirm"}
                </button>
            </div>
        </>
    );
};
export const CustomModal = ({ transition, modalSize, onClose,modalBody, modalTitle, modalFooter, isFooterRequired = true, isOverlay = false, onCancel, onConfirm, primaryButtonLabel, secondaryButtonLabel }, ref) => {
    const [modal, setModal] = useState(true);
    const [className, setClassName] = useState("");
    useEffect(() => {
        switch (transition) {
            case "left":
                setClassName("fade-in-left");
                break;
            case "right":
                setClassName("fade-in-right");
                break;
            default:
                setClassName("fade-in");
                break;
        }
    }, [transition]);
    //const [classValue, setValue] = useState("animate__animated animate__slideInRight");
    useImperativeHandle(ref, () => ({
        show: () => {
            console.log("show");
            setModal(false);
            //setValue("animate__animated animate__slideOutLeft");
        },
        hide: () => {
            console.log("hide");
            setModal(true);
        },
    }));

    const handleClose = () => {
        setModal(true);
        // onClose();
        // onCancel();  
    };
    if (!modal) {
        return (
            <>
                <div
                    className={`modal ${className || ""} ${!modal ? "d-block" : ""}`}
                    tabIndex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div
                        className={`modal-dialog ${transition !== "" ? "six-dee-modal" : ""} ${isOverlay ? "six-dee-modal" : ""} ${
                            (!isOverlay && transition) || ""
                        } ${(!isOverlay && modalSize) || ""} ${isOverlay && "mw-100"}`}
                    >
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{modalTitle}</h5>
                                <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                    onClick={handleClose}
                                    
                                >
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">{modalBody}</div>
                            { isFooterRequired &&
                            <div className="modal-footer">
                                {modalFooter}
                                {!modalFooter && (
                                    <DefaultModalFooter
                                    primaryButtonLabel={primaryButtonLabel}
                                    secondaryButtonLabel={secondaryButtonLabel}
                                        onCancel={() => {
                                            onCancel();
                                        }}
                                        onConfirm={() => {
                                            onConfirm();
                                        }}
                                    />
                                )}
                            </div>
                            }
                        </div>
                    </div>
                </div>
                <div
                    className="modal-backdrop show"
                    data-dismiss="modal"
                    onClick={() => {
                        console.log("backdrop clicked");
                        setModal(true);
                    }}
                ></div>
            </>
        );
    } else {
        return null;
    }
};

const CustomModalFwdRef = forwardRef(CustomModal);

CustomModalFwdRef.protoTypes = {
    modalFooter: PropTypes.element.isRequired,
    modalTitle: PropTypes.string.isRequired,
};

export default CustomModalFwdRef;
