import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../api";

type Props = {
  limit: number;
  timeRange: string;
  userId: string;
};

async function fetchArtists(params: Props) {
  const url = `me/top/artists?limit=${params.limit}&time_range=${params.timeRange}`;
  const response = await axiosInstance.get(url);
  return response.data;
}

export function useGetArtists(params: Props) {
  return useQuery({
    queryKey: ["artists", params.timeRange, params.userId],
    queryFn: () => fetchArtists(params),
    enabled: !!params.userId,
    refetchOnWindowFocus: false,
  });
}
