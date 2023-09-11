import Image from "next/image";

//@widgets
import { AuthWidget, ThemeSwitcher } from "@widgets";

/**
 * Returns the header component
 * @returns JSX.Element
 */
const Header = () => (
  <header className="flex items-center justify-between bg-primary-light py-4">
    <nav className="container flex w-full items-center justify-between">
      <div className="flex items-center">
        <Image
          src="/azure_logo.png"
          width={35}
          height={35}
          alt="azure logo"
          className="mr-4 brightness-100 grayscale filter dark:brightness-0 dark:invert"
        />
        <h1 className="text-base text-primary-dark md:text-lg">
          Fancy Azure AD integration for SSO
        </h1>
      </div>

      <div className="flex items-center md:space-x-2">
        <ThemeSwitcher />
        <AuthWidget />
      </div>
    </nav>
  </header>
);

export default Header;
