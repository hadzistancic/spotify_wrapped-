import {
  Card,
  CardContent,
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";

interface Artist {
  id: string;
  name: string;
  images: { url: string }[];
  genres: string[];
}

type Props = {
  artists: Artist[];
};

const TopArtistsList = ({ artists }: Props) => {
  if (!artists?.length) return null;

  return (
    <Card>
      <CardContent>
        <Typography variant="h4" gutterBottom align="center">
          Top Artists
        </Typography>
        <List>
          {artists.map((artist, index) => (
            <ListItem key={artist.id} sx={{ height: "72px" }}>
              <ListItemAvatar>
                <Avatar src={artist.images?.[0]?.url} alt={artist.name} />
              </ListItemAvatar>
              <ListItemText
                primary={`${index + 1}. ${artist.name}`}
                secondary={artist.genres?.slice(0, 2).join(", ")}
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default TopArtistsList;
