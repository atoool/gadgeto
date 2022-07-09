import api from "api";
import { useMutation, useQuery } from "react-query";

export function useFetchProducts() {
  return useQuery("fetch-products", () => api.get(`/products`));
}

export function useAddProduct() {
  return useMutation("add-product", (data) => api.post(`/products`, data));
}

export function useUpdateProduct() {
  return useMutation("add-product", ({ product, id }) => api.post(`/products/${id}`, product));
}

export function useDeleteProduct() {
  return useMutation("add-product", ({ product, id }) => api.post(`/products/${id}`, product));
}
