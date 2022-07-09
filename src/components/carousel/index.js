import * as React from "react";
import { useTheme, styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import SwipeableViews from "react-swipeable-views";
import { MobileStepper } from "@mui/material";

const Stepper = styled(MobileStepper)`
  & .MuiMobileStepper-dotActive {
    background-color: #344767;
  }
`;
const AutoPlaySwipeableViews = SwipeableViews;

// eslint-disable-next-line react/prop-types
function SwipeableImages({ img = [] }) {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = img.length;

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  if (img.length <= 0 || img[0]?.indexOf("http") === -1) return null;
  return (
    <Box sx={{ maxWidth: 400, flexGrow: 1, marginRight: 4 }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {img.map((itm, index) => (
          <div key={itm} style={{ display: "flex", justifyContent: "center" }}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  overflow: "hidden",
                  borderRadius: 4,
                  display: "flex",
                  height: "20vh",
                }}
                src={itm}
                alt="img"
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <Stepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        variant="dots"
        dotActive={{ color: "green" }}
        style={{ backgroundColor: "rgba(0,0,0,0)", display: "flex", justifyContent: "center" }}
      />
    </Box>
  );
}

export default SwipeableImages;
