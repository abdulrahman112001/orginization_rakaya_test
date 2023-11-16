/* eslint-disable react/prop-types */
import { LoadingButton } from '@mui/lab'
import { GridSaveAltIcon } from '@mui/x-data-grid'
import { Form, Formik } from 'formik'
import { notify } from '../../../utils/toast'
import EmployeeMainData from './EmployeeMainData'
import { useMutate } from '../../../hooks/useMutate'


export default function AddEmployee({ facultyID , setOpenAddEmployee }) {
  const {
    mutate: AddEmployee,
    isLoading: loadingEmployee,
  } = useMutate({
    mutationKey: [`facility_employees`],
    endpoint: `facility-employees`,
    onSuccess: () => {
      notify('success')
      setOpenAddEmployee(false)
    },

    onError: err => {
      console.log('err', err)
      notify('error', err?.response?.data.message)
    },
    formData:true
  })

  return (
    <div>
      <Formik
        initialValues={{}}
        onSubmit={values => {
          console.log("🚀 ~ file: AddEmployee.jsx:33 ~ AddEmployee ~ values:", {...values, facility_id: facultyID} )
          AddEmployee({ ...values, facility_id: facultyID })
        }}
      >
        <Form>
          <EmployeeMainData />

          <LoadingButton
            loading={loadingEmployee}
            loadingPosition='end'
            fullWidth
            size='large'
            loadingIndicator='جاري التحميل...'
            type='submit'
            startIcon={<GridSaveAltIcon />}
            variant='outlined'
            className=' !rounded-md '
          >
            {!loadingEmployee && <span>حفظ</span>}
          </LoadingButton>
        </Form>
      </Formik>
    </div>
  )
}
