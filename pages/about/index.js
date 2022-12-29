import React from "react";
import Navbar from "../components/Navbar";
import Toplink from "../components/Toplink";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import ru from "../../locales/ru";
import kz from "../../locales/kz";
import FlagIcon from "@mui/icons-material/Flag";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import en from "../../locales/en";
const About = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "ru" ? ru : locale === "kz" ? kz : locale === "en" ? en : null;
  return (
    <div>
      <Toplink />
      <Navbar />
      <div className="bg-[url('../public/title-bg.png')] bg-no-repeat bg-center bg-cover">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold py-8">{t.nav2}</h1>
        </div>
      </div>
      <div className="py-10">
        <div className="container mx-auto py-5">
          <div className="grid grid-cols-3 gap-5 items-center">
            <div className="col-span-1">
              <div className="text-3xl text-center">{t.abouttitle}</div>
            </div>
            <div className="col-span-2">
              <div className="text-xl flex pb-5">
                <div>
                  <FlagIcon
                    color="info"
                    fontSize="large"
                    sx={{ marginRight: "20px" }}
                  />
                </div>
                <div>{t.aboutsubtitle1}</div>
              </div>
              <div className="text-xl flex">
                <div>
                  <ReceiptLongIcon
                    color="info"
                    fontSize="large"
                    sx={{ marginRight: "20px" }}
                  />
                </div>
                <div>{t.aboutsubtitle12}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="container mx-auto ">
        <div className="bg-gray-200 p-5 mt-5 rounded-lg mb-5">
          <p className="text-[#275274] text-3xl mt-11 text-left font-bold">
            <span className="text-red-900 dont-bold text-5xl font-mono pr-5">
              01
            </span>
            {t.start}
          </p>
          <div className="grid grid-cols-2 gap-10 container mx-auto pt-8 text-md pb-8 items-center">
            <p className="leading-6">{t.start1}</p>
            <p className="leading-6">{t.start2}</p>
          </div>
        </div>
        <hr />
        <div className="bg-gray-200 p-5 mt-5 rounded-lg mb-5">
          <p className="text-[#275274] text-3xl mt-11 text-left font-bold">
            <span className="text-red-900 dont-bold text-5xl font-mono pr-5">
              02
            </span>
            {t.activity}
          </p>
          <div className="grid grid-cols-2 gap-10 container mx-auto pt-8 text-md pb-8 items-center">
            <p className="leading-6">{t.activity1}</p>
            <p className="leading-6">{t.activity2}</p>
          </div>
        </div>
        <hr />
        <div className="bg-gray-200 p-5 mt-5 rounded-lg mb-5">
          <p className="text-[#275274] text-3xl mt-11 text-left font-bold">
            <span className="text-red-900 dont-bold text-5xl font-mono pr-5">
              03
            </span>
            {t.relevance}
          </p>
          <div className="grid grid-cols-2 gap-10 container mx-auto pt-8 text-md pb-8 items-center">
            <p className="leading-6">{t.relevance1}</p>
            <p className="leading-6">{t.relevance2}</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
