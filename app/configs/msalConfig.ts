import { Configuration, LogLevel } from "@azure/msal-browser";

//@configs
import { envClientSchema } from "@configs";

export const b2cPolicies = {
  names: {
    signUpSignIn: "B2C_1_signupsignin1",
    editProfile: "B2C_1_profileediting1",
  },
  authorities: {
    signUpSignIn: {
      authority: `https://${process.env.NEXT_PUBLIC_MSAL_AUTHORITY_DOMAIN}/fancyorgtenant.onmicrosoft.com/B2C_1_signupsignin1`,
    },
    editProfile: {
      authority: `https://${process.env.NEXT_PUBLIC_MSAL_AUTHORITY_DOMAIN}/fancyorgtenant.onmicrosoft.com/B2C_1_profileediting1`,
    },
  },
  authorityDomain: process.env.NEXT_PUBLIC_MSAL_AUTHORITY_DOMAIN,
};

export const msalConfig: Configuration = {
  auth: {
    clientId: envClientSchema.NEXT_PUBLIC_MSAL_CLIENT_ID,
    authority: `https://${b2cPolicies.authorityDomain}/fancyorgtenant.onmicrosoft.com/B2C_1_signupsignin1`,
    knownAuthorities: [b2cPolicies.authorityDomain],
    redirectUri: process.env.NEXT_PUBLIC_MSAL_REDIRECT_URL,
  },
  cache: {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: false,
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

export const loginRequest = {
  scopes: ["openid"],
};
