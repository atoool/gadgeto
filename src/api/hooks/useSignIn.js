import api from "api";
import { useMutation } from "react-query";

export default function useSignIn() {
  return useMutation("signin", (data) => api.post(`/auth/signin`, data));
}
