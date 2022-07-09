/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DataTable from "layouts/products/components/DataTable";

// Data
import productTableData from "layouts/products/data/productTableData";
import { Icon, IconButton } from "@mui/material";
import { useFetchProducts } from "api/hooks/useProductApi";
import { useRef } from "react";
import Snack from "components/MDSnackbar/Snack";
import Modal from "./components/modal";

function Products() {
  const modal = useRef();
  const snack = useRef();
  const { data } = useFetchProducts();
  const products = data?.data?.data ?? [];
  const { columns, rows } = productTableData({ products });

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <MDTypography variant="h6" color="white">
                  Products Table
                </MDTypography>

                <IconButton
                  size="medium"
                  color="default"
                  onClick={() => modal?.current?.openModal()}
                >
                  <Icon fontSize="medium">add_circle</Icon>
                </IconButton>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns, rows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
        <Snack ref={snack} />
        <Modal ref={modal} products={products} snack={snack.current} />
      </MDBox>
    </DashboardLayout>
  );
}

export default Products;
