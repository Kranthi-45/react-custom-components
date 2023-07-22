import React, {
  forwardRef,
  useImperativeHandle,
  useState,
  useEffect,
} from "react";
// import { Subject } from "@oneui/inter-communication-lib";

import "./Wizard.css";

let STEP = 0;

const modelBodyStyle = {
  padding:0
}

const WizardWrapper = (props, ref) => {
  useImperativeHandle(ref, () => ({
    next: async () => {
      await validateAndProceed();
    },
    prev: () => {
      goPrevious();
    },
    reset: () => {
      doReset();
    },
    // cancel: () => {
    //   onCancel();
    // }
  }));

  useEffect(() => {
    // const disableNextData = new Subject("DISABLE_NEXT_EVENT");
    // disableNextData.subscribe({ type: "DISABLE_NEXT_EVENT" }, (data) => {
    //   console.log("triggered disable next event", data.isDisabled);
    //   setIsNextDisabled(data.isDisabled);
    // });
  }, []);

  const [step, setStep] = useState(0);
  const [isNextDisabled, setIsNextDisabled] = useState(false);

  const list = props.list.map((comp) => ({
    ...comp,
    ref: React.createRef(),
  }));
  console.log("list - ", list);

  const validateAndProceed = async () => {
    if (props.validate) {
      const isValid = await list[step].ref.current.validate();
      if (isValid) {
        await goNext();
      }
    } else {
      await goNext();
    }
  };
  const goNext = async () => {
    if (STEP < props.list.length) {
      if (STEP === props.list.length - 1) {
        setStep(STEP);
      } else {
        setStep(++STEP);
      }
    }
  };
  const goPrevious = () => {
    if (STEP > 0) {
      setStep(--STEP);
    }
  };
  const doReset = () => {
    if (STEP !== 0) {
      STEP = 0;
      setStep(0);
    }
  };
  const onCancel = () => {
    props.onCancel();
  };
  const onClose = () => {
    props.onClose();
  };
  const doDisbaleNext = () => {
    setIsNextDisabled(true);
  };
  const doEnableNext = () => {
    setIsNextDisabled(false);
  };
  const RenderComponent = ({ component }) => {
    console.log("component - ", component);
    const Component = component.component;

    return (
      <Component
        ref={component.ref}
        {...component.props}
        disableNext={doDisbaleNext}
        enableNext={doEnableNext}
      />
    );
  };

  const handleWizardClick = (header) => {
    if (header.done) {
      var headerIndex = list.map((o) => o.title).indexOf(header.title);
      STEP = headerIndex;
      setStep(headerIndex);
    }
  };

  const Header = ({ list, active }) => {
    console.log("active - ", active);
    const headers = list.map((item, i) => {
      if (i === active) {
        console.log("active");
        return {
          ...item,
          active: true,
        };
      } else if (i < active) {
        return {
          ...item,
          done: true,
        };
      } else {
        return item;
      }
    });
    console.log(headers);
    return (
      <div id="flowBoxes">
        {headers.map((header, i) => (
          <div key={i}
            className={`${header.done ? "done" : ""} ${header.active ? "active" : ""
              } ${i === 0 ? "right" : `right left ${header.lastHeaderComponent ? "lastHeader" : ""}`}`}
            onClick={() => {
              handleWizardClick(header);
            }}
          >
            <span className="headerCount">
              {(header.done ? "" : (header.componentCount ? <span className="headerCountColor">{header.componentCount}{"  "}</span> : ""))}
            </span>
            <span className="headerText">{header.title}</span>
          </div>
        ))}
      </div>
      // <ul className="nav">
      //   {headers.map((header, i) => (

      //     <li key={i}>
      //       <div
      //         className={`header-item-wrapper ${header.done ? "done" : ""} ${
      //           header.active ? "active" : ""
      //         } ${i===0 ? "right" : "right left"}`}
      //         style={{ width: "150px" }}
      //         onClick={() => {
      //           handleWizardClick(header);
      //         }}
      //       >
      //         <div
      //           className={`middle-arrow title-item ${
      //             header.done ? "done" : ""
      //           } ${header.active ? "active" : ""}`}
      //           style={{ height: "100%" }}
      //         ></div>
      //         <span>{header.title}</span>
      //       </div>
      //       {/* <div id="flowBoxes">
      //         <div className="right"></div>
      //       </div> */}
      //     </li>
      //   ))}
      // </ul>
    );
  };

  const WizardButtons = (props) => {
    return (
      <div className="card-footer text-muted">
        <div className="button-wrapper float-right">
          <button
            type="button"
            className="btn btn-app-tertiary"
            onClick={() => {
              onCancel();
            }}
          >
            {list[step].cancelButtonText}
          </button>
          {step !== 0 && (
            <button
              type="button"
              className={`btn ${props.secondaryButtonClass ? props.secondaryButtonClass : 'btn-app-secondary'}`}
              onClick={() => {
                goPrevious();
              }}
            >
              {list[step].previousButtonText}
            </button>
          )}
          <button
            type="button"
            className="btn btn-app-primary"
            disabled={isNextDisabled ? isNextDisabled : "" || list[step].isNextButtonDisabled ? true : false}
            onClick={async () => {
              await validateAndProceed();
            }}
          >
            {list[step].nextButtonText}
          </button>
        </div>
      </div>
    )
  }
  const WizardContent = () =>{

    return (
      <div
        className={`card wizard-naviation ${
          props.customClass ? props.customClass : ""
        }`}
      >
        {props.header && (
          <div className="card-header wizard-header">
            <div className="row">
              <div className="col-md-11">
                <h4 className="text-left">{props.header}</h4>
              </div>
              <div className="col-md-1 text-right">
                <span
                  className="wizard-header-close mt-1"
                  onClick={() => {
                    onClose();
                  }}
                >
                  x
                </span>
              </div>
            </div>
          </div>
        )}
  
        <div className="card-body">
          <div className="header-wrapper mb-2">
            <div className="wizard-header-container">
              <div className="header-container">
                <div className="title-wrapper">
                  <Header list={list} active={step} />
                </div>
              </div>
            </div>
          </div>
          <RenderComponent component={list[step]} />
        </div>
       
          {props.showDefaultButtons ? <WizardButtons secondaryButtonClass={props.secondaryButtonClass} /> : null}
          {/* {!props.showDefaultButtons && props.showWizardButtons ? props.showWizardButtons : null} */}
        
      </div>
    );
  }


  if(props.isModal){
    return (
      <div className="modal modal-backdrop wizard-model" style={{"display":"block"}} role={"dialog"}>
        <div className="modal-dialog" role={"document"}>
          <div className="modal-content">
            <div className="modal-body" style={modelBodyStyle}>
              <WizardContent isButtonsEnabled={false}/>
            </div>
          </div>
        </div>
      </div>
    )
  }else{
    return (
      <WizardContent/>
    )
  }

  
};

export default forwardRef(WizardWrapper);
