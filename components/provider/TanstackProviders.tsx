"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const client = new QueryClient({
  defaultOptions: { queries: { refetchOnMount: false } },
});

export function TanstackProviders({ children }: { children: React.ReactNode }) {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}
