import React, { useState } from "react";
import { Popover, PopoverBody, PopoverHeader } from "reactstrap";
// import "./Notifications/NotificationComponent.css";
const CustomPopover = (props) => {
    const [popoverOpen1, setPopoverOpen] = useState(false);
    //const onMouseEnter = _.debounce(() => setPopoverOpen(true), 500);
    //const onMouseLeave = _.debounce(() => setPopoverOpen(false), 500);
    const toggle = () => setPopoverOpen(!popoverOpen1);

    return (
        <React.Fragment>
            <div>
                <Popover
                    className="custom-popover-wrapper"
                    trigger="click"
                    isOpen={popoverOpen1}
                    target={props.uniqueId}
                    toggle={toggle}
                    placement={props.placement}
                >
                    <PopoverHeader>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <div>{props.header}</div>
                            <div>
                                {" "}
                                <span
                                    style={{ cursor: "pointer", display: "block", fontSize: "20px" }}
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
                    <PopoverBody>{props.content}</PopoverBody>
                    { props.footermargin && <hr/>}
                    {props.footer && <div className="popover-footer">{props.footer || ""}</div>}
                </Popover>
            </div>
        </React.Fragment>
    );
};

export default CustomPopover;
