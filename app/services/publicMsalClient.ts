import {
  EventMessage,
  EventType,
  PublicClientApplication,
} from "@azure/msal-browser";
import { AuthenticationResult } from "@azure/msal-common";

//@components
import { toast } from "react-toastify";

//@configs
import { msalConfig } from "@configs";

const publicMsalClient = new PublicClientApplication(msalConfig);

publicMsalClient.addEventCallback((message: EventMessage) => {
  const errorPayload = message.error;

  if (message.eventType === EventType.LOGIN_SUCCESS) {
    const payload = message.payload as AuthenticationResult;

    toast(`Hello, ${payload.account?.username ?? "stranger"}`, {
      type: "success",
    });
  }

  if (message.eventType === EventType.LOGIN_FAILURE) {
    toast(`Auth failed! ${errorPayload?.message}`, {
      type: "error",
    });
  }

  if (message.eventType === EventType.LOGOUT_SUCCESS) {
    toast(`Goodbye, stranger!`, {
      type: "info",
    });
  }

  if (message.eventType === EventType.LOGOUT_FAILURE) {
    toast(`Logout failed! ${errorPayload?.message}`, {
      type: "error",
    });
  }
});

export default publicMsalClient;
