"use client";

//@components
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";
import { ShieldExclamationIcon } from "@heroicons/react/24/outline";

type TemplateProps = {
  children: React.ReactNode;
};

const Template: React.FC<TemplateProps> = ({ children }) => (
  <main className="flex min-h-[calc(100vh_-_80px)] flex-col items-center justify-between bg-primary-light">
    <AuthenticatedTemplate>{children}</AuthenticatedTemplate>
    <UnauthenticatedTemplate>
      <div className="mt-24 flex flex-col items-center space-y-3">
        <ShieldExclamationIcon
          width={30}
          height={30}
          className="text-primary-dark"
        />
        <div className="space-y-2 text-center text-lg text-primary-dark">
          <p>Hello stranger!</p>
          <h2>
            Please, authenticate using the latest features provided by fancy
            Azure AD!
          </h2>
        </div>
      </div>
    </UnauthenticatedTemplate>
  </main>
);

export default Template;
