import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material'
import { useFormikContext } from 'formik'
import React, { useState } from 'react'
import IconifyIcon from '../../atoms/icons/IconifyIcon'

export default function BaseInputField({ label, placeholder, name, className, password, ...props }) {
  const { setFieldValue, values } = useFormikContext()
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div>
      {password ? (
        <FormControl fullWidth >
           <label> {label} </label>

          <OutlinedInput
            label='Password'
            id='auth-login-v2-password'
            type={showPassword ? 'text' : 'password'}
            name={name}
            onChange={e => {
              if (props.value === undefined) {
                // setFieldValueState(e.target.value)
                setFieldValue(name, e.target.value)
              }
            }}
            endAdornment={
              <InputAdornment position='end'>
                <IconButton
                  edge='end'
                  onMouseDown={e => e.preventDefault()}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <IconifyIcon icon={showPassword ? 'mdi:eye-outline' : 'mdi:eye-off-outline'} />
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      ) : (
        <>
        <label> {label} </label>
        <TextField
          autoFocus
          {...props}
          fullWidth
          value={values[name]}
          sx={{ mb: 4 }}
          placeholder={placeholder}
          name={name}
          className={className}
          onChange={e => {
            // if (values[name] !== undefined) {
              // setFieldValueState(e.target.value)
              setFieldValue(name, e.target.value)
            // }
          }}
        />
        </>
      )}
    </div>
  )
}
