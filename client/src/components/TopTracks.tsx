import {
  List,
  ListItem,
  ListItemText,
  Typography,
  ListItemAvatar,
  Avatar,
  Link,
  Card,
  CardContent,
} from "@mui/material";

type Track = {
  id: string;
  name: string;
  artists: {
    name: string;
  }[];
  album: {
    images: {
      url: string;
      height: number;
      width: number;
    }[];
  };
  external_urls: {
    spotify: string;
  };
};

type Props = {
  tracks: Track[];
};

const TopTracksList = ({ tracks }: Props) => {
  if (!tracks?.length) return null;

  return (
    <Card>
      <CardContent>
        <Typography variant="h4" gutterBottom align="center">
          Top Tracks
        </Typography>
        <List>
          {tracks.map((track, index) => (
            <ListItem key={track.id}>
              <ListItemAvatar>
                <Avatar src={track.album.images[0]?.url} alt={track.name} />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Link
                    href={track.external_urls.spotify}
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="hover"
                  >
                    {index + 1}. {track.name}
                  </Link>
                }
                secondary={track.artists
                  .map((artist) => artist.name)
                  .join(", ")}
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default TopTracksList;
