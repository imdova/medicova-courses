"use client";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import { matchRoute } from "./SideBar/LayoutRoutConfigs";
// import DynamicSideBar from "./SideBar/dynamic-side-bar";

const DynamicLayout = ({ children }: { children: React.ReactNode }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { data: session } = useSession();

  const pathname = usePathname() || "/";
  const sideBarType = matchRoute(pathname)?.sideBarType || "";
  const getLayout = () => {
    switch (sideBarType) {
      case "full":
        return (
          // <div className="flex w-full flex-row p-4 ">
          //   <aside className="mx-2 hidden w-1/5 max-w-[250px] rounded-base border border-gray-100 bg-white py-4 shadow-xl lg:block">
          //     <div className="sticky top-[85px]">
          //       <DynamicSideBar
          //         user={user}
          //         status={status}
          //         pathname={pathname}
          //       />
          //     </div>
          //   </aside>
          // </div>
          <main className="min-h-screen pt-[90px] p-6">{children}</main>
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
