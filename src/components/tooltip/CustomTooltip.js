/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Tooltip } from 'react-tooltip';

const CustomTooltip = (props) => {
  const { effect = "solid", content = "", position = "top", uniqueId, colorType } = props;
  // Available values 'dark' | 'light' | 'success' | 'warning' | 'error' | 'info'
  let colorTypes = ['dark','light','success','warning','error','info']
  console.log("colorType", colorType,!colorTypes.includes(colorType) );
  return (
    <React.Fragment>
      { !colorTypes.includes(colorType) ?
      <div key={uniqueId}>
        <span data-tip={true} data-tooltip-id={uniqueId} >
          <p>{content}</p>
          <Tooltip effect={effect} delayHide={100} delayShow={300} className="custom-tooltip-wrapper" place={position} id={uniqueId}>
            {content}
          </Tooltip>
        </span>
      </div>
        :
      <div key={uniqueId}>
        <a data-tooltip-id={uniqueId} data-tooltip-content={content} data-tooltip-variant={colorType} >
          {content}
        </a>
        <Tooltip effect={effect} delayHide={100} delayShow={300} id={uniqueId}  place={position} />
      </div>
  }
    </React.Fragment>
  );
};

export default CustomTooltip;

