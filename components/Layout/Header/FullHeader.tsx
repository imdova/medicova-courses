import LogoIcon from "@/assets/icons/logo";
import { BaseHeaderProps } from "@/types";
import Link from "next/link";

import { useState } from "react";

import Image from "next/image";
import { commonLangouge } from "@/constants/header";

import { getNavLinks } from "./routeConfigs";

const FullHeader: React.FC<BaseHeaderProps> = ({ user, pathname }) => {
  const links = getNavLinks(user?.type, pathname);
  const [langSelectedValue, setLangSelectedValue] = useState("Eng (US)");
  // // Correctly type the event parameter as SelectChangeEvent
  // const handleChange = (event: SelectChangeEvent<string>) => {
  //   setLangSelectedValue(event.target.value); // Now the target value is typed as string
  // };

  return (
    <header className="sticky top-0 z-50 w-full bg-white text-black shadow-md transition-colors duration-300">
      <div className="container mx-auto px-6 lg:max-w-[1170px]">
        <div className="flex h-[70px] items-center">
          <nav className="w-full">
            <div className="flex flex-1 items-center justify-between">
              <Link href="/">
                <LogoIcon className="h-[30px] w-auto text-primary md:h-[40px]" />
              </Link>
              <div className="flex items-center gap-5">
                {/* <SearchInput />
                <FormControl
                  className="hidden flex-row items-center lg:flex"
                  sx={{ minWidth: 120 }}
                >
                  <PublicOutlined className="text-lg text-secondary" />
                  <Select
                    className="text-xs"
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                    value={langSelectedValue}
                    onChange={handleChange}
                    sx={{
                      border: "none", // Remove the border
                      "& .MuiOutlinedInput-notchedOutline": {
                        border: "none", // Remove the outline
                      },
                      "& .MuiSelect-select": {
                        padding: "10px", // Add padding for better appearance
                      },
                      "& .MuiButtonBase-root": {
                        background: "#ffff",
                      },
                    }}
                    MenuProps={{
                      PaperProps: {
                        style: {
                          maxHeight: 200, // Optional: restrict menu height
                          boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                        },
                      },
                    }}
                    renderValue={(selected) => {
                      if (selected.length === 0) {
                        return langSelectedValue;
                      }
                      return selected;
                    }}
                  >
                    {commonLangouge.map((e) => {
                      return (
                        <MenuItem
                          key={e.id}
                          className="flex gap-2 !bg-white text-xs"
                          value={e.title}
                        >
                          <Image src={e.src} alt="" /> {e.title}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              </div>
              <div>
                <div className="user-content">
                  <Usercontent />
                </div> */}
                {/* <HeaderAction user={user} pathname={pathname} /> */}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default FullHeader;
