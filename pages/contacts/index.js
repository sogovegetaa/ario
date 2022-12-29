import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Toplink from "../components/Toplink";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import ArioLogo from "../../public/ario-logo.png"
import TalimgerLogo from "../../public/talimger-logo.png"
import YstazLogo from "../../public/ystaz-logo.png"
import Image from "next/image";
import { useRouter } from "next/router";
import ru from "../../locales/ru";
import kz from "../../locales/kz";
import en from "../../locales/en";
const Contacts = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "ru" ? ru : locale === "kz" ? kz : locale === "en" ? en : null;
  return (
    <div >
      <Toplink />
      <Navbar />
      <div className="bg-[url('../public/title-bg.png')] bg-no-repeat bg-center bg-cover">
        <div className="container mx-auto">
          <h1 className="text-xl font-bold py-4">{t.nav8}</h1>
        </div>
      </div>
      <div className="container mx-auto py-4 font-bold text-xl">
        {t.outcontact}:
      </div>
      <hr className="my-4 mx-auto w-1/2 h-1 bg-[#275274] rounded border-0 md:my-4" />
      <p className="container mx-auto py-4 font-bold text-2xl">
        {t.ztb}
      </p>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10 container mx-auto">
        <div>
          <p className="font-bold text-md py-1">{t.adres}:</p>
          <p className="text-md pb-4">{t.taladres}</p>

          <p className="font-bold text-md py-1">Телефон:</p>
          <p className="text-md pb-4">+7 700 202 9453 (г. Астана)</p>

          <p className="font-bold text-md py-1">{t.emaill} (e-mail):</p>
          <p className="text-md pb-4">info@ario.org.kz</p>
        </div>
        <div className="flex justify-center">
          <Image src={ArioLogo} alt="" className="w-[180px] h-[100px]" />
        </div>
      </div>
      <hr className="my-4 mx-auto w-1/2 h-1 bg-[#275274] rounded border-0 md:my-4" />
      <p className="container mx-auto py-4 font-bold text-2xl">
        {t.talimtitle}
      </p>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10 container mx-auto">
        <div>
          <p className="font-bold text-md py-1">{t.adres}:</p>
          <p className="text-md pb-4">{t.taladres}</p>

          <p className="font-bold text-md py-1">Телефон:</p>
          <p className="text-md pb-4">+7 700 202 9321  (г. Астана)</p>

          <p className="font-bold text-md py-1">{t.emaill} (e-mail):</p>
          <p className="text-md pb-4">managercspk@ustudy.kz</p>
        </div>
        <div className="flex justify-center">
          <Image src={TalimgerLogo} alt="" className="w-[200px] h-[75px]" />
        </div>
      </div>
      <hr className="my-4 mx-auto w-1/2 h-1 bg-[#275274] rounded border-0 md:my-4" />
      <p className="container mx-auto py-4 font-bold text-2xl">
        {t.ustaztitle}
      </p>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10 container mx-auto">
        <div>
          <p className="font-bold text-md py-1">{t.adres}:</p>
          <p className="text-md pb-4">{t.taladres}</p>

          <p className="font-bold text-md py-1">Телефон:</p>
          <p className="text-md pb-4">+7 700 202 9453 (г. Астана)</p>

          <p className="font-bold text-md py-1">{t.emaill} (e-mail):</p>
          <p className="text-md pb-4">info@ario.org.kz</p>
        </div>
        <div className="flex justify-center">
          <Image src={YstazLogo} alt="" className="w-[190px] h-[60px]" />
        </div>
      </div>
      <hr className="my-4 mx-auto w-1/2 h-1 bg-[#275274] rounded border-0 md:my-4" />
      <div className="flex justify-center my-10">
      <YMaps>
            <Map
              width="740px"
              height="470px"
              defaultState={{
                center: [51.120637, 71.472093],
                zoom: 15,
                controls: ["zoomControl", "fullscreenControl"],
              }}
              modules={["control.ZoomControl", "control.FullscreenControl"]}
            >
              <Placemark defaultGeometry={[51.120637, 71.472093]} />
            </Map>
          </YMaps>
      </div>
      <Footer />
    </div>
  );
};

export default Contacts;
