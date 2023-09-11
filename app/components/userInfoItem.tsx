import classNames from "classnames";
import React, { ElementType } from "react";

type UserInfoItemProps = {
  Icon: ElementType;
  title: string;
  value: string;
  isLoading: boolean;
};

const UserInfoItem: React.FC<UserInfoItemProps> = ({
  Icon,
  isLoading,
  title,
  value,
}) => (
  <div className="flex items-center space-x-2 p-2 text-primary-dark">
    <Icon className="h-6 w-6" />
    <p className="ml-2">
      {title}
      <span
        className={classNames("ml-2", {
          ["blur-[1px]"]: isLoading,
        })}
      >
        {value ?? "-"}
      </span>
    </p>
  </div>
);

export default UserInfoItem;
