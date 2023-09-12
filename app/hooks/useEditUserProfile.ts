"use client";

//@components
import { toast } from "react-toastify";

//@configs
import { b2cPolicies } from "@configs";

//@hooks
import { ServerError } from "@azure/msal-browser";
import { useMsal } from "@azure/msal-react";
import { useCallback } from "react";

/**
 * Invoke the popup for editing user profile
 * @returns Function
 */
const useEditUserProfile = () => {
  const { instance } = useMsal();

  const editProfileCallback = useCallback(async () => {
    try {
      await instance.loginPopup({
        authority: b2cPolicies.authorities.editProfile.authority,
        scopes: [],
      });

      toast("User profle was updated!", {
        type: "info",
      });
    } catch (error) {
      const errorMessage =
        error instanceof ServerError
          ? error.message
          : "Unexpected error with profile updating...";

      toast(errorMessage, {
        type: "error",
      });
    }
  }, [instance]);

  return editProfileCallback;
};

export default useEditUserProfile;
