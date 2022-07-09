// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import CardWithImage from "components/CardWithImage";
import { useFetchProducts } from "api/hooks/useProductApi";

function Home() {
  const { data } = useFetchProducts();
  const products = data?.data?.data ?? [];
  return (
    <DashboardLayout style={{ backgroundColor: "red" }}>
      <DashboardNavbar showLogout={false} />
      <MDBox py={3}>
        <MDBox mt={4.5}>
          <Grid container spacing={3}>
            {products &&
              products?.map((item, key) => (
                <Grid item xs={12} md={6} lg={4} key={item.title + key ?? Math.random() + key}>
                  <MDBox mb={3}>
                    <CardWithImage {...item} />
                  </MDBox>
                </Grid>
              ))}
          </Grid>
        </MDBox>
      </MDBox>
    </DashboardLayout>
  );
}

export default Home;
