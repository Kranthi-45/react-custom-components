import "./SecondaryHorizontalTab.css";
import React, { useState, useRef, useEffect } from "react";

const SecondaryHorizontaltab = (props) => {
  const { selected, setSelected } = props;
  const {
    SecondaryTab,
    state,
    onClose,
    initialSelectedIndex,
    SecondarySelectTab,
  } = props;
  const [selectedOption, setSelectedOption] = useState("");
  const [isOpen, setPopoverOpen] = useState(false);

  const menuClass = `dropdown-menu${isOpen ? " show" : ""}`;

  return (
    <div className="tab-container">
      <div className="tab-parent-container">
        {SecondaryTab?.map((Item, index) => (
          <div
            key={index}
            className={`tab-children${selected === index ? " active" : ""}`}
            onClick={(e) => {
              const nodeList = document.querySelectorAll(
                ".dropdown .dropdown-menu"
              );
              nodeList.forEach((element) => {
                element.classList.remove("show");
              });
              // document.querySelector(".dropdown .dropdown-menu")?.classList?.remove("show")
              e.currentTarget
                .querySelector(".dropdown .dropdown-menu")
                ?.classList?.add("show");
              console.log("ee", e);
              setSelected(index);
              props && props.onNavigate();
            }}
          >
            {Item.type == "select" && (
              <>
                {SecondarySelectTab?.map((Item, index) => (
                  <div className="dropdown">
                    <div
                      key={index}
                      className="selected-option "
                      type="button"
                      id="dropdownMenuButton"
                      onClick={(e) => {
                        // document.querySelector(".dropdown .dropdown-menu")?.classList?.remove("show")
                        const nodeList = document.querySelectorAll(
                          ".dropdown .dropdown-menu"
                        );
                        nodeList.forEach((element) => {
                          element.classList.remove("show");
                        });

                        e.currentTarget
                          .querySelector(".dropdown .dropdown-menu")
                          ?.classList?.add("show");
                        console.log("ee", e);
                        e.preventDefault();
                         setPopoverOpen(!isOpen)
                      }}
                    >
                      <div>{Item.name}</div>
                      <div>
                        <svg
                          id="Sorting"
                          xmlns="http://www.w3.org/2000/svg"
                          width="15"
                          height="5"
                          viewBox="0 0 6 4"
                        >
                          <path
                            id="Path_1041"
                            data-name="Path 1041"
                            d="M11,3H5L8,7Z"
                            transform="translate(-5 -3)"
                            fill="#6B6B6B"
                          />
                        </svg>
                      </div>
                    </div>
                    {/* {isOpen ? ( */}
                    <div
                      className={menuClass}
                      aria-labelledby="dropdownMenuButton"
                    >
                      {Item.options?.map((opt, index) => (
                        <div className="dropdown-item" key={index}>{opt}</div>
                      ))}
                    </div>
                    {/* ) : null} */}
                  </div>
                ))}
              </>
            )}
            {Item.type != "select" && <>{Item.name}</>}
          </div>
        ))}
      </div>
      {props.components.map((item, index) => {
        return (
          <div
            key={index}
            style={{ display: index === selected ? "block" : "none" }}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default SecondaryHorizontaltab;
