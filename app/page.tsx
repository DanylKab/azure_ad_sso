"use client";

//@hooks
import { useMsal } from "@azure/msal-react";

//@components
import { UserAccountActions, UserInfo } from "@components";

const Home = () => {
  const { instance, inProgress } = useMsal();

  const activeAccount = instance.getActiveAccount();

  return (
    <div className="container">
      <div className="flex flex-col-reverse items-start justify-between p-2 shadow-md md:flex-row">
        <UserInfo
          accountInfo={activeAccount}
          isLoading={inProgress !== "none"}
        />
        <UserAccountActions />
      </div>
    </div>
  );
};

export default Home;
