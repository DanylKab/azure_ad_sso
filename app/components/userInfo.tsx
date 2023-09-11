//@components
import { UserInfoItem } from "@components";
import {
  EnvelopeIcon,
  IdentificationIcon,
  LanguageIcon,
  PhoneIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

//@types
import { UserInfo } from "@types";

type UserInfoProps = {
  userInfo?: UserInfo;
  isLoading: boolean;
};

const UserInfo: React.FC<UserInfoProps> = ({ userInfo, isLoading }) => {
  let userInfoContent = null;

  if (userInfo) {
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
          value={
            userInfo.userPrincipalName ||
            userInfo.displayName ||
            userInfo.givenName
          }
        />

        <UserInfoItem
          title="User email:"
          isLoading={isLoading}
          Icon={EnvelopeIcon}
          value={userInfo.mail}
        />

        <UserInfoItem
          title="Preferended language:"
          isLoading={isLoading}
          Icon={LanguageIcon}
          value={userInfo.preferredLanguage}
        />

        <UserInfoItem
          title="Business phone:"
          isLoading={isLoading}
          Icon={PhoneIcon}
          value={userInfo.businessPhones[0]}
        />
      </>
    );
  } else {
    if (!isLoading) {
      <div className="flex items-center space-x-2 p-2 text-primary-dark">
        <IdentificationIcon className="h-6 w-6" />

        <h2 className="text-lg text-primary-dark">
          User information is not provided!
        </h2>
      </div>;
    } else {
      <div className="flex items-center space-x-2 p-2 text-primary-dark">
        <IdentificationIcon className="h-6 w-6" />

        <h2 className="text-lg text-primary-dark">
          Loading the user information from the server...
        </h2>
      </div>;
    }
  }

  return <section className="flex flex-col">{userInfoContent}</section>;
};

export default UserInfo;
