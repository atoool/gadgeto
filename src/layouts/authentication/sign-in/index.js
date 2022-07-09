// @mui material components
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";

// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";
import { useState } from "react";
import useSignIn from "api/hooks/useSignIn";
import { useNavigate } from "react-router-dom";

function Basic() {
  const [user, setUser] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const signinMutation = useSignIn();
  const onSignIn = () => {
    signinMutation.mutate(user, {
      onSuccess: (r) => {
        if (r?.data?.accessToken !== "") {
          sessionStorage.setItem("1jnasjn3jn", r?.data?.accessToken);
          navigate("/admin/flyer-com/network/admin-panel/dashboard");
        }
      },
      onError: (r) => console.warn(r?.response?.data?.message),
    });
  };

  const onChangeUsername = ({ target }) => {
    setUser({ ...user, username: target.value });
  };

  const onChangePassword = ({ target }) => {
    setUser({ ...user, password: target.value });
  };

  return (
    <BasicLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="info"
          mx={2}
          mt={-3}
          p={2}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Sign in
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form" autoComplete="off">
            <MDBox mb={2}>
              <MDInput
                type="username"
                autoComplete="off"
                label="Username"
                fullWidth
                inputProps={{
                  form: {
                    autocomplete: "off",
                  },
                }}
                onChange={onChangeUsername}
              />
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type="password"
                autoComplete="off"
                label="Password"
                inputProps={{
                  form: {
                    autocomplete: "off",
                  },
                }}
                fullWidth
                onChange={onChangePassword}
              />
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton variant="gradient" color="info" fullWidth onClick={onSignIn}>
                sign in
              </MDButton>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </BasicLayout>
  );
}

export default Basic;
