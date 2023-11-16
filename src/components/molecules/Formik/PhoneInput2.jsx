import { useFormikContext } from 'formik'
import { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { tv } from 'tailwind-variants'

const PhoneInput2 = ({label}) => {
  const [phone, setPhone] = useState('')
  const { setFieldValue, errors, touched, handleBlur, values } = useFormikContext()
  console.log("🚀 ~ file: PhoneInput2.jsx:10 ~ PhoneInput2 ~ values:", values)

  const handlePhoneChange = (value, selectedCountry, name, number) => {
    const modifiedPhone = +number
      .slice(selectedCountry?.dialCode.length + 2)
      .trim()
      .split(' ')
      .join('')
    setPhone(value)
    setFieldValue('phone', modifiedPhone)
    setFieldValue('phone_code', '+' + selectedCountry?.dialCode)
  }

  const phoneInput = tv({
    variants: {
      error: {
        true: 'border-red-500  !rounded-3xl !border-2'
      }
    }
  })

  return (
    <div className='col-span-1 mb-4'>
      <div className='flex flex-col gap-1 '>
      <label> {label} </label>

        <PhoneInput
          country={'sa'}
          value={values?.phone  ?  values.phone_code + values.phone : phone}
          onChange={handlePhoneChange}
          enableSearch
          placeholder='رقم الجوال'
          onBlur={handleBlur}
          className={phoneInput({
            error: touched.phone && !!errors.phone
          })}
        />
      </div>

      <div>{/* <FormikError name={name} /> */}</div>
    </div>
  )
}

export default PhoneInput2
