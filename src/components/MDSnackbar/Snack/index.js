import * as React from "react";
import MDSnackbar from "..";

// eslint-disable-next-line react/prop-types
function Snack(props, ref) {
  const [sb, setSB] = React.useState({ open: false, success: true, message: "" });

  const closeSB = () => setSB({ open: false, success: true, message: "" });
  const openSB = ({ open = false, success = true, message = "" }) =>
    setSB({ open, success, message });

  React.useImperativeHandle(ref, () => ({
    close: () => closeSB(),
    open: (val) => openSB(val),
  }));

  return (
    <MDSnackbar
      color={sb?.success ? "success" : "error"}
      icon="warning"
      title={sb?.success ? "Successful!" : "Failed!"}
      content={sb?.message ?? ""}
      dateTime="11 mins ago"
      open={sb.open}
      onClose={closeSB}
      close={closeSB}
      bgWhite
    />
  );
}

export default React.forwardRef(Snack);
