import useFetch from "../../hooks/useFetch"
import SelectComp from "./Formik/SelectComp"

export default function SelectFacilities({ name,  label }) {
  const {
    data: facilities,
  } = useFetch({
    endpoint: `facilities?select=id,name`,
    queryKey: ['select_facilities'],
    onError(e) {
      console.log('e', e)
    }
  })
  console.log("🚀 ~ file: SelectFacilities.jsx:7 ~ SelectFacilities ~ facilities:", facilities)



  return (
    <div>
      <label>{label}</label>

      <SelectComp
        name={name}
        multi={false}
        data={facilities?.user_facilities ? facilities?.user_facilities : []}
        className='w-full'
        placeholder='الدوله'
        idValue={true}
      />
    </div>
  )
}
