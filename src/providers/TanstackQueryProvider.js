"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import defaultOptions from "@/src/core/configs/reactQuery";

const queryClient = new QueryClient({ defaultOptions });

function TanstackQueryProvider({ children }) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
export default TanstackQueryProvider;
