"use client";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import { matchRoute } from "./SideBar/LayoutRoutConfigs";
import DynamicSideBar from "./SideBar/dynamic-side-bar";
// import { UserState } from "@/types";
import { ThisUser } from "@/constants";

const DynamicLayout = ({ children }: { children: React.ReactNode }) => {
  const { status } = useSession();
  // const user = session?.user as unknown as UserState;

  const pathname = usePathname() || "/";
  const sideBarType = matchRoute(pathname)?.sideBarType || "";
  const getLayout = () => {
    switch (sideBarType) {
      case "full":
        return (
          <div className="flex w-full flex-row p-4 pt-[90px]">
            <aside className="mx-2 hidden w-1/5 max-w-[250px] rounded-base py-4  lg:block">
              <div className="sticky top-[85px]">
                <DynamicSideBar
                  user={ThisUser}
                  status={status}
                  pathname={pathname}
                />
              </div>
            </aside>
            <main className="w-full px-0 md:px-6 lg:w-4/5">{children}</main>
          </div>
        );
      case "minimal":
        return <main className="min-h-screen pt-[90px]">{children}</main>;
      default:
        return <main className="min-h-screen pt-[90px]">{children}</main>;
    }
  };

  return getLayout();
};

export default DynamicLayout;
