"use client";

import { MsalProvider } from "@azure/msal-react";
import React from "react";

//@services
import { publicMsalClient } from "@services";

type MsalClientProviderProps = {
  children: React.ReactNode;
};

const MsalClientProvider: React.FC<MsalClientProviderProps> = ({
  children,
}) => {
  return <MsalProvider instance={publicMsalClient}>{children}</MsalProvider>;
};

export default MsalClientProvider;
