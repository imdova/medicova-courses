// import NotificationDropdown from "@/components/UI/NotificationDropdown";
// import UserDropdown from "@/components/UI/UserDropdown";
import AlertDropDown from "@/components/UI/AlertDropDown";
import UserDropDown from "@/components/UI/UserDropDown";
import { notification, users } from "@/constants";
import { UserProps } from "@/types";
import { Search, ShoppingCart } from "lucide-react";
// import { UserState } from "@/types";
import Link from "next/link";

interface UserActionProps {
  user?: UserProps;
  pathname?: string;
}

const HeaderAction: React.FC<UserActionProps> = ({ user }) => {
  if (user && user.id) {
    return (
      <div className="flex items-center gap-1 md:gap-3 text-inherit">
        {/* <NotificationDropdown pathname={pathname} />
        <UserDropdown user={user} /> */}
        <div className="flex items-center gap-2 md:gap-3">
          <Link href="/courses">
            <Search size={18} />
          </Link>
          <Link href="/cart">
            <ShoppingCart size={18} />
          </Link>
          <AlertDropDown notification={notification} />
        </div>
        <UserDropDown user={users} />
      </div>
    );
  } else {
    return (
      <div className="flex gap-3">
        <Link href="/auth/register" className="btn-primary btn-signup">
          Sign Up
        </Link>
        <Link href="/auth/signin" className="btn-primary btn-login">
          Login
        </Link>
      </div>
    );
  }
};

export default HeaderAction;
