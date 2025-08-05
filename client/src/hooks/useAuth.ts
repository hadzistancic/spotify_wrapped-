const TOKEN_KEY = "access_token";
const TOKEN_TIMESTAMP_KEY = "token_timestamp";
const TOKEN_LIFESPAN = 3600 * 1000; // 1 hour

function useAuth() {
  const getToken = () => localStorage.getItem(TOKEN_KEY);
  const getTokenTimestamp = () =>
    Number(localStorage.getItem(TOKEN_TIMESTAMP_KEY) || 0);

  const setToken = (token: string) => {
    localStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem(TOKEN_TIMESTAMP_KEY, Date.now().toString());
  };

  const isTokenExpired = () => {
    const timestamp = getTokenTimestamp();
    return Date.now() - timestamp > TOKEN_LIFESPAN;
  };

  const isAuthenticated = () => {
    const token = getToken();
    return !!token && !isTokenExpired();
  };

  const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(TOKEN_TIMESTAMP_KEY);
    window.location.href = "/";
  };

  return {
    getToken,
    setToken,
    isAuthenticated,
    isTokenExpired,
    logout,
  };
}

export default useAuth;
