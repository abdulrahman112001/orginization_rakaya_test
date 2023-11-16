/* eslint-disable react/prop-types */
import { useState } from "react";
import Box from "@mui/material/Box";
import { TextField } from "@mui/material";
import { useDropzone } from "react-dropzone";
import { useFormikContext } from "formik";
import PreviewImage from "./PreviewImage";
const UploadImage = ({ name, label }) => {
  const { setFieldValue  , values} = useFormikContext();
  console.log("🚀 ~ file: UploadImage.jsx:10 ~ UploadImage ~ values:", values)
  const [files, setFiles] = useState([]);

  const { getRootProps, getInputProps } = useDropzone({
    multiple: false,
    accept: {
      "image/*": [".png", ".jpg", ".jpeg", ".gif"],
    },
    onDrop: (acceptedFiles) => {
      setFiles(acceptedFiles.map((file) => Object.assign(file)));
      setFieldValue(name, acceptedFiles[0]); // استخدم acceptedFiles بدلاً من files[0]
      console.log("test",name, files[0])
    },
  });

  return (
    <>
      <div className="relative my-4">
        <Box
          {...getRootProps({ className: "dropzone" })}
        >
          <label> {label} </label>

          <input {...getInputProps()} />

          <Box
            sx={{
              display: "flex",
              flexDirection: ["column", "column", "row"],
              alignItems: "center",
            }}
          >
            <TextField
              // value={files[0]?.name}
              fullWidth
              placeholder="الرجاء ارفاق صورة الهوية *"
              className="bg-white rounded-[10px]"
            />
          </Box>
          {/* {img} */}
        </Box>
        <div className="absolute top-[8px] left-[10px] rounded-md">
          <PreviewImage files={files ? files : []} />
        </div>
      </div>
    </>
  );
};

export default UploadImage;
