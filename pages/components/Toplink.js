import React from "react";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Link from "next/link";
const Toplink = () => {
  return (
    <div className="bg-[#172F42]">
      <div className="container mx-auto flex justify-between py-2">
        <div className="top_link-right flex text-white hover:text-blue-600 cursor-pointer duration-200">
          <MailOutlineIcon /> <Link href="mailto:info@ario.org.kz?subject = Feedback&body = Message">info@ario.org.kz</Link>
        </div>
        <div className="top_link-left px-3">
          <FacebookIcon className="mr-3 text-white hover:text-blue-600 cursor-pointer duration-200" />
          <InstagramIcon className="mr-3 text-white hover:text-red-600 cursor-pointer duration-200" />
          <TelegramIcon className="mr-3 text-white hover:text-blue-600 cursor-pointer duration-200" />
          <YouTubeIcon className="mr-3 text-white hover:text-red-600 cursor-pointer duration-200" />
        </div>
      </div>
    </div>
  );
};

export default Toplink;
