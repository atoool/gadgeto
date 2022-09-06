// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import CardWithImage from "components/CardWithImage";
import { useMaterialUIController } from "context";
import { useFetchProductsByCountry } from "api/hooks/useProductApi";
import { useEffect, useRef, useState } from "react";
import { Pagination } from "@mui/material";
import VideoModal from "components/VideoModal";

const maxItems = 9;
function Home() {
  const [controller] = useMaterialUIController();
  const { data } = useFetchProductsByCountry(controller.country);
  const [products, setProducts] = useState([]);
  const [maxItemLength, setMaxItemLength] = useState(1);
  const video = useRef();

  useEffect(() => {
    if (data?.data?.data) {
      let arr = data?.data?.data ?? [];
      arr = arr.slice(0, maxItems);
      setProducts(arr);

      // eslint-disable-next-line no-unsafe-optional-chaining
      const maxItemMod = (data?.data?.data?.length ?? 10) / 10;
      const maxItemL = maxItemMod;
      setMaxItemLength((maxItemL + 1).toFixed(0));
    }
  }, [data]);

  const onSearch = ({ target }) => {
    const { value = "" } = target;
    if (value && value !== "") {
      const newProdArray = products.filter(
        (f) => f.title?.toLowerCase()?.indexOf(value?.toLowerCase()) > -1
      );
      setProducts(newProdArray);
    } else {
      setProducts(data?.data?.data);
    }
  };

  // eslint-disable-next-line no-unused-vars
  const onPageChange = (e, v) => {
    let arr = data?.data?.data ?? [];
    arr = arr.slice(v * maxItems - maxItems, v * maxItems);
    setProducts(arr);
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 500);
  };

  return (
    <DashboardLayout>
      <DashboardNavbar showLogout={false} onSearch={onSearch} />
      <MDBox py={3} className>
        <MDBox mt={4.5}>
          <Grid container spacing={3}>
            {products &&
              products?.map((item, key) => (
                <Grid item xs={12} md={6} lg={4} key={item.title + key ?? Math.random() + key}>
                  <MDBox mb={3}>
                    <CardWithImage
                      {...item}
                      // onVideoOpen={video.current?.open}
                    />
                  </MDBox>
                </Grid>
              ))}
          </Grid>
        </MDBox>
        {data?.data?.data && data?.data?.data?.length > 10 && (
          <MDBox
            spacing={3}
            style={{ marginTop: 20, justifyContent: "center", display: "flex", width: "100%" }}
          >
            <Pagination
              count={maxItemLength}
              variant="outlined"
              shape="rounded"
              onChange={onPageChange}
            />
          </MDBox>
        )}
      </MDBox>
      <VideoModal ref={video} />
    </DashboardLayout>
  );
}

export default Home;
