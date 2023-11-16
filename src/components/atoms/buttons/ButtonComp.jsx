/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Button } from "@mui/material";
import Spinner from "../Spinner";

const ButtonComp = ({
  variant,
  children,
  className,
  disabled,
  action,
  loading,
  type = "submit",
  bordered = false,
  ...props
}) => {
  return (
    <Button
      fullWidth
      size="large"
      type={type}
      variant={variant}
      className="text-white bg-contained hover:!bg-contained"
      sx={{ mb: 7 }}
      disabled={disabled}
      onClick={action}
    >
      {loading ? <Spinner /> : children}
    </Button>
  );
};
export default ButtonComp;