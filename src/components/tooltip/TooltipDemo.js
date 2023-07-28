import React, { useRef } from 'react';
// import './index.css'

// import '../../themes/base-theme.css'
import CustomTooltip from './CustomTooltip';
const TooltipDemo = () => {

    return (
        <React.Fragment>
            <h5>Tooltip</h5>
            <div className="row  my-3">
                <div className="col-md-3">
                    <div style={{ width: "80px" }}>
                        <CustomTooltip uniqueId={"1"} position="top" content={"Tooltip top"} colorType={"success"}/>
                    </div>
                </div>

                <div className="col-md-3">
                    <div style={{ width: "80px" }}>
                        <CustomTooltip uniqueId={"2"} position="right" content={"Tooltip right"} />
                    </div>
                </div>

                <div className="col-md-3">
                    <div style={{ width: "80px" }}>
                        <CustomTooltip uniqueId={"3"} position="left" content={"Tooltip left"} />
                    </div>
                </div>

                <div className="col-md-3">
                    <div style={{ width: "100px" }}>
                        <CustomTooltip uniqueId={"4"} position="bottom" content={"Tooltip bottom"}/>
                    </div>
                </div>

            </div>

        </React.Fragment>
    )
}

export default TooltipDemo;