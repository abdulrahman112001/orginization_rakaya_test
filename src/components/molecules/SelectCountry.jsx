/* eslint-disable react/prop-types */
import useFetch from "../../hooks/useFetch.Js"
import SelectComp from "./Formik/SelectComp"

export default function SelectCountry({ name, label }) {
  const {
    data: countries,
  } = useFetch({
    endpoint: `countries`,
    queryKey: ['countrie'],
    onError(e) {
      console.log('e', e)
    }
  })



  return (
    <div>
      <label>{label}</label>

      <SelectComp
        name={name}
        multi={false}
        data={countries?.countries ? countries?.countries : []}
        className='w-full'
        placeholder='الدوله'
      />
    </div>
  )
}
