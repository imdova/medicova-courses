"use client";
import { usePathname } from "next/navigation";
import { matchRoute } from "./routeConfigs";
import MinimalHeader from "./MinimalHeader";
import TransparentHeader from "./TransparentHeader";
import { users } from "@/constants";
// import { useSession } from "next-auth/react";
// import { UserState } from "@/types";
// import useValidateUser from "@/hooks/useValidateUser";

const DynamicHeader: React.FC = () => {
  // const session = useSession();
  // const user = session.data?.user as unknown as UserState;
  // useValidateUser()

  const pathname = usePathname() || "/";
  const headerType = matchRoute(pathname)?.headerType || "minimal";

  const headerComponents = {
    minimal: MinimalHeader,
    transparent: TransparentHeader,
  };

  const SelectedHeader = headerComponents[headerType];

  return <SelectedHeader user={users} pathname={pathname} />;
};

export default DynamicHeader;
