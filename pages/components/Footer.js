import React from "react";
import Image from 'next/image'
import facebook from '../../public/facebook.svg'
import vk from '../../public/vk.svg'
import twitter from '../../public/twitter.svg'
import telegram from '../../public/telegram.svg'
import instagram from '../../public/instagram.svg'
import youtube from '../../public/youtube.svg'
import { useRouter } from "next/router";
import ru from "../../locales/ru";
import kz from "../../locales/kz";
import Link from "next/link";
import en from "../../locales/en";
const Footer = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "ru" ? ru : locale === "kz" ? kz : locale === "en" ? en : null;
  return (
    <div className=" pb-11 bg-[#223D52] text-white">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 grid-cols-2 gap-10 pt-10">
          <div className="grid-cols-1 md:flex  flex-col   hidden">
            <p className="font-bold text-xl">{t.footerinf}</p>
            <ul>
              <li className="text-white text-lg py-2"><Link href="/">{t.nav1}</Link></li>
              <li className="text-white text-lg py-2"><Link href="/about">{t.nav2}</Link></li>
              <li className="text-white text-lg py-2"><Link href="/news">{t.nav4}</Link></li>
              <li className="text-white text-lg py-2"><Link href="#">{t.social}</Link></li>
              <li className="flex">
                <Image src={facebook} className="px-1  cursor-pointer" alt="" />
                <Image src={vk} className="px-1  cursor-pointer" alt="" />
                <Image src={twitter} className="px-1  cursor-pointer" alt="" />
                <Image src={telegram} className="px-1  cursor-pointer" alt="" />
                <Image src={instagram} className="px-1  cursor-pointer" alt="" />
                <Image src={youtube} className="px-1  cursor-pointer" alt="" />
              </li>
            </ul>
          </div>
          <div className="grid-cols-1 flex  flex-col">
            <p className="font-bold text-xl">{t.nav8}</p>
            <p className="text-lg font-bold pt-3">{t.adres}:</p>
            <p className="text-lg">{t.taladres}</p>
            <p className="text-lg font-bold pt-3">Телефон:</p>
            <p className="text-lg"><Link href="tel:87072029453">{t.arionumber}</Link></p>
          </div>
          <div className="grid-cols-1 flex  flex-col">
            <p className="font-bold text-xl">{t.workgraph}</p>
            <p className="text-lg py-2">{t.worktime}</p>
            <p className="text-lg py-2">{t.emaill} (e-mail):</p>
            <p className="text-lg py-2"><Link href="mailto:info@ario.org.kz?subject = Feedback&body = Message">info@ario.org.kz</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
