import React, { useState, useRef, useEffect } from "react";
import SecondaryHorizontaltab from "./SecondaryHorizontalTab";

// import  SecondaryTab from "../components/Secondarytab";
// const [selected, setSelected] = useState(0);


const SecondaryTab = [
    {
      name: "Active Tab",
    
    },
    {
      name: "Tab Label",
      type:"select",
      options: ["options1", "option2", "option3"]
    },
   
    {
        name: "Tab Label",
        type:"select",
        // options: ["options1", "option2", "option3"]
    },
    {
        name: "Tab Label",
    },
  ];

  const SecondarySelectTab = [
    {
      name: "Nested Tab",
      type:"select",
      options: ["options1","option2"]
    },
  ];

const DummyComponent1 = () => {
  return (
    <React.Fragment>
      <h3>Test Dummy Component 1</h3>
    </React.Fragment>
  );
};

const DummyComponent2 = () => {
  return (
    <React.Fragment>
      <h3>Test Dummy Component 2</h3>
    </React.Fragment>
  );
};

const DummyComponent3 = () => {
  return (
    <React.Fragment>
      <h3>Test Dummy Component 3</h3>
    </React.Fragment>
  );
};


const SecondaryHorizontalDemo = () => {
    const [selected, setSelected] = useState(0);
    // const [selected, setSelected] = useState("");
    const navRef = useRef(null);
    const onNavigate = () => {
        console.log("onnavigate")
        if (navRef.current) {
          navRef.current.handleOnNavigation();
        }
      }

    //   const handleSelect = (selected) => {
    //     setSelected(selected);
    //   };

  return (
    <div>
      <SecondaryHorizontaltab
        components={[
          <DummyComponent1 />,
          <DummyComponent2 />,
          <DummyComponent3 />,
        ]}
      initialSelectedIndex={2} 
        selected={selected}
        setSelected={setSelected}
        onNavigate={onNavigate}
        SecondaryTab={SecondaryTab}
        SecondarySelectTab={SecondarySelectTab}
        // onSelect={handleSelect} 
      />
    </div>
  );
};

export default SecondaryHorizontalDemo;
