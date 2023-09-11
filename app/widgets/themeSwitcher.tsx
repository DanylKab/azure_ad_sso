"use client";

import classNames from "classnames";

//@components
import { MoonIcon } from "@heroicons/react/24/outline";
import { SunIcon as SunIconSolid } from "@heroicons/react/24/solid";

//@hooks
import { useTheme } from "@hooks";

/**
 * Returns the component to toggle the theme of the application
 * @returns JSX.Element
 */
const ThemeSwitcher = () => {
  const { toggleThemeMode, isDark, isLight } = useTheme();

  return (
    <div onClick={toggleThemeMode} className="flex items-center p-2">
      <button className="text-base">
        <SunIconSolid
          className={classNames(
            "h-6 w-6 text-primary-dark hover:text-slate-300",
            {
              hidden: isLight,
            },
          )}
        />
        <MoonIcon
          className={classNames(
            "h-6 w-6 text-primary-dark hover:text-slate-500",
            {
              block: isLight,
              hidden: isDark,
            },
          )}
        />
      </button>
    </div>
  );
};

export default ThemeSwitcher;
