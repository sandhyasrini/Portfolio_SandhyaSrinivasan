import "./globals.css";
import NavbarComponent from "./components/NavbarComponent";
import SideBarRight from "./components/SideBarRight";
import SideBarLeft from "./components/SideBarLeft";
export const metadata = {
  title: "Sandhya Srinivasan",
  description: "Full stack developer portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SideBarLeft />
        <NavbarComponent />
        {children}
          <SideBarRight />
      </body>
    </html>
  );
}
