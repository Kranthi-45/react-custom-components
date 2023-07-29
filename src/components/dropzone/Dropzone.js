import React, { useMemo } from "react";
import { useDropzone } from "react-dropzone";
import '../../themes/base-theme.css'

function bytesToSize(bytes) {
  var sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  if (bytes === 0) return "0 Byte";
  var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
  return Math.round(bytes / Math.pow(1024, i), 2) + " " + sizes[i];
}

const activeStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

function DropZone(props) {
  const onDrop = (file) => {
    if (typeof props.onDropFile === "function") {
      props.onDropFile(file);
    }
  };
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
    open,
  } = useDropzone({
    noClick: true,
    noKeyboard: true,
    multiple: false,
    onDrop,
  });

  const style = useMemo(
    () => ({
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept]
  );

  if (props.uploadedStatus === "progress") {
    return (
      <div className="progress-container drag-and-drop-container">
        <div className="progress-section">
          <div className="progress-upload-section">
            <div className="progress-file file-display">
              <div className="progress-file-icon">
                {/* <img src={uploadProgressIcon} alt="file=icon"></img> */}
                <svg
                  width="40px"
                  height="50px"
                  viewBox="0 0 40 50"
                >
                  <g
                    id="Recycle_MSISDN"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <g
                      id="Recycle_MSISDN_02"
                      transform="translate(-557.000000, -110.000000)"
                      fill="#EAEDF0"
                      fill-rule="nonzero"
                    >
                      <g
                        id="Group-2"
                        transform="translate(557.000000, 110.000000)"
                      >
                        <path
                          d="M8.13758467,25.9605002 L1.66666667,29.3928311 L1.66666667,48.4212948 L38.3333333,48.4212948 L38.3333333,25.0110621 L24.6229525,30.2595698 L19.1755602,26.5015424 L8.93617025,26.5015424 C8.56997475,26.5015424 8.25755908,26.2766099 8.13758467,25.9605002 Z M10.2402496,24.845196 L16.7746279,24.845196 L13.9343505,22.8857557 L10.2402496,24.845196 Z M0,0 L27.475455,0 L40,11.9218084 L40,18.2198104 L24.8562692,24.3266305 L14.0520737,16.563464 L0,24.0170228 L0,0 Z M30.2127658,18.2198104 L18.3623278,18.2198104 L20.6604125,19.8761568 L30.2127658,19.8761568 C30.6825533,19.8761568 31.06383,19.5059634 31.06383,19.0479836 C31.06383,18.5900038 30.6825533,18.2198104 30.2127658,18.2198104 Z M8.93617025,13.2507712 L17.4468085,13.2507712 C17.9165957,13.2507712 18.2978723,12.8805777 18.2978723,12.422598 C18.2978723,11.9646182 17.9165957,11.5944248 17.4468085,11.5944248 L8.93617025,11.5944248 C8.466383,11.5944248 8.08510642,11.9646182 8.08510642,12.422598 C8.08510642,12.8805777 8.466383,13.2507712 8.93617025,13.2507712 Z M28.2910583,2.95339702 L28.2910583,11.1712765 L36.755515,11.1712765 L28.2910583,2.95339702 Z M0,50 L0,28.4674965 L14.0520737,21.0139378 L24.8562692,28.4674965 L40,22.6702841 L40,50 L0,50 Z M30.2127658,31.4705816 C30.6825533,31.4705816 31.06383,31.840775 31.06383,32.2987548 C31.06383,32.7567346 30.6825533,33.126928 30.2127658,33.126928 L8.93617025,33.126928 C8.466383,33.126928 8.08510642,32.7567346 8.08510642,32.2987548 C8.08510642,31.840775 8.466383,31.4705816 8.93617025,31.4705816 L30.2127658,31.4705816 Z M30.2127658,38.0959671 C30.6825533,38.0959671 31.06383,38.4661608 31.06383,38.9241401 C31.06383,39.3821201 30.6825533,39.7523138 30.2127658,39.7523138 L8.93617025,39.7523138 C8.466383,39.7523138 8.08510642,39.3821201 8.08510642,38.9241401 C8.08510642,38.4661608 8.466383,38.0959671 8.93617025,38.0959671 L30.2127658,38.0959671 Z"
                          id="document_missing"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
              <div className="progress-file-details file-details">
                <div className="progress-filename-button-conatainer">
                  <div className="file-name">{props.uploadFileName}</div>
                  <button
                    className="upload-cancel-button"
                    onClick={props.onUploadCancel}
                  >
                    {props?.langChangedValues?.cancel ? props?.langChangedValues?.cancel : "Cancel"}          
                  </button>
                </div>

                <div className="file-size">
                  {bytesToSize(props.uploadFileSize)}
                </div>
                <progress
                  className={`file-upload-progress ${props?.progressBarWidth ? "update-progress-bar-width" : ""}`}
                  value={props.uploadedPercentage}
                  max="100"
                />
                <p className="percentage-text">
                  {parseInt(props.uploadedPercentage)}  {props?.langChangedValues?.uploading ? props?.langChangedValues?.uploading : "% uploading"}          
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (props.uploadedStatus === "success") {
    return (
      <div className="success-container drag-and-drop-container">
        <div className="upload-section">
          <div className="drop-zone" {...getRootProps({ style })}>
            <input {...getInputProps()} />

            <div className="success-upload-section">
              <div className="uploaded-file file-display">
                <div className="success-file-icon">
                  <svg
                    width="47px"
                    height="50px"
                    viewBox="0 0 47 50"
                  >
                    <g
                      id="Recycle_MSISDN"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <g
                        id="Recycle_MSISDN_03"
                        transform="translate(-714.000000, -120.000000)"
                        fill="#00D580"
                        fill-rule="nonzero"
                      >
                        <g
                          id="Group-2"
                          transform="translate(714.000000, 120.000000)"
                        >
                          <path
                            d="M38.754386,28.6358333 L38.754386,12.155 L26.7273333,0 L0,0 L0,50 L36.2807018,50 C42.1911579,50 47,45.14 47,39.1666667 C47,34.055 43.4741754,29.7691667 38.754386,28.6358333 Z M39.5993755,34.3537297 C39.8416769,33.9798814 40.3201262,33.8876546 40.6701172,34.1478661 C41.0185699,34.4080777 41.1047215,34.9210897 40.86242,35.294938 L40.86242,35.294938 L36.0825425,42.6475616 C35.9594687,42.8361326 35.7687044,42.9604742 35.5564021,42.9925889 C35.5210184,42.9975296 35.4856347,43 35.4510202,43 C35.2741017,43 35.1017984,42.9341237 34.9633404,42.8130759 L34.9633404,42.8130759 L31.2818963,39.5777239 C30.952674,39.2895149 30.9049829,38.7707386 31.174976,38.4191236 C31.4441998,38.0675087 31.929572,38.015631 32.2572559,38.3046635 L32.2572559,38.3046635 L35.2948704,40.9743024 Z M20.1875,38 C20.636,38 21,38.448 21,39 C21,39.552 20.636,40 20.1875,40 L20.1875,40 L8.8125,40 C8.364,40 8,39.552 8,39 C8,38.448 8.364,38 8.8125,38 L8.8125,38 Z M23.1578947,31 C23.6227368,31 24,31.448 24,32 C24,32.552 23.6227368,33 23.1578947,33 L23.1578947,33 L8.84210526,33 C8.37726316,33 8,32.552 8,32 C8,31.448 8.37726316,31 8.84210526,31 L8.84210526,31 Z M29.1851852,25 C29.634963,25 30,25.448 30,26 C30,26.552 29.634963,27 29.1851852,27 L29.1851852,27 L8.81481481,27 C8.36503704,27 8,26.552 8,26 C8,25.448 8.36503704,25 8.81481481,25 L8.81481481,25 Z M29.1851852,18 C29.634963,18 30,18.448 30,19 C30,19.552 29.634963,20 29.1851852,20 L29.1851852,20 L8.81481481,20 C8.36503704,20 8,19.552 8,19 C8,18.448 8.36503704,18 8.81481481,18 L8.81481481,18 Z M17.1666667,12 C17.6266667,12 18,12.448 18,13 C18,13.552 17.6266667,14 17.1666667,14 L17.1666667,14 L8.83333333,14 C8.37333333,14 8,13.552 8,13 C8,12.448 8.37333333,12 8.83333333,12 L8.83333333,12 Z M27,3 L36,12 L27,12 L27,3 Z"
                            id="Shape"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="uploaded-file-details file-details">
                  <div className="file-name">{props.uploadFileName}</div>
                  <div className="file-size">
                    {bytesToSize(props.uploadFileSize)}
                  </div>
                </div>
              </div>
              <div className="success-drag-select-text">
                <p className="uploaded successfully">{props?.langChangedValues?.uploadedSuccessText ? props?.langChangedValues?.uploadedSuccessText : "The fIle uploaded successfully"}</p>
              <p className="supported_text">
            {props?.langChangedValues?.supportedFiles ? props?.langChangedValues?.supportedFiles : "Supported Files and Sizes"} <b>{props.acceptedFileTypes}</b> {" "} {props?.langChangedValues?.forFile ? props?.langChangedValues?.forFile : "for a file and"}{" "}
              <b>{props.maxSize}</b>
            </p>
                <span className="dragDropText1" onClick={open}>
                {props?.langChangedValues?.dragandDrophere ? props?.langChangedValues?.dragandDrophere : "Drag and drop here "}  </span>{"  "}  <span className="or-text">{props?.langChangedValues?.orText ? props?.langChangedValues?.orText : ""} </span>{"  "}<span  onClick={open} className="dragDropText2"> {props?.langChangedValues?.selectNewFile ? props?.langChangedValues?.selectNewFile : ""}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (props.uploadedStatus === "upload") {
    return (
      <div className="drag-and-drop-container">
        <div className="upload-section" onClick={open}>
          <div className="drop-zone" {...getRootProps({ style })}>
          <span className="mandatoryText">{props?.langChangedValues?.mandatoryText ? props?.langChangedValues?.mandatoryText : ""}</span>
          <div>
          <input {...getInputProps()} />
            <span className="uploadButton">
            <button className="btn btn-app-primary" type="button" >
            {props?.langChangedValues?.selectFile ? props?.langChangedValues?.selectFile : "Select file"}
            </button>
            </span>
          
            <p className="title">
            {props?.langChangedValues?.uploadSelectText ? <span className="uploadSection-Text">{props?.langChangedValues?.uploadSelectText}</span> : ""} <br />
              <b>{props?.langChangedValues?.titleTextDrag ? props?.langChangedValues?.titleTextDrag : "DRAG"}</b>{" "}
              {props?.langChangedValues?.titleTextAnd ? props?.langChangedValues?.titleTextAnd : "and"}{" "}
              <b>{props?.langChangedValues?.titleTextDrop ? props?.langChangedValues?.titleTextDrop : "DROP"}</b>{" "}
              {props?.langChangedValues?.titleTextFiles ? props?.langChangedValues?.titleTextFiles : "your file here or"}<strong className="browseText">{props?.langChangedValues?.titleTextBrowse ? props?.langChangedValues?.titleTextBrowse : "Browse"}</strong>{" "}
              {props?.langChangedValues?.titleTextUpload ? props?.langChangedValues?.titleTextUpload : "to upload"}
            
            </p>
            <p className="or">{props?.langChangedValues?.titleOrText ? props?.langChangedValues?.titleOrText : "OR"}</p>
            <p className="supported_text">
            {props?.langChangedValues?.supportedFiles ? props?.langChangedValues?.supportedFiles : "Supported Files and Sizes"} <b>{props.acceptedFileTypes}</b>{" "}{props?.langChangedValues?.forFile ? props?.langChangedValues?.forFile : "for a file and"}{" "} <b>{props.maxSize}</b> 
              
            </p>
          </div>
            
          </div>
        </div>
      </div>
    );
  }
}

export default DropZone;
