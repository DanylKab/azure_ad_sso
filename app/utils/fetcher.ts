//@components
import { InteractionRequiredAuthError } from "@azure/msal-common";
import { toast } from "react-toastify";
import { getLoginRequest } from "../configs";
import { publicMsalClient } from "../services";

/**
 * Fetch the url for SWR and return the response as JSON.
 * @param url string
 * @returns Promise
 */
const fetcher = async <T>(url: string): Promise<T> => {
  let accessToken = "";

  try {
    const authenticationResult = await publicMsalClient.acquireTokenSilent(
      getLoginRequest(),
    );

    accessToken = authenticationResult.accessToken;
  } catch (err) {
    if (err instanceof InteractionRequiredAuthError) {
      const authenticationResult = await publicMsalClient.acquireTokenPopup(
        getLoginRequest(),
      );
      accessToken = authenticationResult.accessToken;
    } else {
      toast(`Unexpected error with token acquire`, {
        type: "error",
      });

      throw err;
    }
  }

  try {
    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };

    const response = await fetch(url, {
      headers,
    });

    if (!response.ok) {
      toast(`Error occured: ${response.statusText}`, {
        type: "error",
      });

      throw new Error(response.statusText);
    }

    return response.json() as T;
  } catch (e) {
    toast(`Unexpected error with fetching data`, {
      type: "error",
    });

    throw e;
  }
};

export default fetcher;
