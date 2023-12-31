/* eslint-disable react/prop-types */
import {
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { useFormikContext } from "formik";
import { useState } from "react";
import IconifyIcon from "../../atoms/icons/IconifyIcon";

export default function BaseInputField({
  label,
  placeholder,
  name,
  className,
  type = "text",
  password,
  ...props
}) {
  const { setFieldValue, values, touched, errors } = useFormikContext();

  const [showPassword, setShowPassword] = useState(false);
  // const hasError = touched[name] || Boolean(errors[name]);

  return (
    <div>
      {password ? (
        <FormControl fullWidth className="m-0">
          <label> {label} </label>

          <OutlinedInput
            label="Password"
            id="auth-login-v2-password"
            type={showPassword ? "text" : "password"}
            className="mt-3"
            name={name}
            helperText={touched[name] && errors[name]}
            error={!!errors[name]}
            onChange={(e) => {
              if (props.value === undefined) {
                // setFieldValueState(e.target.value)
                setFieldValue(name, e.target.value);
              }
            }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  edge="end"
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <IconifyIcon
                    icon={
                      showPassword ? "mdi:eye-outline" : "mdi:eye-off-outline"
                    }
                  />
                </IconButton>
              </InputAdornment>
            }
          />
          {/* <FormikError name={name} /> */}
        </FormControl>
      ) : (
        <>
          <label> {label} </label>
          <TextField
            // autoFocus
            {...props}
            error={errors[name]}
            helperText={errors[name]}
            fullWidth
            value={values[name]}
            // sx={{ mb: 4 }}
            type={type}
            placeholder={placeholder}
            
            name={name}
            className={`${className} " my-3 " ${
              !!errors[name] && "border-red-500 "
            }`}
            onChange={(e) => {
              // if (values[name] !== undefined) {
              // setFieldValueState(e.target.value)
              setFieldValue(name, e.target.value);
              // }
            }}
          />
          <div>{/* <FormikError name={name} /> */}</div>
        </>
      )}
    </div>
  );
}
