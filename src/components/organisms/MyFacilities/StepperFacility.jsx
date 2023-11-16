/* eslint-disable react/prop-types */
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import Typography from "@mui/material/Typography";
import { Form, Formik } from "formik";
import { Fragment, useState } from "react";
import StepperCustomDot from "../../theme/StepperCustomDot";
import StepperWrapper from "../../theme/stepper";
import AddFacility from "./AddFacility";
import Signature from "./Signature";
import StepTwo from "./add_facility/StepTwo";
import { useMutate } from "../../../hooks";
import { notify } from "../../../utils/toast";
import { useQueryClient } from "@tanstack/react-query";

const steps = [
  {
    title: "بيانات المنشأة",
  },
  {
    title: "تحميل المستندات",
  },
  {
    title: "التعهد",
  },
];

const StepperFacility = ({ setOpenAddFaculty }) => {
  const [activeStep, setActiveStep] = useState(0);
  // Handle Stepper
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    // if (activeStep === steps.length - 1) {
    // }
  };
  const queryClient = useQueryClient();

  const { mutate: addFacility } = useMutate({
    mutationKey: [`add_facilities`],
    endpoint: `facilities`,
    onSuccess: () => {
      queryClient.refetchQueries(["facilities"]);
      notify("success");
      setOpenAddFaculty(false);
    },
    onError: (err) => {
      console.log("err", err);
      notify("error", err?.response?.data.message);
    },
    formData: true,
  });

  const initialValues = {
    name: "",
    registration_number: "",
    version_date: "",
    version_date_hj: "",
    end_date: "",
    end_date_hj: "",
    registration_source: "",
    license: "",
    license_expired: "",
    license_expired_hj: "",
    address: "",
    tax_certificate: "",
    employee_number: "",
    chefs_number: "",
    kitchen_space: "",
    registration_number_photo: "",
    national_address_photo: "",
    signature: "",
    street_name: "",
    neighborhood: "",
    city: "",
    building_number: "",
    postal_code: "",
    sub_number: "",
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Fragment>
            <AddFacility />
          </Fragment>
        );
      case 1:
        return (
          <Fragment key={step}>
            <StepTwo />
          </Fragment>
        );
      case 2:
        return (
          <Fragment key={step}>
            <Signature name="signature" />
          </Fragment>
        );
      default:
        return "Unknown Step";
    }
  };

  const renderContent = () => {
    return (
      <div spacing={5}>
        {getStepContent(activeStep)}
        <Grid
          item
          xs={12}
          sx={{ display: "flex", justifyContent: "end", gap: "5px" }}
          mt={5}
          className="!sticky !left-0 !bottom-2"
        >
          <Button
            size="large"
            disabled={activeStep === 0}
            onClick={handleBack}
            variant="outlined"
            className="!border !border-solid !rounded-md  "
          >
            السابق
          </Button>
          <Button
            size="large"
            onClick={handleNext}
            className="!bg-[#787EFF] text-white !rounded-md "
            type={activeStep === steps.length ? "submit" : "button"}
          >
            {activeStep === steps.length - 1 ? "حفظ ومتابعه" : "التالي"}
          </Button>
        </Grid>
      </div>
    );
  };

  return (
    <div className="w-full">
      <StepperWrapper>
        <Stepper activeStep={activeStep} alternativeLabel className="mt-10">
          {steps.map((step, index) => {
            return (
              <Step key={index}>
                <StepLabel StepIconComponent={StepperCustomDot}>
                  <div className="step-label">
                    <div>
                      <Typography className={`font-bold  `}>
                        {step.title}
                      </Typography>
                      {/* <Typography className='step-subtitle'>{step.subtitle}</Typography> */}
                    </div>
                  </div>
                </StepLabel>
              </Step>
            );
          })}
        </Stepper>
      </StepperWrapper>
      <Card
        sx={{ mt: 4 }}
        className="!overflow-y-scroll !shadow-none h-[27rem]  scroll_main m-3"
      >
        <CardContent>
          <Formik
            initialValues={initialValues}
            onSubmit={(value) => {
              console.log("value", value);
              addFacility(value);
            }}
          >
            {() => <Form>{renderContent()}</Form>}
          </Formik>
        </CardContent>
      </Card>
    </div>
  );
};

export default StepperFacility;
