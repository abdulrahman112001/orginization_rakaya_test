/* eslint-disable react/prop-types */
import { useState } from "react";
import Box from "@mui/material/Box";
import { useDropzone } from "react-dropzone";
import UploadImageIcon from "../atoms/icons/UploadImageIcon";
import CheckUploadImageIcon from "../../assets/images/check.png";
import { useFormikContext } from "formik";
import PreviewImage from "./PreviewImage";

const UploadImageTwo = ({ name, label }) => {
  const { setFieldValue , values } = useFormikContext();
  const [files, setFiles] = useState(values[name]);
  console.log(
    "🚀 ~ file: UploadImageTwo.jsx:11 ~ UploadImageTwo ~ files:",
    files
  );


  const { getRootProps, getInputProps } = useDropzone({
    multiple: false,
    accept: ["image/*", ".pdf", ".doc", ".docx"],
    onDrop: (acceptedFiles) => {
      setFiles(acceptedFiles.map((file) => Object.assign(file)));
      setFieldValue(
        name,
        acceptedFiles.map((file) => Object.assign(file))
      );
    },
  });
  const isLargeFile = files?.length && files[0].size > 524288000; // 524288000 bytes = 0.5 gigabytes


  return (
    <div className="relative">
      <Box
        {...getRootProps({ className: "dropzone  " })}
        sx={files?.length ? { height: "" } : {}}
      >
        <input {...getInputProps()} name={name} />
        <div className="relative cursor-pointer">
          <div className="flex flex-col items-center gap-5 bg-[#F5F5F5]  rounded-md ">
            <h2 className="bg-[#EFEFEF] w-full text-center p-3 rounded-md">
              {label}
            </h2>
            {!files?.length ? (
              <UploadImageIcon />
            ) : (
              <img
                src={CheckUploadImageIcon}
                width={"40"}
                height={"40"}
                alt="check"
              />
            )}
             <p className="p-2 m-0 text-center">
              {isLargeFile
                ? "حجم الملف كبير  "
                : files?.length
                ? "تم رفع الملف بنجاح"
                : " اختر ملف أو قم باسقاطه هنا "}
            </p>
          </div>
        </div>
      </Box>
      <div className="absolute bottom-[-50px] rounded-md ">
        {
          !isLargeFile &&
        <PreviewImage files={files ? files : []} />
        }
      </div>
    </div>
  );
};

export default UploadImageTwo;
