import { QueryClientProvider } from "@tanstack/react-query";
import Routes from "./router";
import queryClient from "./queryClient";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes />
    </QueryClientProvider>
  );
}

export default App;
