import { AccountInfo, Configuration, LogLevel } from "@azure/msal-browser";

//@configs
import { envClientSchema } from "@configs";

export const msalConfig: Configuration = {
  auth: {
    clientId: envClientSchema.NEXT_PUBLIC_MSAL_CLIENT_ID,
  },
  cache: {
    cacheLocation: "sessionStorage",
  },
  system: {
    loggerOptions: {
      loggerCallback: (level, message, containsPii) => {
        if (containsPii) {
          return;
        }
        switch (level) {
          case LogLevel.Error:
            console.error(message);
            return;
        }
      },
    },
  },
};

export const getLoginRequest = (account?: AccountInfo | null) => ({
  scopes: ["User.Read"],
  loginHint: account?.username,
});

export const graphConfig = {
  graphMeEndpoint: envClientSchema.NEXT_PUBLIC_GRAPH_API_ENDPOINT,
};
