import React, { useState } from "react";
import { Popover, PopoverBody, PopoverHeader } from "reactstrap";

const CustomTooltipPopover = (props) => {
    const [popoverOpen1, setPopoverOpen] = useState(false);
    //const onMouseEnter = _.debounce(() => setPopoverOpen(true), 500);
    //const onMouseLeave = _.debounce(() => setPopoverOpen(false), 500);
    const toggle = () => setPopoverOpen(!popoverOpen1);


    return (
        <React.Fragment>
            {props.trigger === "focus" &&
                (
                    <React.Fragment>
                        <div id={"Popover-" + props.uniqueId}>
                            <p
                                onMouseEnter={() => setPopoverOpen(true)}
                                onMouseLeave={() => setPopoverOpen(false)}
                            >
                                {props.content}
                            </p>
                        </div>
                        {popoverOpen1 && (
                            <div>
                            <Popover className="table-popover-tooltip" isOpen={popoverOpen1} target={"Popover-" + props.uniqueId} placement={props.placement} >
                                <PopoverHeader>
                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                        <div>{props.header}</div>
                                        <div>
                                            {" "}
                                            <span
                                                className="table-popover-tooltip"
                                                aria-hidden="true"
                                                onClick={()=>
                                                    !popoverOpen1
                                                }
                                            >
                                                &times;
                                            </span>
                                        </div>
                                    </div>
                                </PopoverHeader>
                                <PopoverBody>{props.contentHover}</PopoverBody>
                                {props.footer && <div className="popover-footer">{props.footer || ""}</div>}
                            </Popover>
                        </div>
                        )}
                    </React.Fragment>
                )
            }
            {props.trigger === "click" && (
                <React.Fragment><div
                    id={"Popover-" + props.uniqueId}
                    onClick={() => {
                        toggle();
                    }}
                >
                    <p>{props.content}</p>
                </div>


                    <div>
                        <Popover className="table-popover-tooltip" trigger="click" isOpen={popoverOpen1} target={"Popover-" + props.uniqueId}  placement={props.placement}   toggle={toggle}>
                            <PopoverHeader>
                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    <div>{props.header}</div>
                                    <div>
                                        {" "}
                                        <span
                                            className="table-popover-tooltip"
                                            aria-hidden="true"
                                            onClick={() => {
                                                toggle();
                                            }}
                                        >
                                            &times;
                                        </span>
                                    </div>
                                </div>
                            </PopoverHeader>
                            <PopoverBody>{props.contentHover}</PopoverBody>
                            {props.footer && <div className="popover-footer">{props.footer || ""}</div>}
                        </Popover>
                    </div>
                </React.Fragment>)}
        </React.Fragment>
    );
};

export default CustomTooltipPopover;
