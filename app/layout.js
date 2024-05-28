import "./globals.css";
import { ContextWrapper } from "./context/appContext";

export const metadata = {
  title: "Kithima-Kirithiria Development Association",
  description: "Kithima-Kirithiria member management",
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className="flex w-full justify-center">
        <div className="max-w-screen-xl w-full h-auto font-manrope bg-background">
          <ContextWrapper>
            {children}
          </ContextWrapper>
        </div>
      </body>
    </html>
  );
}
