import React, {
    forwardRef,
    useImperativeHandle,
    useRef,
    useState,
    useEffect,
  } from "react";
import Wizard from "./Wizard";

  //   import { Subject } from "@oneui/inter-communication-lib";
  
  const WizardDemo = () => {
    // const [disableNext, setDisableNext] = useState(false);
  
    // useEffect(() => {
    //   const menuCollapseData = new Subject("DISABLE_NEXT_EVENT");
    //   menuCollapseData.publish({
    //     type: "DISABLE_NEXT_EVENT",
    //     event: "DISABLE_NEXT_EVENT",
    //     payload: {
    //       isDisabled: disableNext,
    //     },
    //   });
    // }, [disableNext]);
  
    const ref = useRef();
    const DummyComponent = forwardRef(({ text, disableNext, enableNext }, ref) => {
      useImperativeHandle(ref, () => ({
        validate: async () => {
          console.log("validating");
          return true;
        },
      }));
      return (
        <div>
          test component {text}
          <button onClick={enableNext}>Enable</button>
          <button onClick={disableNext}>Disable</button>
        </div>
      );
    });
  
    // const handleNext = () => {
    //     ref.current.next();
    // }
    // const handlePrev = () => {
    //     ref.current.prev();
    // }
    // const handleReset = () => {
    //     ref.current.reset();
    // }
  
    return (
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-8">
          <Wizard
            ref={ref}
            header="Test"
            validate={true}
            customClass="app-wizard"
            showDefaultButtons={true}
            isModal={false}
            list={[
              {
                title: "Supplier Details",
                props: {
                  text: "Supplier",
                },
                componentCount: 1,
                component: DummyComponent,
                cancelButtonText: "Cancel",
                previousButtonText: "Previous",
                nextButtonText: "Next",
              },
              {
                title: "Paired Details",
                props: {
                  text: "Paried",
                },
                componentCount: 2,
                component: DummyComponent,
                cancelButtonText: "Cancel",
                previousButtonText: "Previous",
                nextButtonText: "Next",
              },
              {
                title: "Unpaired Details",
                props: {
                  text: "UnPaired",
                },
                componentCount: 3,
                component: DummyComponent,
                cancelButtonText: "Cancel",
                previousButtonText: "Previous",
                nextButtonText: "Next",
                lastHeaderComponent: true,
              },
              
            ]}
            onCancel={(reason) => {
              console.log(reason);
            }}
            onClose={() => {
              console.log("on Close");
            }}
          />
          </div>
        </div>
        {/* <div className="row">
                  <button className="btn" onClick={handlePrev}>Prev</button>
                  <button className="btn" onClick={handleNext}>Next</button>
                  <button className="btn" onClick={handleReset}>Reset</button>
              </div> */}
      </div>
    );
  };
  
  export default WizardDemo;
  

//   <Wizard
//   ref={wizardRef}
//   header=""
//   validate={true}
//   customClass="app-wizard"
//   showDefaultButtons={false}
//   list={[
//     {
//       componentCount: 1,
//       title: t(
//         "engrafi_locale.simSwap.formFields.title",
//         WIZARD_TITLE.msisdnVerification
//       ),
//       component: MsisdnVerification,
//       props: {
//         wizardRef: wizardRef,
//         getALLAccountData: getALLAccountData,
//         msisdnVerData: msisdnVerData,
//         handleOnSearch: handleOnSearch,
//         isShowSearch: isShowSearch,
//       },
//       cancelButtonText: t(
//         "engrafi_locale.common.buttons.cancel",
//         "Cancel"
//       ),
//       previousButtonText: t(
//         "engrafi_locale.common.buttons.previous_button_text",
//         "Previous"
//       ),
//       nextButtonText: t(
//         "engrafi_locale.common.buttons.next_button_text",
//         "Next"
//       ),
//       lastHeaderComponent: false,
//     },
//     {
//       componentCount: 2,
//       title: t(
//         "engrafi_locale.simSwap.formFields.customerVerification",
//         WIZARD_TITLE.customerVerification
//       ),
//       props: {
//         wizardRef: wizardRef,
//         updateKycRef: updateKycRef,
//         updateKycFormRef: updateKycFormRef,
//         getALLAccountData: getALLAccountData,
//         overviewShow: overviewShow,
//         goToSimSwapPage: goToSimSwapPage,
//         isGoToNext: isGoToNext,
//         alertModalRef: alertModalRef,
//         msisdnVerData: msisdnVerData,
//         varifieDocumentNumber: varifieDocumentNumber,
//         isShowTryAnotherWayPopUp: isShowTryAnotherWayPopUp,
//         account: account,
//         documentDetailsWithMissMatchDoc: documentDetailsWithMissMatchDoc,
//         isDocumentMatch: isDocumentMatch,
//         setDocumentDetailsWithMissMatchDoc: setDocumentDetailsWithMissMatchDoc,
//         setIsDocumentMatch: setIsDocumentMatch,
//         alertRef: alertRef,
//         alertRefSubmit: alertRefSubmit,
//         uploadDocuments,
//         uploadResponseData,
//         setUploadResponse
//       },
//       component: !isOverviewShow
//         ? CustomerVerification
//         : CustomerOverview,
//       cancelButtonText: t(
//         "engrafi_locale.common.buttons.cancel",
//         "Cancel"
//       ),
//       previousButtonText: t(
//         "engrafi_locale.common.buttons.previous_button_text",
//         "Previous"
//       ),
//       nextButtonText: t(
//         "engrafi_locale.common.buttons.next_button_text",
//         "Next"
//       ),
//       lastHeaderComponent: false,
//     },
//     {
//       componentCount: 3,
//       title: t(
//         "engrafi_locale.simSwap.formFields.simDetails",
//         WIZARD_TITLE.simDetails
//       ),
//       props: {
//         wizardRef: wizardRef,
//         msisdnVerData: msisdnVerData,
//         iccidValue: iccidValue,
//         submitSimSwap: submitSimSwap,
//         simValidation: simValidation,
//         isSimSwap: isSimSwap,
//         setIccid: setIccid,
//         isValidate: isValidate,
//         alertRef: alertRef,
//         alertRefSubmit: alertRefSubmit,
//         formRef: formRef,
//         reason: reason
//       },
//       component: NewSimPairing,
//       cancelButtonText: t(
//         "engrafi_locale.common.buttons.cancel",
//         "Cancel"
//       ),
//       previousButtonText: t(
//         "engrafi_locale.common.buttons.previous_button_text",
//         "Previous"
//       ),
//       nextButtonText: t(
//         "engrafi_locale.common.buttons.submit",
//         " Submit"
//       ),
//       lastHeaderComponent: true,
//     },
//   ]}
//   onCancel={(reason) => {
//     console.log("go to First Screen");
//     setIsShowSearch(false);
//     setIsOverviewShow(false);
//     setIccidValue("");
//   }}
//   onClose={() => {
//     console.log("on Close");
//   }}
// />