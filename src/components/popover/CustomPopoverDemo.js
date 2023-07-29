import React, { useRef } from 'react';
// import './index.css'

// import '../../themes/base-theme.css'
import CustomPopover from './CustomPopover';
const PopoverDemo = () => {

    return (
        <React.Fragment>
            <h5>Popover</h5>
            <div className="row  my-3">
                <div className="col-md-3">
                    <div style={{ width: "110px" }}>
                        <p id={"kranthi"} >click/hover me</p>
                        <CustomPopover uniqueId={"kranthi"} placement="bottom" header={"header"} content={"Tooltip bottom"} footer={"footer"} footermargin={true}/>
                    </div>
                </div>

                <div className="col-md-3">
                    <div style={{ width: "110px" }}>
                        <p id={"dsds"} >click/hover me</p>
                        <CustomPopover uniqueId={"dsds"} placement="right" header={"header"} content={"Tooltip right"} />
                    </div>
                </div>

                <div className="col-md-3">
                    <div style={{ width: "110px" }}>
                    <p id={"dsrfre"} >click/hover me</p>
                        <CustomPopover uniqueId={"dsrfre"} placement="left" header={"header"}content={"Tooltip left"} />
                    </div>
                </div>

                <div className="col-md-3">
                    <div style={{ width: "110px" }}>
                    <p id={"ferfe"} >click/hover me</p>
                        <CustomPopover uniqueId={"ferfe"} placement="bottom" header={"header"} content={"Tooltip bottom"} footer={"footer"}/>
                    </div>
                </div>

            </div>

        </React.Fragment>
    )
}

export default PopoverDemo;