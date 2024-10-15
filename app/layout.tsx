import "./globals.css";
import SideBarRight from "@/app/common/components/SideBarRight";
import SideBarLeft from "@/app/common/components/SideBarLeft";
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
    <html lang="en" className="dark">
      <body>
        <SideBarLeft />
        {children}
          <SideBarRight />
      </body>
    </html>
  );
}
