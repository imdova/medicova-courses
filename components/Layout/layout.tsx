"use client";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import { matchRoute } from "./SideBar/LayoutRoutConfigs";
import DynamicSideBar from "./SideBar/dynamic-side-bar";
import { ThisUser } from "@/constants";

interface DynamicLayoutProps {
  children: React.ReactNode;
  isActive: boolean;
  setIsActive: (active: boolean) => void;
}

const DynamicLayout: React.FC<DynamicLayoutProps> = ({
  children,
  isActive,
  setIsActive,
}) => {
  const { status } = useSession();
  const pathname = usePathname() || "/";
  const sideBarType = matchRoute(pathname)?.sideBarType || "";

  const getLayout = () => {
    switch (sideBarType) {
      case "full":
        return (
          <div className="relative container mx-auto my-4 flex min-h-[calc(100vh-150px)] w-full flex-row p-2 md:my-8 pt-16 bg-[#F9F9FA]">
            <aside>
              <div
                className={`fixed top-0 transition-all duration-300 ${
                  isActive ? "left-0" : "-left-[300px]"
                } w-[250px] lg:left-2 lg:sticky lg:top-[85px] h-full lg:h-fit z-50 lg:z-20`}>
                <DynamicSideBar
                  user={ThisUser}
                  status={status}
                  pathname={pathname}
                  setIsActive={setIsActive}
                />
              </div>
            </aside>
            <main className="w-full px-0 md:px-6 lg:w-9/12 xl:w-4/5 mx-auto lg:max-w-[1170px] min-h-screen">
              {children}
            </main>
          </div>
        );
      case "minimal":
        return <main className="min-h-screen pt-[100px]">{children}</main>;
      default:
        return <main className="min-h-screen pt-[100px]">{children}</main>;
    }
  };

  return getLayout();
};

export default DynamicLayout;
