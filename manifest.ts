import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Fancy Next.js application with Azure AD feature for SSO",
    short_name: "Fancy Next.js Azure AD app",
    description:
      "Next.js application with Azure AD feature for SSO. Tech stack is: Next.js, @azure/msal-react",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
