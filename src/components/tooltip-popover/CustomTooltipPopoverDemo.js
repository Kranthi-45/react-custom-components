import React, { useRef } from 'react';
import CustomTooltipPopover from './CustomTooltipPopover';
// import './index.css'
// import '../../themes/base-theme.css'
const TooltipPopoverDemo = () => {

    return (
        <React.Fragment>
            <h5>Tooltip</h5>
            <div className="row  my-3">
                <div className="col-md-3">
                    <div style={{ width: "80px" }}>
                        <CustomTooltipPopover uniqueId={"1"} trigger="click" placement="top" header={"header"} content={"TooltipPopover top"} contentHover={"popover content"} footer={"footer"} />
                    </div>
                </div>

                <div className="col-md-3">
                    <div style={{ width: "80px" }}>
                        <CustomTooltipPopover uniqueId={"2"} trigger="focus" placement="right" header={"header"} content={"TooltipPopover right"} contentHover={"popover content"} />
                    </div>
                </div>

                <div className="col-md-3">
                    <div style={{ width: "80px" }}>
                        <CustomTooltipPopover uniqueId={"3"} trigger="focus" placement="left" content={"TooltipPopover left"} contentHover={"popover content"} />
                    </div>
                </div>

                <div className="col-md-3">
                    <div style={{ width: "100px" }}>
                        <CustomTooltipPopover uniqueId={"4"} trigger="click" placement="bottom" content={"TooltipPopover bottom"} contentHover={"popover content"} />
                    </div>
                </div>

            </div>

        </React.Fragment>
    )
}

export default TooltipPopoverDemo;