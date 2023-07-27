import React from "react";
import "./Loader.css";
const Loader = (props) => {
  return (
    <div className={`loader_container ${props.loaderTextPosition && (props.loaderTextPosition==="right" || props.loaderTextPosition==="bottom") ? props.loaderTextPosition : "bottom"}`}>
      <div className={`loader ${props.size ? props.size : "default"}`}></div>
      {props.isPercentageEnabled ? <div className={`loaderPercentage ${props.size ? props.size : "default"}`} style={{color: props.loaderTextColor ? props.loaderTextColor : "#000000"}}>{props.percentageValue && props.percentageValue ? props.percentageValue : ""}</div> : ""}
      
      <div className={`loaderText ${props.size ? props.size : "default"}`}><span style={{color: props.loaderTextColor ? props.loaderTextColor : "#000000"}}>{props.loaderText ? props.loaderText : "Loading..."}</span></div>
    </div>
  );
};

export default Loader;
