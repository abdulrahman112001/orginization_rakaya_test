/* eslint-disable react/prop-types */
import { Form, Formik } from "formik";
import { useMutate } from "../../../hooks/useMutate";
import { notify } from "../../../utils/toast";
import ButtonComp from "../../atoms/buttons/ButtonComp";
import EmployeeMainData from "./EmployeeMainData";

export default function AddEmployee({ facultyID, setOpenAddEmployee , refetch }) {
  const { mutate: AddEmployee, isLoading: loadingEmployee } = useMutate({
    mutationKey: [`facility_employees`],
    endpoint: `facility-employees`,
    onSuccess: () => {
      notify("success");
      setOpenAddEmployee(false);
      refetch()
    },

    onError: (err) => {
      console.log("err", err);
      notify("error", err?.response?.data.message);
    },
    formData: true,
  });

  return (
    <div>
      <Formik
        initialValues={{}}
        onSubmit={(values) => {
          console.log("🚀 ~ file: AddEmployee.jsx:33 ~ AddEmployee ~ values:", {
            ...values,
            facility_id: facultyID,
          });
          AddEmployee({ ...values, facility_id: facultyID });
        }}
      >
        <Form>
          <EmployeeMainData />

          <ButtonComp
            loading={loadingEmployee}
            type="submit"
            variant="contained"
            className=" !rounded-md "
          >
            حفظ
          </ButtonComp>
        </Form>
      </Formik>
    </div>
  );
}
