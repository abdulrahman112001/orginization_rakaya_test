// ** MUI Imports
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import { styled, useTheme } from "@mui/material/styles";
import AvatarCongruity from "../../../assets/cards/illustration-john-dark.png";
import { Link } from "react-router-dom";

// Styled Grid component
const StyledGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    order: -1,
    display: "flex",
    justifyContent: "center",
  },
}));

// Styled component for the image
const Img = styled("img")(({ theme }) => ({
  right: 0,
  bottom: 0,
  width: 298,
  position: "absolute",
  [theme.breakpoints.down("sm")]: {
    width: 250,
    position: "static",
  },
}));

const AnalyticsCongratulations = ({ userData }) => {
  // ** Hook

  const theme = useTheme();

  return (
    <Card sx={{ position: "relative" }}>
      <CardContent
        sx={{ p: (theme) => `${theme.spacing(6.75, 7.5)} !important` }}
      >
        <Grid container spacing={6}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h5" sx={{ mb: 4.5 }}>
              مرحبا بك{" "}
              <Box component="span" sx={{ fontWeight: "bold" }}>
                {userData?.user?.name}
              </Box>
              ! 🎉
            </Typography>
            <Typography variant="body2">
              You have done{" "}
              <Box component="span" sx={{ fontWeight: 600 }}>
                68%
              </Box>{" "}
              😎 more sales today.
            </Typography>
            <Typography sx={{ mb: 4.5 }} variant="body2">
              Check your new badge in your profile.
            </Typography>
            <Link to={"/profile"}>
              <Button variant="contained" className="bg-[#5A5FE0]">
                بياناتي الشخصية
              </Button>
            </Link>
          </Grid>
          <StyledGrid item xs={12} sm={6}>
            {/* ${theme.palette.mode}.png`} */}
            <Img alt="Congratulations John" src={AvatarCongruity} />
          </StyledGrid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default AnalyticsCongratulations;