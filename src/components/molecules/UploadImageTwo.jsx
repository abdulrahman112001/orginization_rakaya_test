/* eslint-disable react/prop-types */
import { useState } from "react";
import Box from "@mui/material/Box";
import { useDropzone } from "react-dropzone";
import UploadImageIcon from "../atoms/icons/UploadImageIcon";
import CheckUploadImageIcon from "../atoms/icons/CheckUploadImageIcon";
import { useFormikContext } from "formik";

const UploadImageTwo = ({ name, label }) => {
  const [files, setFiles] = useState([]);
  console.log(
    "🚀 ~ file: UploadImageTwo.jsx:9 ~ UploadImageTwo ~ files:",
    files
  );
  const { setFieldValue } = useFormikContext();

  const { getRootProps, getInputProps } = useDropzone({
    multiple: false,
    accept: [
      "image/*", // يقبل ملفات الصور
      ".pdf", // يقبل ملفات PDF
      ".doc", // يقبل ملفات Word
      ".docx", // يقبل ملفات Word
    ],
    onDrop: (acceptedFiles) => {
      setFiles(acceptedFiles.map((file) => Object.assign(file)));
      setFieldValue(name, acceptedFiles.map((file) => Object.assign(file)))
    },
  });

  return (
    <Box
      {...getRootProps({ className: "dropzone  " })}
      sx={files.length ? { height: "" } : {}}
    >
      <input
        {...getInputProps()}
        name={name}
      />
      <div className="relative cursor-pointer">
        <div className="flex flex-col items-center gap-5 bg-[#F5F5F5]  rounded-md ">
          <h2 className="bg-[#EFEFEF] w-full text-center p-3 rounded-md">
            {label}
          </h2>
          {!files.length ? (
            <UploadImageIcon />
          ) : (
            <img
              src={CheckUploadImageIcon}
              width={"40"}
              height={"40"}
              alt="check"
            />
          )}
          <p className="px-1 m-0 text-center">اختر ملف أو قم باسقاطه هنا</p>
          <div className="rounded-md ">
            {/* <PreviewImage files={files ? files : []} /> */}
          </div>
        </div>
      </div>
    </Box>
  );
};

export default UploadImageTwo;
