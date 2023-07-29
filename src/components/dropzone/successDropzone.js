import React, { useMemo, useState } from "react";
import { useDropzone } from "react-dropzone";
import "./successDropZone.css";
// import uploadSuccessIcon from "../resources/file_upload_success.svg";

function bytesToSize(bytes) {
  var sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  if (bytes === 0) return "0 Byte";
  var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
  return Math.round(bytes / Math.pow(1024, i), 2) + " " + sizes[i];
}

const baseStyle = {
  padding: "20px",
  borderWidth: 2,
  borderColor: "#bbc2c6",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
};

const activeStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

function SuccessDropZone(props) {
  const [fileName, setFileName] = useState(props.fileName);
  const [fileSize, setFileSize] = useState(props.fileSize);

  const onDrop = (acceptedFiles) => {
    setFileName(acceptedFiles[0].path);
    setFileSize(acceptedFiles[0].size);
  };

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
    // acceptedFiles,
    open,
  } = useDropzone({
    accept: props.acceptedFileTypes,
    maxSize: props.maxSize,
    noClick: true,
    noKeyboard: true,
    multiple: false,
    onDrop,
  });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept]
  );

  return (
    <div className="success-drag-and-drop-container">
      <div className="upload-section">
        <div {...getRootProps({ style })}>
          <input {...getInputProps()} />

          <div className="success-upload-section">
            <div className="uploaded-file">
              <div className="success-file-icon">
                {/* <img src={uploadSuccessIcon} alt="file=icon"></img> */}
                <img src={""} alt="file=icon"></img>
              </div>
              <div className="uploaded-file-details">
                <div className="file-name">{fileName}</div>
                <div className="file-size">{bytesToSize(fileSize)}</div>
              </div>
            </div>
            <div className="success-drag-select-text">
              <span onClick={open}>Drag and drop here <span className="or-text">or</span> Select new file</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuccessDropZone;
