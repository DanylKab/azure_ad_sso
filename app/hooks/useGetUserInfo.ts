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
  const url = `/api/user-info`;

  const { mutate, data, isLoading, isValidating } = useSWR([url], ([url]) =>
    fetcher<UserInfo>(url),
  );

  return {
    getUserInfo: mutate,
    userInfo: data,
    isLoading: isLoading || isValidating,
  };
};

export default useGetUserInfo;
