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
import { YMaps, Map, Placemark } from "react-yandex-maps";
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
          <h1 className="py-8 text-4xl font-bold">{t.nav2}</h1>
        </div>
      </div>
      <div className="py-10">
        <div className="container py-5 mx-auto">
          <div className="grid items-center grid-cols-3 gap-5">
            <div className="col-span-1">
              <div className="text-3xl text-center">{t.abouttitle}</div>
            </div>
            <div className="col-span-2">
              <div className="flex pb-5 text-xl">
                <div>
                  <FlagIcon
                    color="info"
                    fontSize="large"
                    sx={{ marginRight: "20px" }}
                  />
                </div>
                <div>{t.aboutsubtitle1}</div>
              </div>
              <div className="flex text-xl">
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
        <div className="p-5 mt-5 mb-5 bg-gray-200 rounded-lg">
          <p className="text-[#275274] text-3xl mt-11 text-left font-bold">
            <span className="pr-5 font-mono text-5xl text-red-900 dont-bold">
              01
            </span>
            {t.start}
          </p>
          <div className="container grid items-center grid-cols-2 gap-10 pt-8 pb-8 mx-auto text-md">
            <p className="leading-6">{t.start1}</p>
            <p className="leading-6">{t.start2}</p>
          </div>
        </div>
        <hr />
        <div className="p-5 mt-5 mb-5 bg-gray-200 rounded-lg">
          <p className="text-[#275274] text-3xl mt-11 text-left font-bold">
            <span className="pr-5 font-mono text-5xl text-red-900 dont-bold">
              02
            </span>
            {t.activity}
          </p>
          <div className="container grid items-center grid-cols-2 gap-10 pt-8 pb-8 mx-auto text-md">
            <p className="leading-6">{t.activity1}</p>
            <p className="leading-6">{t.activity2}</p>
          </div>
        </div>
        <hr />
        <div className="p-5 mt-5 mb-5 bg-gray-200 rounded-lg">
          <p className="text-[#275274] text-3xl mt-11 text-left font-bold">
            <span className="pr-5 font-mono text-5xl text-red-900 dont-bold">
              03
            </span>
            {t.relevance}
          </p>
          <div className="container grid items-center grid-cols-2 gap-10 pt-8 pb-8 mx-auto text-md">
            <p className="leading-6">{t.relevance1}</p>
            <p className="leading-6">{t.relevance2}</p>
          </div>
        </div>
      </div>
      <div className="container grid grid-cols-1 gap-10 mx-auto mb-5 md:grid-cols-2">
        <div className="hidden col-span-1 md:cols-span-1 md:block ">
          <YMaps>
            <Map
              width="400px"
              height="200px"
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
        <div>
          <div className="container mx-auto text-3xl font-bold">{t.rek}</div>
          <div className="container py-5 mx-auto font-semibold text-md md:text-md">
            <table className="mb-10 table-auto">
              <tbody>
                <tr>
                  <td>Компания</td>
                  <td>{t.ariocompanyname}</td>
                </tr>
                <tr>
                  <td>{t.adres}</td>
                  <td>{t.arioadress}</td>
                </tr>
                <tr>
                  <td>БИН (ИИН)</td>
                  <td>170140015381</td>
                </tr>
                <tr>
                  <td>Филиал </td>
                  <td>АО Kaspi Bank в г.Алматы</td>
                </tr>
                <tr>
                  <td>ИИК</td>
                  <td>KZ28722S000001280902</td>
                </tr>
                <tr>
                  <td>БИК</td>
                  <td>CASPKZKA </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
