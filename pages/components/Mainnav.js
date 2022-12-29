import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Link from 'next/link';
import { Router, useRouter } from 'next/router';
import kz from '../../locales/kz';
import ru from '../../locales/ru';
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import en from '../../locales/en';
const Mainnav = () => {
  const router = useRouter();
  const { locale } = router;


  const changeLanguage = (e) => {
    const locale = e.target.value;
    router.push(router.pathname, router.asPath, { locale });
  };
  const t = locale === "ru" ? ru : locale === "kz" ? kz : locale === "en" ? en : null;
  let Links =[
    {name:`${t.nav1}`,link:"/"},
    {name:`${t.nav2}`,link:"/about"},
    {name:`${t.nav3}`,link:"/join"},
    {name:`${t.nav4}`,link:"/news"},
    {name:`${t.nav5}`,link:"/article"},
    {name:`${t.nav6}`,link:"/talimger"},
    {name:`${t.nav7}`,link:"/ystaz"},
    {name:`${t.nav8}`,link:"/contacts"},
  ];
  const [open, setOpen] = useState(true);

  return (
    <div className="bg-[#172F42] sticky top-0 drop-shadow shadow-dark-600 z-50">
        <div className='container mx-auto md:py-3 py-7'>
        <div className="text-3xl md:hidden relative">
          {open ? (
            <MenuIcon
              sx={{ position: "absolute", right: "2rem", cursor: "pointer", zIndex: '11' }}
              onClick={() => setOpen(!open)}
            />
          ) : (
            <CloseIcon
              sx={{ position: "absolute", right: "2rem", cursor: "pointer" , zIndex: '11'}}
              onClick={() => setOpen(!open)}
            />
          )}
        </div>
        <ul className={`md:flex md:justify-between gap-4 md:static bg-[#172F42] absolute left-0 w-full md:w-auto md:pl-0 pl-9 ${open ? "top-[-540px]" : "top-[18rem] z-10"}`}>
            {Links.map((item)=>(
              <li key={item.name} className='text-white font-semibold hover:scale-105 duration-300 cursor-pointer md:my-0 my-7'><Link href={`${item.link}`}>{item.name}</Link></li>
            ))}
            
            <li className='text-white font-semibold hover:scale-105 duration-300 cursor-pointer md:my-0 my-7'>
            <select
            onChange={changeLanguage}
            defaultValue={locale}
            className="text-white text-shadow-sm text-lg bg-transparent tracking-wide"
          >
            <option className="text-black" value="ru">RU</option>
            <option className="text-black" value="kz">QAZ</option>
            <option className="text-black" value="en">ENG</option>
          </select>
            </li>
        </ul>
    </div>
    </div>
    
  )
}

export default Mainnav