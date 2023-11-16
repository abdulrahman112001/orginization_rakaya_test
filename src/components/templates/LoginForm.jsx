import { Checkbox, FormControlLabel, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Form, Formik } from "formik";
import { t } from "i18next";
import { useState } from "react";
import { notify } from "../../utils/toast";
import PhoneInput2 from "../molecules/Formik/PhoneInput2";
import CheckCode from "../organisms/checkCode";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/auth-and-perm/AuthProvider";
import { useMutate } from "../../hooks/useMutate";
import ButtonComp from "../atoms/buttons/ButtonComp";

export default function LoginForm() {
  const [rememberMe, setRememberMe] = useState(true);
  const [verifyPhone, setVerifyPhone] = useState(false);
  const [valuesForm, setValuesForm] = useState("");
  const { login } = useAuth();
  const [dataValue, setDataValue] = useState();
  const { mutate: LoginData, isLoading: loadingLogin } = useMutate({
    mutationKey: [`login_data`],
    formData: true,
    endpoint: `login`,
    onSuccess: (data) => {
      login(data.data);
      notify("success", `مربحا بك يا ${data?.data?.user.name}`);
    },

    onError: (err) => {
      console.log("err", err);
      notify("error", err?.response?.data.message);
    },
  });

  const { mutate: sendOTP } = useMutate({
    mutationKey: [`send-otp`],
    endpoint: `send-otp`,
    onSuccess: (data) => {
      notify("success", "التحقق من الهاتف ");
      setDataValue(data?.data?.verification);
      setVerifyPhone(true);
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

          !verifyPhone
            ? sendOTP({ ...values, organization_id: "1" })
            : LoginData({
                ...values,
                otp: dataValue?.value,
                organization_id: "1",
              });
        }}
        initialValues={{ phone: "", phone_code: "", otp: "" }}
      >
        <Form>
          {!verifyPhone && (
            <>
              <PhoneInput2 name="phone" />
              <Box
                sx={{
                  mb: 4,
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                }}
              >
                <FormControlLabel
                  label={`${"Remember Me"}`}
                  control={
                    <Checkbox
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                    />
                  }
                />
                <Typography
                  variant="body2"
                  component={Link}
                  href="/forgot-password"
                  sx={{ color: "primary.main", textDecoration: "none" }}
                >
                  {t("Forgot Password ?")}
                </Typography>
              </Box>
            </>
          )}
          {verifyPhone && (
            <CheckCode number={dataValue?.value} valuesForm={valuesForm} />
          )}

          <ButtonComp loading={loadingLogin}>{t("LOGIN")}</ButtonComp>
        </Form>
      </Formik>
    </div>
  );
}
