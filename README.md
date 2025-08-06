# SpotStat - Spotify Wrapped Clone

## About the App

SpotStat is a simplified version of Spotify Wrapped. It lets users log in with their Spotify account and view personalized stats such as their top artists and top tracks over different time ranges (short, medium, long term). The dashboard displays this data in an easy to navigate and visually clean interface using Material UI.

---

## Why is this data interesting or valuable?

Spotify Wrapped lets users reflect on their musical tastes, discover favorite artists and songs, and share their “musical year” with friends.

## This app uses

- **Smooth OAuth login flow with Spotify**
- **React Query**
- **Material UI (MUI)**
- **Vite**
- **Axios**
- **Clear folder and code organization**
- **Light and dark theme**

---

## Setup Instructions

### Prerequisites

- Node.js (v16+ recommended)
- npm or yarn
- A Spotify Developer account and app with Client ID and Client Secret

### Backend Setup

1. Clone the repository:
   git clone https://github.com/hadzistancic/spotify_wrapped-.git
   cd spotify-wrapped-/server

2. Install backend dependencies:
   npm install

3. Create a .env file inside the /server directory with the following content (replace with your actual credentials):
   SPOTIFY_CLIENT_ID=your_spotify_client_id
   SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
   REDIRECT_URI=http://127.0.0.1:3001/auth/callback

4. Start the backend server:
   npm run dev

### Frontend Setup

1. Open a new terminal and navigate to the frontend directory:
   cd ../client

2. Install frontend dependencies:
   npm install

3. Start the frontend development server:
   npm run dev

4. Open your browser and go to:
   http://localhost:5173

### How to use

1. On the homepage, click Login with Spotify to authenticate.
2. Log in with your Spotify credentials and authorize the app.
3. After successful login, you’ll be redirected to the dashboard.
4. Explore your Top Artists and Top Tracks displayed side by side.
5. Use the time range tabs above to toggle between short term, medium term, and long term stats.
6. Use the Logout button in the header to end your session.
