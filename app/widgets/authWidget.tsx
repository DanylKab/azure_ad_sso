"use client";

import {
  AuthenticationResult,
  BrowserAuthError,
  InteractionRequiredAuthError,
  InteractionStatus,
} from "@azure/msal-browser";

//@components
import { Loader } from "@components";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";
import { toast } from "react-toastify";

//@configs
import { loginRequest } from "@configs";

//@hooks
import { useAccount, useIsAuthenticated, useMsal } from "@azure/msal-react";

const AuthWidget = () => {
  const { instance, inProgress } = useMsal();
  const isAuthenticated = useIsAuthenticated();
  const userAccount = useAccount();

  const isLoginStatus = inProgress === InteractionStatus.Login;
  const isLogoutStatus = inProgress === InteractionStatus.Logout;

  const onLoginClick = async () => {
    let authResponse: AuthenticationResult | null = null;

    try {
      authResponse = await instance.ssoSilent(loginRequest);
    } catch (err) {
      if (
        err instanceof InteractionRequiredAuthError ||
        err instanceof BrowserAuthError
      ) {
        authResponse = await instance.loginPopup(loginRequest);
      } else {
        toast(`Unexpected error with login`, {
          type: "error",
        });
      }
    }

    if (authResponse?.account) {
      toast(
        `Hello, ${
          authResponse.account.username ||
          authResponse.account.name ||
          "stranger"
        }`,
        {
          type: "success",
        },
      );
    }
  };

  const onLogoutClick = async () => {
    await instance.logoutPopup({
      logoutHint: "silent",
      idTokenHint: userAccount?.localAccountId,
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
