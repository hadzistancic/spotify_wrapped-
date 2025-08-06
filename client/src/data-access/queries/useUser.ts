import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../api";
import useAuth from "../../hooks/useAuth";

const { getToken } = useAuth();

const token = getToken();

async function fetchUser() {
  const response = await axiosInstance.get("me");
  return response.data;
}

export function useGetUser() {
  return useQuery({
    queryKey: ["user", token],
    queryFn: () => fetchUser(),
  });
}
