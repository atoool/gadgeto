import api from "api";
import { useQuery } from "react-query";

export default function useFetchProducts() {
  return useQuery("fetch-products", () => api.get(`/products`));
}
