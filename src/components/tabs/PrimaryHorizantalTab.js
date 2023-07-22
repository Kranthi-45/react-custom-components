import React from "react";
// import { useTranslation } from "react-i18next";
import "./Tabs.css";
// import PrimaryHorizontalTab from "../utils/PrimaryTabDemo";

const Tabs = (props) => {

const { selected, setSelected } = props;
//   const { t } = useTranslation();
// const {PrimaryTab, state, onClose } = props;
const {PrimaryTab} = props;

  return (
    <div className="tab-container">
      <div className="tab-parent-container">
      {PrimaryTab?.map((Item, index ) => (
        <div
          key={index} className={`tab-children${selected === index ? " active" : ""}`}
          onClick={() => {
            setSelected(index);
            props && props.onNavigate();
          }}
        >
          {Item.name}
          {/* Tab1 */}
        </div>
        ))}
        {/* <div
          className={`tab-children${selected === 1 ? " active" : ""}`}
          onClick={() => {
            setSelected(1);
            props && props.onNavigate();
          }}
        >
          Tab2
        </div> */}
      </div>
      {
        props.components.map((item, index) => {
          return (
            <div key={index} style={{ display: index === selected ? "block" : "none" }}>
              {item}
            </div>
          );
        })
      }
    </div>
  );
};

export default Tabs;