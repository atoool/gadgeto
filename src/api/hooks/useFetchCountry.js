import axios from "axios";
import { useQuery } from "react-query";

export default function useFetchCountry() {
  return useQuery("signin", () => axios.get(`https://ipapi.co/json/`));
}
