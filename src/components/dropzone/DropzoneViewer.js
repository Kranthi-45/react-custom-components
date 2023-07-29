
import React, { useState } from "react";
import DropZone from "@oneui/react-components/src/components/DropZone";

const uploadUrl = "http://localhost:8080/uploadProfilePicture";

const acceptedFileTypes = (
  <span>
    <b>CSV</b> and <b>Excel</b>
  </span>
);

const uploadedStatus = (data) => {
	console.log(data);
}
const maxSize = "1 MB";

const DropZoneViewer = () => {
  //File upload
  const [xhrObject, setXhrObject] = useState(null);

  const [uploadedStatus, setUploadedStatus] = useState("upload");
  const [percentage, setpercentage] = useState("0");
  const [uploadFileName, setUploadFileName] = useState("");
  const [uploadFileSize, setUploadFileSize] = useState("");

  const uploadUrl = "http://localhost:8080/uploadProfilePicture";
  const acceptedFileTypes = (
    <span>
      <b>CSV</b> and <b>Excel</b>
    </span>
  );

  const handleOnDropFile = (file) => {
    console.log("file on drop- ", file);
    onUploadFile(file[0], uploadUrl);
  };

  const onUploadFile = (file, uploadUrl) => {
    let data = new FormData();
    data.append("file", file);
    let request = new XMLHttpRequest();
    setXhrObject(request);

    request.open("POST", uploadUrl);

    request.onreadystatechange = function (oEvent) {
      if (request.readyState === 4) {
        if (request.status === 200) {
          console.log(request.responseText);
        } else {
          setUploadedStatus("upload");
          // props.onError("upload-url-invalid");
        }
      }
    };

    // upload progress event
    request.upload.addEventListener("progress", function (e) {
      // upload progress as percentage
      let percent_completed = (e.loaded / e.total) * 100;
      console.log(percent_completed);
      setpercentage(percent_completed);
      setUploadFileName(file.path);
      setUploadFileSize(file.size);
      setUploadedStatus("progress");
    });

    request.addEventListener("load", function (e) {
      // HTTP status message (200, 404 etc)
      console.log(request.status);
      if (request.status === 200) {
        setUploadedStatus("success");
      } else {
        setUploadedStatus("upload");
        setUploadedStatus("upload");
        console.log("Error", request);
      }
      // request.response holds response from the server
      console.log(request.response);
    });

    request.send(data);
  };

  const onUploadCancel = () => {
    xhrObject.abort();
    setUploadedStatus("upload");
  };
  //
  return (
    <div className="row my-3">
      <div>
        <DropZone
          maxSize="1 MB"
          progressBarWidth={true}
          acceptedFileTypes={acceptedFileTypes}
          onDropFile={(file) => {
            handleOnDropFile(file);
          }}
          uploadedStatus={uploadedStatus}
          uploadedPercentage={percentage}
          uploadFileName={uploadFileName}
          uploadFileSize={uploadFileSize}
          onUploadCancel={onUploadCancel}
          langChangedValues={{
              uploadedSuccessText: "The fIle uploaded successfully",
              mandatoryText : "mandatory",
              cancel : "Cancel",
              uploading : "% uploading",
              dragandDrophere: "Drag and drop here",
              orText : "or",
              selectNewFile: "Select new file",
              titleTextDrag : "Drag",
              titleTextAnd: "and",
              titleTextDrop : "drop",
              titleTextFiles : "your file here or ",
              titleTextBrowse: "Browse",
              titleTextUpload: "to upload",
              titleOrText: "OR",
              selectFile: "Select file",
              supportedFiles: "Supported Files and Sizes",
              forFile: "for a file and",
              uploadSelectText : "Upload"
          }         
          }
        />
      </div>
    </div>
  );
};

export default DropZoneViewer;