"use client";

//@components
import { PencilIcon } from "@heroicons/react/24/outline";

//@hooks
import { useEditUserProfile } from "@hooks";

/**
 * Returns the button actions to interact with user account.
 * @returns JSX.Element
 */
const UserAccountActions = () => {
  const editUserProfile = useEditUserProfile();

  return (
    <div className="flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
      <button
        className="flex items-center p-2 text-primary-dark hover:opacity-60 disabled:opacity-60"
        onClick={() => editUserProfile()}
      >
        Edit user profile
        <PencilIcon className="ml-2 h-4 w-4" />
      </button>
    </div>
  );
};

export default UserAccountActions;
