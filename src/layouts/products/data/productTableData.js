/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
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

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";

// Images
import team2 from "assets/images/team-2.jpg";
import { Icon, IconButton } from "@mui/material";
import { useEffect, useState } from "react";

export default function data({ products }) {
  const Title = ({ image, title }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={title} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {title}
        </MDTypography>
      </MDBox>
    </MDBox>
  );

  const NormalTypo = ({ text }) => (
    <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
      {text?.length > 15 ? `${text?.substring(0, 15)}...` : text}
    </MDTypography>
  );

  const Action = () => (
    <MDBox display="flex" alignItems="left" lineHeight={1}>
      <IconButton size="small" color="secondary">
        <Icon fontSize="small">edit</Icon>
      </IconButton>
      <IconButton size="small" color="secondary">
        <Icon fontSize="small">delete</Icon>
      </IconButton>
    </MDBox>
  );

  const [rows, setRows] = useState([
    {
      title: Title({ image: team2, title: "John Michael" }),
      desc: NormalTypo({ text: "Description" }),
      price: NormalTypo({ text: "2500" }),
      symbol: NormalTypo({ text: "$" }),
      url: NormalTypo({ text: "https://flipkart.com" }),
      category: NormalTypo({ text: "Electronics" }),
      category_id: NormalTypo({ text: "25" }),
      action: Action(),
    },
  ]);

  useEffect(() => {
    if (products && products?.length > 0) {
      const arr = products.map((f) => ({
        title: Title({ image: f?.img[0], title: f?.title }),
        desc: NormalTypo({ text: f?.desc }),
        price: NormalTypo({ text: f?.price }),
        symbol: NormalTypo({ text: f?.priceSymbol }),
        url: NormalTypo({ text: f?.url }),
        category: NormalTypo({ text: f?.category }),
        category_id: NormalTypo({ text: f?.category_id }),
        action: Action(),
      }));
      setRows(arr);
    }
  }, [products]);

  return {
    columns: [
      { Header: "title", accessor: "title", align: "left" },
      { Header: "desc", accessor: "desc", align: "left" },
      { Header: "price", accessor: "price", align: "center" },
      { Header: "symbol", accessor: "symbol", align: "center" },
      { Header: "url", accessor: "url", align: "center" },
      { Header: "category", accessor: "category", align: "center" },
      { Header: "cat_id", accessor: "category_id", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows,
  };
}