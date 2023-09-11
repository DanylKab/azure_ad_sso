//@components
import { Header, ToastWrapper } from "@components";

//@contexts
import { MsalClientProvider, SWRProvider, ThemeProvider } from "@contexts";

//@styles
import "@styles";
import { Roboto } from "next/font/google";
import "react-toastify/dist/ReactToastify.css";

//@types
import type { Metadata } from "next";

const roboto = Roboto({ weight: ["400", "500", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fancy Azure AD SSO",
  icons: {
    icon: ["/favicon.ico?v=4"],
  },
  description: "Fancy Azure AD SSO integration with Next.js framework",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => (
  <html lang="en">
    <body className={roboto.className}>
      <MsalClientProvider>
        <SWRProvider>
          <ThemeProvider>
            <Header />
            <ToastWrapper />
            {children}
          </ThemeProvider>
        </SWRProvider>
      </MsalClientProvider>
    </body>
  </html>
);

export default RootLayout;
