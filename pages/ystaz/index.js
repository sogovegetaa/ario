import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Toplink from "../components/Toplink";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import Link from "next/link";
import { useRouter } from "next/router";
import ru from "../../locales/ru";
import kz from "../../locales/kz";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import Image from "next/image";
import en from "../../locales/en";
const Ystaz = () => {
  const router = useRouter();
  const { locale } = router;
  const t =
    locale === "ru" ? ru : locale === "kz" ? kz : locale === "en" ? en : null;
  return (
    <div>
      <Toplink />
      <Navbar />
      <div className="bg-[url('../public/title-bg.png')] bg-no-repeat bg-center bg-cover">
        <div className="container mx-auto">
          <h1 className="py-8 text-xl font-bold">
            <div className="flex items-center">
              <div>Фонд “Ұстаз”</div>
              <Image src="/ystaz-logo.png" width={175} height={75} />{" "}
            </div>{" "}
          </h1>
        </div>
      </div>
      <div className="bg-[#A9BAC7] py-[44px] md:px-[132px] px-0 m-5">
        <div className="bg-[url('../public/bg-8.png')] bg-no-repeat bg-center bg-cover py-[32px] md:px-[200px] px-0">
          <div className="bg-[#275274] bg-opacity-80  mx-auto py-[32px] ">
            <p className="text-white text-4xl text-center w-[80%] mx-auto">
              {t.ustaztitle}{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#275274] py-10">
        <div className="py-10 text-2xl font-bold text-center text-white">
          {t.ustazabout}
        </div>
        <div className="container grid grid-cols-1 gap-10 mx-auto md:grid-cols-3">
          <p className="text-xl font-semibold text-white">{t.ustazabout1}</p>
          <p className="text-xl font-semibold text-white">{t.ustazabout2}</p>
          <p className="text-xl font-semibold text-white">{t.ustazabout3}</p>
        </div>
      </div>
      <div className="py-10 bg-white">
        <p className="pb-8 text-2xl font-bold text-center">{t.mission} </p>
        <p className="container mx-auto text-xl font-semibold underline">
          {t.mission1}
        </p>
      </div>
      <div className="container grid grid-cols-12 pb-10 mx-auto mt-11 md:mb-0 mb-11">
        <div className="bg-[#275274] p-4 md:col-span-8 col-span-6 h-full">
          <ul className="text-lg text-white underline">
            <li>{t.documents}</li>
            <li className="py-2 pl-5">
              • {t.document1}
              <Link
                href="/document/ustaz"
                className="duration-300 hover:text-blue-500"
              >
                [{t.document}]
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-[url('../public/contact-bg.png')] bg-no-repeat bg-center bg-cover mb-10">
        <div className="container mx-auto">
          <h1 className="py-8 text-4xl font-bold">{t.outcontact} «ҰСТАЗ»</h1>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-5">
          <div className="border-r-2 border-gray-200 ">
            <div className="flex flex-col text-center">
              <div>
                <LocationOnIcon fontSize="large" color="info" />
              </div>
              <div>{t.usadres}</div>
            </div>
          </div>
          <div className="border-r-2 border-gray-200 ">
            <div className="flex flex-col text-center">
              <div>
                <PhoneIcon fontSize="large" color="info" />
              </div>
              <div>
                <Link href="tel:87078427058">{t.usnumber}</Link>
              </div>
            </div>
          </div>
          <div className="border-r-2 border-gray-200 ">
            <div className="flex flex-col text-center">
              <div>
                <EmailIcon fontSize="large" color="info" />
              </div>
              <div>info@ario.org.kz</div>
            </div>
          </div>
        </div>
      </div>
      <div class="container my-24 px-6 mx-auto"></div>
      <div className="container grid grid-cols-1 gap-10 mx-auto mb-5 md:grid-cols-2">
        <div className="hidden col-span-1 md:cols-span-1 md:block">
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
            {/* <table className="mb-10 table-auto">
              <tbody>
                <tr>
                  <td>Компания</td>
                  <td>
                  {t.ustaztitle}
                  </td>
                </tr>
                <tr>
                  <td>{t.adres}</td>
                  <td>Астана, XXXX, дом XX</td>
                </tr>
                <tr>
                  <td>БИН (ИИН)</td>
                  <td>XXXXXXXXXXXX</td>
                </tr>
                <tr>
                  <td>Банк</td>
                  <td>АО «Kaspi Bank»</td>
                </tr>
                <tr>
                  <td>ИИК</td>
                  <td>KZXXXXXXXXXXXXXXXXXX</td>
                </tr>
                <tr>
                  <td>KZTКБе</td>
                  <td>XX</td>
                </tr>
                <tr>
                  <td>БИК</td>
                  <td>CASPKZKA</td>
                </tr>
              </tbody>
            </table> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Ystaz;
