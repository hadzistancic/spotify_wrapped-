import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../api";

type Props = {
  limit: number;
  timeRange: string;
  userId: string;
};

async function fetchTracks(params: Props) {
  const url = `me/top/tracks?limit=${params.limit}&time_range=${params.timeRange}`;
  const response = await axiosInstance.get(url);
  return response.data;
}

export function useGetTracks(params: Props) {
  return useQuery({
    queryKey: ["tracks", params.timeRange, params.userId],
    queryFn: () => fetchTracks(params),
    enabled: !!params.userId,
    refetchOnWindowFocus: false,
  });
}
