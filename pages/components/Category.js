import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import ru from "../../locales/ru";
import kz from "../../locales/kz";
import en from "../../locales/en";

const Category = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "ru" ? ru : locale === "kz" ? kz : locale === "en" ? en : null;
  const cats = [
    {"name": `${t.cat1}`},
    {"name": `${t.cat2}`},
    {"name": `${t.cat3}`},
    {"name": `${t.cat4}`},
    {"name": `${t.cat5}`}
]
  const [catId, setCatId] = useState(0)
  return (
    <div className="bg-[#275274]">
      <div className="container mx-auto py-3">
        <ul className="justify-center md:gap-20 gap-2 md:text-left text-center uppercase flex md:flex-row flex-col ">
          {/* {cats.map((obj, i)=>(
            <li onClick={()=>setCatId(i)} key={obj.name} className="text-white font-semibold hover:scale-105 duration-300 cursor-pointer my-auto">
                <p className={catId === i ? 'active':''}>{obj.name}</p>
            </li>
          ))} */}
          <li className="text-white font-semibold hover:scale-105 duration-300 cursor-pointer my-auto"><Link href="/news">{t.cat1}</Link></li>
          <li className="text-white font-semibold hover:scale-105 duration-300 cursor-pointer my-auto"><Link href="/news/1">{t.cat2}</Link></li>
          <li className="text-white font-semibold hover:scale-105 duration-300 cursor-pointer my-auto"><Link href="/news/2">{t.cat3}</Link></li>
          <li className="text-white font-semibold hover:scale-105 duration-300 cursor-pointer my-auto"><Link href="/news/3">{t.cat4}</Link></li>
          <li className="text-white font-semibold hover:scale-105 duration-300 cursor-pointer my-auto"><Link href="/news/4">{t.cat5}</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Category;
