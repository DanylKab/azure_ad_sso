import { AccountInfo, Configuration, LogLevel } from "@azure/msal-browser";

export const msalConfig: Configuration = {
  auth: {
    clientId: process.env.NEXT_PUBLIC_MSAL_CLIENT_ID ?? "", // This is the ONLY mandatory field; everything else is optional.
    // authority: b2cPolicies.authorities.signUpSignIn.authority, // Choose sign-up/sign-in user-flow as your default.
    // knownAuthorities: [b2cPolicies.authorityDomain], // You must identify your tenant's domain as a known authority.
    redirectUri: "http://localhost:3000", // You must register this URI on Azure Portal/App Registration. Defaults to "window.location.href".
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
  graphMeEndpoint: "https://graph.microsoft.com/v1.0/me",
};
