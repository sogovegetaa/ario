import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Pagination from "../../components/Pagination";
import NotFound from "../../../public/noimg.png";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import { useRouter } from "next/router";
import ru from "../../../locales/ru";
import kz from "../../../locales/kz";
import en from "../../../locales/en";
const Post = ({ data, item }) => {
  const router = useRouter();
  const { locale } = router;
  const t =
    locale === "ru" ? ru : locale === "kz" ? kz : locale === "en" ? en : null;
  return (
    <>
      <div className="p-10">
        <div className="group relative flex aspect-[3/2] w-full justify-center overflow-hidden">
          <span className="pixer">
            <Image
              src={item?.img ? item?.img : NotFound}
              width={340}
              height={227}
              className="bg-light-500 pixer2 w-full"
              alt=""
            />
          </span>
          <div className="absolute top-0 left-0 z-10 flex h-full w-full cursor-pointer items-center justify-center gap-9 bg-dark/60 p-4 opacity-0 backdrop-blur-sm transition-all group-hover:gap-5 group-hover:opacity-100 ">
            <Link href={`/news/post/${item?.id}`}>
              <h1 className="font-bold text-xl bg-gray-500 p-3 rounded-md hover:bg-gray-400">
                {t.read}
              </h1>
            </Link>
          </div>
        </div>
        <div className="flex justify-between text-gray-400 my-2 items-center">
          <div className="font-medium text-[#37517]">12.06.2000</div>
          
        </div>
        <div
          className="mb-2 uppercase text-md font-medium"
          dangerouslySetInnerHTML={{ __html: `${item?.title}` }}
        />
      </div>
    </>
  );
};

export default Post;
