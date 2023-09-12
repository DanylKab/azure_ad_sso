"use client";

import { MsalProvider } from "@azure/msal-react";
import React, { useEffect } from "react";

//@components
import { toast } from "react-toastify";

//@configs

//@services
import { publicMsalClient } from "@services";

//@types
import { AuthenticationResult, EventType } from "@azure/msal-browser";

type MsalClientProviderProps = {
  children: React.ReactNode;
};

const MsalClientProvider: React.FC<MsalClientProviderProps> = ({
  children,
}) => {
  useEffect(() => {
    const callbackId = publicMsalClient.addEventCallback(async (event) => {
      const errorPayload = event.error;

      if (
        event.eventType === EventType.LOGIN_SUCCESS ||
        event.eventType === EventType.ACQUIRE_TOKEN_SUCCESS ||
        event.eventType === EventType.SSO_SILENT_SUCCESS
      ) {
        const payload = event.payload as AuthenticationResult;

        publicMsalClient.setActiveAccount(payload.account);
      }
      if (event.eventType === EventType.LOGIN_FAILURE) {
        toast(`Auth failed! ${errorPayload?.message}`, {
          type: "error",
          toastId: event.eventType,
        });
      }

      if (event.eventType === EventType.LOGOUT_SUCCESS) {
        const accounts = publicMsalClient.getAllAccounts();

        if (accounts.length > 0) {
          publicMsalClient.setActiveAccount(accounts[0]);

          toast(`Sign out from account!`, {
            type: "info",
            toastId: event.eventType,
          });
        } else {
          toast(`Goodbye, stranger!`, {
            type: "info",
            toastId: event.eventType,
          });
        }
      }

      if (event.eventType === EventType.LOGOUT_FAILURE) {
        toast(`Logout failed! ${errorPayload?.message}`, {
          type: "error",
          toastId: event.eventType,
        });
      }
    });

    return () => {
      if (callbackId) {
        publicMsalClient.removeEventCallback(callbackId);
      }
    };
  }, []);

  return <MsalProvider instance={publicMsalClient}>{children}</MsalProvider>;
};

export default MsalClientProvider;
