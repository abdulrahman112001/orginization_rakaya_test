import { useFormikContext } from "formik"
import { createElement } from "react"
import { twMerge } from "tailwind-merge"

 const FormikError = ({
  name,
  as = "p",
  className,
  withTouched = true,
}: {
  name: string
  as?: string
  className?: string
  withTouched?: boolean
}) => {
  const { errors: formikErrors, touched: formikTouched } = useFormikContext()

  const error = formikErrors[name]
  const isTouched = formikTouched[name]

return (withTouched ? !!error && isTouched : !!error)

    ? createElement(
        as,
        { className: twMerge(className, "text-mainRed") },
        error?.toString()
      )
    : null
}

export  {FormikError}
