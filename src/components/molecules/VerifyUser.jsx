/* eslint-disable react/prop-types */
import { LoadingButton } from "@mui/lab";
import { GridSaveAltIcon } from "@mui/x-data-grid";
import { Form, Formik } from "formik";
import { t } from "i18next";
import { useState } from "react";
import { useUser } from "../../context/user provider/UserContext";
import { notify } from "../../utils/toast";
import CheckCode from "../organisms/checkCode";
import { useMutate } from "../../hooks/useMutate";

export default function VerifyUser({ userData, dataValue, setOpen }) {
  const [valuesForm, setValuesForm] = useState("");
  const { refetch } = useUser();

  const { mutate: verify_user, isLoading: loadingVerify } = useMutate({
    mutationKey: [`verify_user`],
    endpoint: `verify`,
    onSuccess: () => {
      notify("success");
      refetch();
      setOpen(false);
    },

    onError: (err) => {
      console.log("err", err);
      notify("error", err?.response?.data.message);
    },
  });

  return (
    <div>
      <Formik
        onSubmit={(values) => {
          console.log("xxx:", values);
          setValuesForm(values);
          verify_user({
            phone: userData?.user?.phone,
            phone_code: userData?.user?.phone_code,
            otp: dataValue?.value,
            organization_id: "1",
          });
        }}
        initialValues={{ phone: "", phone_code: "", otp: "" }}
      >
        <Form>
          <div className="flex flex-col w-1/2 m-auto text-center gap-y-5">
            <CheckCode number={dataValue?.value} valuesForm={valuesForm} />
            <LoadingButton
              loading={!!loadingVerify}
              loadingPosition="start"
              fullWidth
              size="large"
              type="submit"
              startIcon={<GridSaveAltIcon />}
              variant="outlined"
            >
              {t("تفعيل")}
            </LoadingButton>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
