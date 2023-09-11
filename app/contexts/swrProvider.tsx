"use client";

import { SWRConfig } from "swr";

type SWRProviderProps = {
  children: React.ReactNode;
};

const SWRProvider: React.FC<SWRProviderProps> = ({ children }) => (
  <SWRConfig
    value={{
      errorRetryCount: 0,
    }}
  >
    {children}
  </SWRConfig>
);

export default SWRProvider;
