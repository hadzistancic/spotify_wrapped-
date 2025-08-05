import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Spinner from "../components/Spinner";
import useAuth from "../hooks/useAuth";

export default function Callback() {
  const { setToken, getToken } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    //check if token already exist
    const token = getToken();
    if (token) {
      navigate("/dashboard");
      return;
    }
    const urlParams = new URLSearchParams(window.location.search);
    //set new token if one not exist
    const accessToken = urlParams.get("access_token");

    if (accessToken) {
      setToken(accessToken);
      navigate("/dashboard");
    } else {
      navigate("/");
    }
  }, []);

  return <Spinner />;
}
