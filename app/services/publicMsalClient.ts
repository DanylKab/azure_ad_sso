import { PublicClientApplication } from "@azure/msal-browser";

//@configs
import { msalConfig } from "@configs";

const publicMsalClient = new PublicClientApplication(msalConfig);

export default publicMsalClient;
