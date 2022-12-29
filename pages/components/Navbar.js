import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import CloseIcon from "@mui/icons-material/Close";
import LogoColor from "../../public/logo-ru.png";
import Image from "next/image";
import { useRouter } from "next/router";
import ru from "../../locales/ru";
import kz from "../../locales/kz";
import en from "../../locales/en";
const Navbar = () => {
  const [open, setOpen] = useState(true);
  const router = useRouter();
  const { locale } = router;
  const t = locale === "ru" ? ru : locale === "kz" ? kz : locale === "en" ? en : null;

  const changeLanguage = (e) => {
    const locale = e.target.value;
    router.push(router.pathname, router.asPath, { locale });
  };
  let Links = [
    {name:`${t.nav1}`,link:"/"},
    {name:`${t.nav2}`,link:"/about"},
    {name:`${t.nav3}`,link:"/join"},
    {name:`${t.nav4}`,link:"/news"},
    {name:`${t.nav5}`,link:"/article"},
    {name:`${t.nav6}`,link:"/talimger"},
    {name:`${t.nav7}`,link:"/ystaz"},
    {name:`${t.nav8}`,link:"/contacts"},
  ];

  return (
    <div className="sticky top-0 bg-white drop-shadow shadow-dark-600 z-50">
      <div className="container mx-auto md:py-3 pt-[0.75rem] pb-[1.75rem]">
        <div className="text-3xl md:hidden">
          {open ? (
            <MenuIcon
              sx={{ position: "absolute", right: "2rem", cursor: "pointer", zIndex: '11' }}
              onClick={() => setOpen(!open)}
            />
          ) : (
            <CloseIcon
              sx={{ position: "absolute", right: "2rem", cursor: "pointer", zIndex: '11' }}
              onClick={() => setOpen(!open)}
            />
          )}
        </div>
        <ul
          className={`md:flex md:justify-between gap-4 md:static bg-white absolute top-0 left-0 w-full md:w-auto md:pl-0 pl-9 ${
            open ? "top-[-592px]" : "top-20 z-10 sticky"
          } `}
        >
         
          {Links.map((item) => (
            <li
              key={item.name}
              className="text-dark font-semibold hover:scale-105 duration-300 cursor-pointer flex items-center md:my-0 my-7"
            >
              <Link href={`${item.link}`}>{item.name}</Link>
            </li>
          ))}
          <li className="text-dark font-semibold hover:scale-105 duration-300 cursor-pointer flex items-center md:my-0 my-7">
            <select
              onChange={changeLanguage}
              defaultValue={locale}
              className="text-dark text-shadow-sm text-lg bg-transparent tracking-wide"
            >
              <option value="ru">
                RU
              </option>
              <option value="kz">
                QAZ
              </option>
              <option value="en">ENG</option>
            </select>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
