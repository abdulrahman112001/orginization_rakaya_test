/* eslint-disable react/prop-types */
import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import { useFormikContext } from "formik";
import { useState } from "react";
import { useDropzone } from "react-dropzone";
import PreviewImage from "./PreviewImage";
const UploadImage = ({ name, label, placeholder }) => {
  const { setFieldValue, errors } = useFormikContext();
  const [files, setFiles] = useState([]);

  const { getRootProps, getInputProps } = useDropzone({
    multiple: false,
    accept: {
      "image/*": [".png", ".jpg", ".jpeg", ".gif"],
    },
    onDrop: (acceptedFiles) => {
      setFiles(acceptedFiles.map((file) => Object.assign(file)));
      setFieldValue(name, acceptedFiles[0]);
    },
  });

  return (
    <>
      <div className="relative my-4 cursor-pointer">
        <Box {...getRootProps({ className: "dropzone" })} cl>
          <label> {label} </label>

          <input {...getInputProps()} className="cursor-pointer" />

          <Box
            sx={{
              display: "flex",
              flexDirection: ["column", "column", "row"],
              alignItems: "center",
            }}
          >
            <TextField
              style={{ cursor: "pointer" }}
              // value={files[0]?.name}
              error={!!errors[name]}
              helperText={errors[name]}
              fullWidth
              placeholder={placeholder}
              className={`bg-white rounded-[10px] mt-3 cursor-pointer ${
                !!errors[name] && "border-red-500 "
              }`}
            />
          </Box>
          {/* <div>
            <FormikError name={name} />
          </div> */}
        </Box>
        <div className="absolute top-[8px] left-[10px] rounded-md">
          <PreviewImage files={files ? files : []} />
        </div>
      </div>
    </>
  );
};

export default UploadImage;
