import express from "express";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

const router = express.Router();

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const REDIRECT_URI =
  process.env.REDIRECT_URI || "http://127.0.0.1:3001/auth/callback";
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;

const SCOPES = ["user-read-private", "user-read-email", "user-top-read"];

router.get("/login", (req, res) => {
  const params = new URLSearchParams({
    client_id: CLIENT_ID!,
    response_type: "code",
    redirect_uri: REDIRECT_URI,
    scope: SCOPES.join(" "),
  });

  const authUrl = `https://accounts.spotify.com/authorize?${params.toString()}`;
  res.redirect(authUrl);
});

router.get("/callback", async (req, res) => {
  const code = req.query.code as string;

  const tokenUrl = "https://accounts.spotify.com/api/token";

  const data = new URLSearchParams({
    grant_type: "authorization_code",
    code,
    redirect_uri: REDIRECT_URI,
    client_id: CLIENT_ID!,
    client_secret: CLIENT_SECRET!,
  });

  try {
    const response = await axios.post(tokenUrl, data.toString(), {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    const { access_token } = response.data;
    res.redirect(`http://localhost:5173/callback?access_token=${access_token}`);
  } catch (err) {
    res.redirect(`http://localhost:5173/500`);
  }
});

export default router;
