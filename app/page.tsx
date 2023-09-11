"use client";

import classNames from "classnames";

//@components
import { UserInfo } from "@components";
import { ArrowPathIcon } from "@heroicons/react/24/outline";

//@hooks
import { useGetUserInfo } from "@hooks";

const Home = () => {
  const { isLoading, getUserInfo, userInfo } = useGetUserInfo();

  return (
    <div className="container">
      <div className="flex items-start justify-between p-2 shadow-md">
        <UserInfo userInfo={userInfo} isLoading={isLoading} />

        <button
          className="flex items-center p-2 text-primary-dark disabled:opacity-60"
          onClick={() => getUserInfo()}
          disabled={isLoading}
        >
          {userInfo ? "Refetch" : "Fetch"} user info
          <ArrowPathIcon
            className={classNames("ml-2 h-4 w-4", {
              ["animate-spin"]: isLoading,
            })}
          />
        </button>
      </div>
    </div>
  );
};

export default Home;
