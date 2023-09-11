"use client";

// @utils
import { fetcher } from "@utils";

//@hooks
import useSWR from "swr";

// @types
import { UserInfo } from "@types";

/**
 * Get the user information
 * @returns SWRResponse<UserInfo>
 */
const useGetUserInfo = () => {
  const { mutate, data, isLoading, isValidating } = useSWR(
    "/api/user-info",
    (url) => fetcher<UserInfo>(url),
  );

  return {
    getUserInfo: mutate,
    userInfo: data,
    isLoading: isLoading || isValidating,
  };
};

export default useGetUserInfo;
