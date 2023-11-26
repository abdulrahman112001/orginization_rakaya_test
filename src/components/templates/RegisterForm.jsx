import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import Divider from "@mui/material/Divider";
import FormControlLabel from "@mui/material/FormControlLabel";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { Form, Formik } from "formik";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/auth-and-perm/AuthProvider";
import { notify } from "../../utils/toast";
import IconifyIcon from "../atoms/icons/IconifyIcon";
import BaseInputField from "../molecules/Formik/BaseInputField";
import DatePickerComp from "../molecules/Formik/DatePickerComp";
import MainButton from "../molecules/Formik/MainButton";
import PhoneInput2 from "../molecules/Formik/PhoneInput2";
import SelectCountry from "../molecules/SelectCountry";
import UploadImage from "../molecules/UploadImage";
import { useMutate } from "../../hooks/useMutate";
import * as Yup from "yup";
import { t } from "i18next";
import { useUser } from "../../context/user provider/UserContext";

export default function RegisterForm() {
  const LinkStyled = styled(Link)(({ theme }) => ({
    textDecoration: "none",
    color: theme.palette.primary.main,
  }));
  const { login } = useAuth();
  const { refetch  } = useUser();


  const { mutate: sendRegister, isPending } = useMutate({
    endpoint: `register`,
    mutationKey: [`register`],
    onSuccess: (data) => {
      notify("success");
      login(data.data);
      refetch()
    },

    onError: (err) => {
      console.log("err", err);
      notify("error", err?.response?.data.message);
    },
  });
  const ValidationSchema = () =>
    Yup.object({
      name: Yup.string().trim().required(t("name is required")),
      national_id: Yup.string().trim().required(t("national is required")),
      email: Yup.string().trim().required(t("email is required")),
      birthday: Yup.string().trim().required(t("birthday is required")),
      password: Yup.string().trim().required(t("birthday is required")),
      nationality: Yup.string().trim().required(t("birthday is required")),
      national_id_expired: Yup.string()
        .trim()
        .required(t("birthday is required")),
    });

  return (
    <div>
      <Formik
        onSubmit={(values) => {
          console.log("values", { ...values });
          sendRegister({ ...values });
        }}
        ValidationSchema={ValidationSchema}
        initialValues={{
          name: "",
          national_id: "",
          email: "",
          birthday: Date(),
          password: "",
          nationality: "",
          national_id_expired: Date(),
          organization_id: "1",
        }}
      >
        <Form>
          <BaseInputField
            label="الاسم الكامل "
            placeholder="محمد احمد محمد"
            name="name"
          />
          <BaseInputField
            label=" رقم الهوية "
            placeholder="10********"
            name="national_id"
          />
          <PhoneInput2 name="phone" label="رقم الهاتف" />
          <BaseInputField
            label="البريد الإلكتروني"
            placeholder="Example@example.com"
            name="email"
          />
          <SelectCountry label={"الدوله"} name={"nationality"} />
          <DatePickerComp name="birthday" label={"تاريخ  الميلاد"} />

          <BaseInputField
            password
            label="كلمة المرور"
            placeholder="1222"
            name="password"
          />
          <UploadImage name="photo" label={"صورة الهوية  "} />
          <DatePickerComp
            name="national_id_expired"
            label={"تاريخ انتهاء الاقامه"}
          />

          <FormControlLabel
            control={<Checkbox />}
            sx={{
              mb: 4,
              mt: 1.5,
              "& .MuiFormControlLabel-label": { fontSize: "0.875rem" },
            }}
            label={
              <>
                <Typography variant="body2" component="span">
                  I agree to{" "}
                </Typography>
                <LinkStyled href="/" onClick={(e) => e.preventDefault()}>
                  privacy policy & terms
                </LinkStyled>
              </>
            }
          />
          <MainButton text={"Sign up"} type={"submit"} loading={isPending} />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <Typography sx={{ mr: 2, color: "text.secondary" }}>
              Already have an account?
            </Typography>
            <Link
              to="/login"
              sx={{ color: "primary.main", textDecoration: "none" }}
            >
              Sign in instead
            </Link>
          </Box>
          <Divider
            sx={{
              "& .MuiDivider-wrapper": { px: 4 },
              mt: (theme) => `${theme.spacing(5)} !important`,
              mb: (theme) => `${theme.spacing(7.5)} !important`,
            }}
          >
            or
          </Divider>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <IconButton
              href="/"
              component={Link}
              sx={{ color: "#497ce2" }}
              onClick={(e) => e.preventDefault()}
            >
              <IconifyIcon icon="mdi:facebook" />
            </IconButton>
            <IconButton
              href="/"
              component={Link}
              sx={{ color: "#1da1f2" }}
              onClick={(e) => e.preventDefault()}
            >
              <IconifyIcon icon="mdi:twitter" />
            </IconButton>
            <IconButton
              href="/"
              component={Link}
              onClick={(e) => e.preventDefault()}
              sx={{
                color: (theme) =>
                  theme.palette.mode === "light" ? "#272727" : "grey.300",
              }}
            >
              <IconifyIcon icon="mdi:github" />
            </IconButton>
            <IconButton
              href="/"
              component={Link}
              sx={{ color: "#db4437" }}
              onClick={(e) => e.preventDefault()}
            >
              <IconifyIcon icon="mdi:google" />
            </IconButton>
          </Box>
        </Form>
      </Formik>
    </div>
  );
}
