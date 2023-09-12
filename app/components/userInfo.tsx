"use client";

//@components
import { AccountInfo } from "@azure/msal-browser";
import { UserInfoItem } from "@components";
import {
  FingerPrintIcon,
  GlobeAsiaAustraliaIcon,
  IdentificationIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

type UserInfoProps = {
  accountInfo: AccountInfo | null;
  isLoading: boolean;
};

const UserInfo: React.FC<UserInfoProps> = ({ accountInfo, isLoading }) => {
  let userInfoContent = null;

  const isGithubAccountActive =
    accountInfo && accountInfo.idTokenClaims?.idp === "github.com";

  if (accountInfo) {
    userInfoContent = (
      <>
        <div className="flex items-center space-x-2 p-2 text-primary-dark">
          <IdentificationIcon className="h-6 w-6" />
          <h2 className="text-lg text-primary-dark">
            Provided user information:
          </h2>
        </div>

        <UserInfoItem
          title="User name:"
          isLoading={isLoading}
          Icon={UserCircleIcon}
          value={accountInfo.name || accountInfo.username}
        />

        <UserInfoItem
          title="Auth provider:"
          isLoading={isLoading}
          Icon={GlobeAsiaAustraliaIcon}
          value={isGithubAccountActive ? "Github" : "Common"}
        />

        <UserInfoItem
          title="Account id:"
          isLoading={isLoading}
          Icon={FingerPrintIcon}
          value={accountInfo.localAccountId}
        />
      </>
    );
  } else {
    if (!isLoading) {
      userInfoContent = (
        <div className="flex items-center space-x-2 p-2 text-primary-dark">
          <IdentificationIcon className="h-6 w-6" />

          <h2 className="text-lg text-primary-dark">
            User information is not provided!
          </h2>
        </div>
      );
    } else {
      userInfoContent = (
        <div className="flex items-center space-x-2 p-2 text-primary-dark">
          <IdentificationIcon className="h-6 w-6" />

          <h2 className="text-lg text-primary-dark">
            Loading the user information from the server...
          </h2>
        </div>
      );
    }
  }

  return <section className="flex flex-col">{userInfoContent}</section>;
};

export default UserInfo;
