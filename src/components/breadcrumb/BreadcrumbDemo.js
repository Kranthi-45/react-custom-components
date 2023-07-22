// import React from "react";
// import Breadcrumb from "./components/Breadcrumb";
import React, { useRef, forwardRef, useImperativeHandle } from "react";
import Breadcrumb from "./Breadcrumb";
// import Breadcrumb from "./components/Breadcrumb";
// import Wizard from "@oneui/react-components/src/components/Wizard";

const DummyComponent = forwardRef(({text,breadcrumbRef},ref) => {
    useImperativeHandle(ref, () => ({
      validate: async () => {
        //this method will be called on click of next
        console.log('validating');
        return true;//return false to stop wizard from going forward
      }
    }));
    return (
        <>
    <div>test component 0 {text}</div>
    <input type="button"  value="create user" style={{marginTop:"20px", width:"150px"}} onClick={() => {
        breadcrumbRef.current.next();
    }}/>
    </>)
});


const DummyComponent1 = forwardRef(({text,breadcrumbRef},ref) => {
    useImperativeHandle(ref, () => ({
      validate: async () => {
        //this method will be called on click of next
        console.log('validating');
        return true;//return false to stop wizard from going forward
      }
    }));
    return (
        <>
    <div>test component 1 {text}</div>
    <input type="button" value="add" style={{marginTop:"20px",width:"150px"}} onClick={() => {
        breadcrumbRef.current.next();
    }}/>
    </>)
});

const DummyComponent2 = forwardRef(({text,breadcrumbRef},ref) => {
    useImperativeHandle(ref, () => ({
      validate: async () => {
        //this method will be called on click of next
        console.log('validating');
        return true;//return false to stop wizard from going forward
      }
    }));
    return (
        <>
    <div>test component 2 {text}</div>
    <input type="button"  value="view" style={{marginTop:"20px", width:"150px"}} onClick={() => {
        breadcrumbRef.current.next();
    }}/>
    </>)});

export const BreadCrumbDemo = () => {
const breadcrumbRef = useRef();

  return (
    <div>
      <Breadcrumb
              ref={breadcrumbRef}
              header='Test'
              validate={true}
              customClass="app-breadcrumb"
              showDefaultButtons={true}
              list={[{
                title : 'User',
                props: {
                  breadcrumbRef: breadcrumbRef,
                  text : 'Supplier'
                },
                component : DummyComponent,
                cancelButtonText: "Cancel",
                previousButtonText: "Previous",
                nextButtonText: "Next"
              },{
                title : 'Create',
                props: {
                  breadcrumbRef: breadcrumbRef,
                  text : 'Paried'
                },
                component : DummyComponent1,
                cancelButtonText: "Cancel",
                previousButtonText: "Previous",
                nextButtonText: "Next"
              },{
                title : 'View',
                props: {
                  breadcrumbRef: breadcrumbRef,
                  text : 'UnPaired'
                },
                component : DummyComponent2,
                cancelButtonText: "Cancel",
                previousButtonText: "Previous",
                nextButtonText: "Next",
              }]}
              onCancel={(reason)=>{
                console.log(reason);
              }}
              onClose={() => {
                console.log('on Close');
              }}
            />
    </div>
  );
}

export default BreadCrumbDemo;

