import React, { useState, useRef } from "react";
import Tabs from "./PrimaryHorizantalTab";

// const [selected, setSelected] = useState(0);


const PrimaryTab = [
    {
      name: "Tab1",
    },
    {
      name: "Tab2",
      
    },
    {
      name: "Tab3",
    },
    // {
    //     name: "Tab4",
    // },
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


const PrimaryHorizontalTab = () => {
    const [selected, setSelected] = useState(0);
    const navRef = useRef(null);
    const onNavigate = () => {
        console.log("onnavigate")
        if (navRef.current) {
          navRef.current.handleOnNavigation();
        }
      }

  return (
    <div>
      <Tabs
        components={[
          <DummyComponent1 />,
          <DummyComponent2 />,
          <DummyComponent3 />,
        ]}
        selected={selected}
        setSelected={setSelected}
        onNavigate={onNavigate}
        PrimaryTab={PrimaryTab}
      />
    </div>
  );
};

export default PrimaryHorizontalTab;
