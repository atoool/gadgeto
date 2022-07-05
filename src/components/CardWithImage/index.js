import { useMemo } from "react";

// porp-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import { Button } from "@mui/material";

function CardWithImage({ url, img, title, desc, price, priceSymbol }) {
  return (
    <Card
      sx={{ height: "100%" }}
      onClick={() => {
        window.open(url);
      }}
    >
      <MDBox padding="1rem">
        {useMemo(
          () => (
            <MDBox
              variant="gradient"
              borderRadius="lg"
              mt={-5}
              display="flex"
              style={{
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0px -2px 20px 1px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src={img}
                alt="test"
                loading="lazy"
                style={{
                  borderRadius: 4,
                  display: "flex",
                  height: "20vh",
                  justifySelf: "center",
                }}
              />
            </MDBox>
          ),
          [title]
        )}
        <MDBox pt={3} pb={1} px={1}>
          <MDTypography
            variant="h6"
            textTransform="capitalize"
            justifyContent="center"
            display="flex"
          >
            {title}
          </MDTypography>
          <MDTypography
            component="div"
            variant="button"
            color="text"
            fontWeight="light"
            style={{ textAlign: "center" }}
          >
            {desc}
          </MDTypography>
          <Divider />
          <MDBox display="flex" alignItems="center" width="100%" justifyContent="space-between">
            <MDTypography variant="240" color="primary" fontWeight="bold">
              {priceSymbol + price}
            </MDTypography>
            <Button>More</Button>
          </MDBox>
        </MDBox>
      </MDBox>
    </Card>
  );
}

// Setting default values for the props of ReportsBarChart
CardWithImage.defaultProps = {
  desc: "",
  img: [""],
  url: "",
  // priceTip: "",
  priceSymbol: "₹",
  price: 0,
};

// Typechecking props for the ReportsBarChart
CardWithImage.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  img: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string])),
  url: PropTypes.oneOfType([PropTypes.string]),
  price: PropTypes.oneOfType([PropTypes.number]),
  // priceTip: PropTypes.oneOfType([PropTypes.string, PropTypes.any]),
  priceSymbol: PropTypes.oneOfType([PropTypes.string]),
};

export default CardWithImage;
