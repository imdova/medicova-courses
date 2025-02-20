import LogoIcon from "@/assets/icons/logo";
import { BaseHeaderProps } from "@/types";
import useScrollDetection from "@/hooks/useScrollDetection";
import { isCurrentPage } from "@/util";
import { getNavLinks } from "./routeConfigs";
import HeaderAction from "./HeaderAction";
import headerbg_1 from "@/assets/images/header.jpg";
import headerbg_2 from "@/assets/images/Group.png";
import Image from "next/image";
import Link from "next/link";

const MinimalHeader: React.FC<BaseHeaderProps> = ({ user, pathname }) => {
  const isScrolled = useScrollDetection();
  const links = getNavLinks(user?.type, pathname);
  return (
    <header
      style={{ backgroundImage: `url(${headerbg_1.src})` }}
      className={`${
        isScrolled ? "shadow-lg " : ""
      } left-0 top-0 fixed z-50 w-full transition-all text-white duration-700 }`}>
      <div className="absolute overflow-hidden h-24 ">
        <Image src={headerbg_2} alt="" />
      </div>
      <div className="container mx-auto px-6 lg:max-w-[1170px]">
        <div className="flex h-[90px] justify-between items-center">
          <Link className="relative" href="/">
            <LogoIcon className={`text-white h-[30px] w-auto md:h-[40px]`} />
          </Link>

          <div className="hidden items-center space-x-8 lg:flex">
            {links.map((link, i) => {
              const isPage = isCurrentPage(pathname, link.url);
              return (
                <Link
                  key={i}
                  href={link.url}
                  className={`font-medium uppercase link-smooth ${
                    isPage
                      ? isScrolled
                        ? "text-primary"
                        : "text-primary"
                      : "hover:text-primary"
                  }`}>
                  {link.title}
                </Link>
              );
            })}
          </div>

          <HeaderAction user={user} pathname={pathname} />
        </div>
      </div>
    </header>
  );
};
export default MinimalHeader;
