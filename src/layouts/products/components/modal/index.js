/* eslint-disable no-restricted-globals */
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { List, TextField } from "@mui/material";
import { useUpdateProduct, useAddProduct } from "api/hooks/useProductApi";
import SwipeableImages from "../carousel";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: window.innerWidth - 60,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: window.innerHeight > window.innerWidth ? "column" : "row",
  overflow: "hidden",
  overflowY: "scroll",
};

// eslint-disable-next-line react/prop-types
function BasicModal({ productQuery, snack = null }, ref) {
  const productSchema = {
    title: "",
    price: "",
    priceSymbol: "",
    url: "",
    country: "",
    category: "",
    category_id: "",
    img: [],
    desc: "",
  };

  const [open, setOpen] = React.useState(false);
  const [product, setProduct] = React.useState(productSchema);
  const [isEdit, setIsEdit] = React.useState(true);

  const productAddMutation = useAddProduct();
  const productUpdateMutation = useUpdateProduct();

  const handleOpen = (val = null) => {
    if (val != null) {
      setProduct(val);
      setIsEdit(true);
      setOpen(true);
    } else {
      setProduct(productSchema);
      setIsEdit(false);
      setOpen(true);
    }
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  React.useImperativeHandle(ref, () => ({
    openModal: (val = null) => handleOpen(val),
    closeModal: () => handleClose(),
  }));

  const onSubmit = () => {
    const callback = {
      onSuccess: (res) => {
        handleClose();
        snack?.open({
          open: true,
          success: true,
          message: res?.data?.message ?? "successfully submitted",
        });
        // eslint-disable-next-line react/prop-types
        productQuery?.refetchQueries("fetch-products");
      },
      onError: (res) => {
        handleClose();
        snack?.open({
          open: true,
          success: false,
          message: res.response?.data?.message ?? "something went wrong",
        });
      },
    };
    // eslint-disable-next-line no-underscore-dangle
    if (isEdit) productUpdateMutation.mutate({ product, id: product?._id }, callback);
    else productAddMutation.mutate(product, callback);
  };

  const Input = () =>
    Object.keys(productSchema)?.map((itm, key) => (
      <TextField
        key={`${itm + key}`}
        onChange={({ currentTarget }) => {
          let val = currentTarget?.value ?? "";
          if (itm === "img") {
            val = val?.split(",") ?? [];
          }
          setProduct({ ...product, [itm]: val });
        }}
        value={product[itm] ? product[itm] : ""}
        label={itm}
        multiline={itm === "desc"}
        maxRows={itm === "desc" ? 3 : 1}
        style={{ marginBottom: 10, width: "100%" }}
      />
    ));
  return (
    <Modal open={open} onClose={handleClose}>
      <List sx={style}>
        <SwipeableImages img={product?.img ?? []} />
        <Box style={{ flexDirection: "column", display: "flex" }}>
          <Box>{Input()}</Box>
          <Button
            variant="contained"
            style={{
              color: "#fff",
              width: "100%",
              marginTop: 20,
              alignSelf: "flex-end",
            }}
            onClick={onSubmit}
          >
            Submit
          </Button>
        </Box>
      </List>
    </Modal>
  );
}
export default React.forwardRef(BasicModal);
