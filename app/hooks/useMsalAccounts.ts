"use client";

//@hooks
import { useMsal } from "@azure/msal-react";
import { useEffect, useState } from "react";

//@types
import { AccountInfo } from "@azure/msal-browser";

/**
 * Returns the set of account information
 * @returns Function
 */
const useMsalAccounts = () => {
  const { instance, inProgress } = useMsal();
  const [msalAccount, setMsalAccount] = useState<AccountInfo | null>(null);

  const activeAccount = instance.getActiveAccount();

  const isGithubAccountActive = Boolean(
    msalAccount && msalAccount.idTokenClaims?.idp === "github.com",
  );

  useEffect(() => {
    setMsalAccount((prev) => (!prev ? activeAccount : prev));
  }, [activeAccount]);

  return {
    isGithubAccountActive,
    isLoading: inProgress === "login",
  };
};

export default useMsalAccounts;
