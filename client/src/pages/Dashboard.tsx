import { useState } from "react";
import { Container, Grid } from "@mui/material";
import { useGetArtists } from "../data-access/queries/useGetArtists";
import { useGetUser } from "../data-access/queries/useUser";
import { useGetTracks } from "../data-access/queries/useGetTracks";
import useAuth from "../hooks/useAuth";
import Header from "../components/Header";
import TimeRangeTabs from "../components/TimeRangeTabs";
import TopArtistsList from "../components/TopArtists";
import TopTracksList from "../components/TopTracks";
import LinearProgress from "@mui/material/LinearProgress";

type Props = {
  toggleTheme: () => void;
  mode: "light" | "dark";
};

const Dashboard = ({ toggleTheme, mode }: Props) => {
  const [timeRange, setTimeRange] = useState("medium_term");

  const { isAuthenticated, logout } = useAuth();
  const { data: user } = useGetUser();
  const {
    data: artists,
    isLoading: isArtistsLoading,
    isError: isArtistsError,
  } = useGetArtists({
    limit: 10,
    timeRange,
    userId: user?.id,
  });
  const {
    data: tracks,
    isLoading: isTracksLoading,
    isError: isTracksError,
  } = useGetTracks({
    limit: 10,
    timeRange,
    userId: user?.id,
  });

  if (!isAuthenticated()) {
    logout();
  }

  if (isArtistsError || isTracksError) {
    throw new Error();
  }

  return (
    <Container>
      <Header user={user} toggleTheme={toggleTheme} mode={mode} />
      <TimeRangeTabs value={timeRange} onChange={setTimeRange} />

      <Grid container spacing={2} alignItems="stretch" sx={{ width: "100%" }}>
        {isArtistsLoading || isTracksLoading ? (
          <LinearProgress sx={{ width: "50%", margin: "0 auto" }} />
        ) : (
          <>
            <Grid size={{ xs: 12, md: 6 }}>
              <TopArtistsList artists={artists?.items} />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <TopTracksList tracks={tracks?.items} />
            </Grid>
          </>
        )}
      </Grid>
    </Container>
  );
};

export default Dashboard;
