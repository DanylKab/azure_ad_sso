"use client";

import {
  AuthenticationResult,
  InteractionRequiredAuthError,
  InteractionStatus,
} from "@azure/msal-browser";

//@components
import { Loader } from "@components";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";
import { toast } from "react-toastify";

//@configs
import { getLoginRequest } from "@configs";

//@hooks
import { useAccount, useIsAuthenticated, useMsal } from "@azure/msal-react";

const AuthWidget = () => {
  const { instance, inProgress } = useMsal();
  const isAuthenticated = useIsAuthenticated();
  const userAccount = useAccount();

  const isLoginStatus = inProgress === InteractionStatus.Login;
  const isLogoutStatus = inProgress === InteractionStatus.Logout;

  const onLoginClick = async () => {
    const request = getLoginRequest(userAccount);

    let loginResponse: AuthenticationResult | null = null;

    try {
      loginResponse = await instance.ssoSilent(request);
    } catch (err) {
      if (err instanceof InteractionRequiredAuthError) {
        loginResponse = await instance.loginPopup(request);
      } else {
        toast(`Unexpected error with login`, {
          type: "error",
        });
      }
    }

    if (loginResponse?.account) {
      instance.setActiveAccount(loginResponse.account);
    }
  };

  const onLogoutClick = async () => {
    await instance.logout({
      logoutHint: "silent",
      account: userAccount,
    });
  };

  if (isAuthenticated) {
    return (
      <button
        onClick={onLogoutClick}
        className="group flex items-center px-4 py-2 text-primary-dark disabled:opacity-60"
        disabled={isLogoutStatus}
      >
        <span className="mr-2 group-hover:text-slate-500">Logout</span>
        {isLogoutStatus ? (
          <Loader />
        ) : (
          <ArrowRightOnRectangleIcon className="h-6 w-6" />
        )}
      </button>
    );
  }

  return (
    <button
      onClick={onLoginClick}
      className="group flex items-center px-4 py-2 text-primary-dark disabled:opacity-60"
      disabled={isLoginStatus}
    >
      <span className="mr-2 group-hover:text-slate-500">Login</span>
      {isLoginStatus ? (
        <Loader />
      ) : (
        <ArrowRightOnRectangleIcon className="h-6 w-6" />
      )}
    </button>
  );
};

export default AuthWidget;
