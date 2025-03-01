import { files, links } from "@/constants/chat.data";
import { File, LinkIcon } from "lucide-react";
import Link from "next/link";

export default function SharedFiles() {
  return (
    <aside className="w-full lg:w-[320px] bg-white rounded-md p-2">
      <h2 className="font-semibold">Shared Files</h2>
      <ul className="flex flex-col gap-2  mt-2 space-y-1">
        {files.map((file, index) => {
          return (
            <li key={index}>
              <Link
                className="flex items-center gap-2 text-sm text-gray-600 "
                href="#">
                <div className="w-12">
                  <div className="flex justify-center items-center bg-gray-200 w-12 h-12 rounded-md">
                    <File size={18} />
                  </div>
                </div>
                <div className="flex items-center justify-between gap-2 flex-1">
                  <div>
                    <div className="text-xs font-semibold">{file.name} </div>
                    <div className="text-xs text-secondary">{file.date} </div>
                  </div>
                  <span className="text-xs font-semibold">{file.size}</span>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
      <h2 className="font-semibold mt-4">Shared Links</h2>
      <ul className="flex flex-col gap-2 mt-2 space-y-1">
        {links.map((link, index) => {
          return (
            <li key={index}>
              <Link
                className="flex items-center gap-2 text-sm text-gray-600 "
                href="#">
                <div className="w-12">
                  <div className="flex justify-center items-center bg-gray-200 w-12 h-12 rounded-md">
                    <LinkIcon size={18} />
                  </div>
                </div>

                <div className="flex items-center justify-between gap-2 flex-1">
                  <div>
                    <div className="text-xs font-semibold">{link.name} </div>
                    <div className="text-xs text-secondary">{link.date} </div>
                  </div>
                  <span className="text-xs font-semibold">{link.time}</span>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
