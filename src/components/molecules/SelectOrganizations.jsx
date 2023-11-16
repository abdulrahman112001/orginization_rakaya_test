import useFetch from "../../hooks/useFetch.Js"
import SelectComp from "./Formik/SelectComp"

export default function SelectOrganizations({
  setStatus,
  updateData,
  resetForm,
  fieldKey,
  onChange,
  placeholder,
  name,
  multi,
  label
}) {
  const {
    data: organizations,
    isLoading: organizationsLoading,
    failureReason
  } = useFetch({
    endpoint: `organizations`,
    queryKey: ['organizations'],
    onSuccess(data) {
    },
    onError(e) {
      console.log('e', e)
    }
  })

  // const countriesOptions = countries?.map(state => ({
  //   value: state.id,
  //   label: state.name_ar
  // }))

  return (
    <div>
      <SelectComp
        multi={multi ? true : false}
        name={name}
        data={organizations?.organizations ? organizations?.organizations : []}
        label={label}
        idValue
        className='w-full'
        placeholder='المنظمه'
      />
    </div>
  )
}
