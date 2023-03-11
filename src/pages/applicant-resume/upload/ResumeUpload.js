import React, { useState } from "react";
import FormButton from "../../../components/custom-button/FormButton";
import FormTextInput from "../../../components/custom-input/FormTextInput";
import {
  Center,
  Heading,
  Label,
  ResumeUploadParent,
  UploadArea,
  Wrapper,
} from "./resume.upload.styles";

const ResumeUpload = () => {
  const [selectedDoc, setSelectedDoc] = useState(null);
  const [error, setError] = useState(null);

  const handleSelectDoc = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile.type !== "application/pdf") {
      return setError(true);
    }

    setSelectedDoc(selectedFile);
  };

  console.log(selectedDoc);
  return (
    <ResumeUploadParent>
      <Wrapper>
        <Heading>Add Document</Heading>

        <FormTextInput labelName="Title" placeholder="" width={"100%"} />

        <p
          style={{ color: "#5d5e5f", fontSize: "1.8rem", marginTop: "2.5rem" }}
        >
          Attach document
        </p>
        <UploadArea>
          {error && <p>It&apos;s wrong file type.</p>}
          {!selectedDoc ? (
            <Label>
              <Center>
                <p className="">Browse files</p>
              </Center>
              <input
                type="file"
                name="upload-image"
                className="file-input"
                style={{ width: "0px" }}
                onChange={handleSelectDoc}
              />
            </Label>
          ) : (
            <>
              <Label>
                <Center>
                  <h2
                    className=""
                    style={{
                      color: "#5d5e5f",
                      fontSize: "1.8rem",
                      marginTop: "2.5rem",
                    }}
                  >
                    {selectedDoc?.name}
                  </h2>
                </Center>

                <input
                  type="file"
                  name="upload-image"
                  className="file-input"
                  style={{ width: "0px" }}
                  onChange={handleSelectDoc}
                />
              </Label>
            </>
          )}
        </UploadArea>
        <p>Accepted file type: doc and PDF only</p>

        <FormButton text="Upload" backgroundColor="#0570fb" />
      </Wrapper>
    </ResumeUploadParent>
  );
};

export default ResumeUpload;
