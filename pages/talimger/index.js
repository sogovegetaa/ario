import Link from "next/link";
import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Toplink from "../components/Toplink";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import Image from "next/image";
import { useRouter } from "next/router";
import ru from "../../locales/ru";
import kz from "../../locales/kz";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import en from "../../locales/en";
const Talimger = () => {
  const router = useRouter();
  const { locale } = router;
  const t =
    locale === "ru" ? ru : locale === "kz" ? kz : locale === "en" ? en : null;
  return (
    <div className="font-semibold">
      <Toplink />
      <Navbar />
      <div className="bg-[url('../public/title-bg.png')] bg-no-repeat bg-center bg-cover">
        <div className="container mx-auto">
          <h1 className="py-4 text-xl font-bold">
            <div className="flex items-center">
              <div>{t.talimtitle}</div>
              <Image src="/talimger-logo.png" width={250} height={100} />{" "}
            </div>{" "}
          </h1>
        </div>
      </div>
      <div className="bg-[#A9BAC7] py-[22px] md:px-[33px] px-0 m-5">
        <div className="bg-[url('../public/bg-6.png')] bg-no-repeat bg-center bg-cover py-[32px] md:px-[114px] px-0">
          <div className="bg-[#275274] bg-opacity-80  mx-auto py-[10px] ">
            <div
              className="text-white text-md w-[80%] mx-auto text-center"
              dangerouslySetInnerHTML={{ __html: `${t.talim1}` }}
            />

            <p className="text-white text-md w-[80%] mx-auto text-center">
              {t.talim2}
            </p>
          </div>
        </div>
      </div>
      <p className="text-[#275274] text-center font-bold text-xl">{t.sert}</p>
      <ul className="container mx-auto grid md:grid-cols-3 grid-cols-1 gap-10 text-[#275274] py-10 font-bold">
        <li className="text-md">• {t.sert1}</li>
        <li className="text-md">• {t.sert2}</li>
        <li className="text-md">• {t.sert3}</li>
      </ul>
      <div className="bg-[#275274] p-11">
        <p className="w-full mx-auto text-xl font-bold text-center text-white md:w-11/12">
          {t.organ}
        </p>
      </div>
      <p className="text-[#275274] text-md font-bold container mx-auto py-10">
        {t.sertetap}
      </p>
      <div className="container grid grid-cols-10 gap-10 mx-auto">
        <div className="col-span-9">
          <div className="grid grid-cols-1 md:grid-cols-5">
            <div className="bg-[#3C6382] text-white py-auto text-center p-3 border-r-[1px] border-white">
              <Link href="/talimger/talimpost">{t.sertetap1}</Link>
            </div>
            <div className="bg-[#527590] text-white py-auto text-center p-3 border-r-[1px] border-white">
              {t.sertetap2}
            </div>
            <div className="bg-[#67869D] text-white py-auto text-center p-3 border-r-[1px] border-white">
              {t.sertetap3}
            </div>
            <div className="bg-[#7D97AC] text-white py-auto text-center p-3 border-r-[1px] border-white">
              {t.sertetap4}
            </div>
            <div className="bg-[#93A8B9] text-white py-auto text-center p-3 border-r-[1px] border-white">
              {t.sertetap5}
            </div>
          </div>
        </div>
      </div>
      <div className="container grid grid-cols-12 mx-auto mt-11 md:mb-0 mb-11">
        <div className="bg-[#275274] p-4 md:col-span-8 col-span-6 h-full">
          <ul className="text-lg text-white underline">
            <li>{t.documents}</li>
            <li className="py-2 pl-5">
              • {t.document1}
              <Link
                href="/document/ustav"
                className="duration-300 hover:text-blue-500"
              >
                [{t.document}]
              </Link>
            </li>
            <li className="py-2 pl-5">
              • {t.document2}
              <Link href="#" className="duration-300 hover:text-blue-500">
                [{t.document}]
              </Link>
            </li>
            <li className="py-2 pl-5">
              • {t.document3}
              <Link
                href="/document/ustavcs"
                className="duration-300 hover:text-blue-500"
              >
                [{t.document}]
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-2 md:col-span-4">
          <Image
            width={250}
            height={190}
            src="/isometric.png"
            alt=""
            className="hidden col-span-4 md:block"
          />
        </div>
      </div>
      <div className="bg-[url('/bg-7.png')] bg-no-repeat bg-center bg-cover p-3 mt-10">
        <div className="container py-3 mx-auto text-xl font-bold text-white">
          {t.candidate}
        </div>
        <div className="bg-[#275274] bg-opacity-70 container mx-auto">
          <ul className="p-3 font-semibold text-white text-md">
            <li className=" text-md">{t.candidate1}:</li>
            <li className="ml-5  text-md">• {t.candidate2};</li>
            <li className="ml-5  text-md">• {t.candidate3};</li>
            <li className="ml-5  text-md">• {t.candidate4};</li>
            <li className="ml-5  text-md">• {t.candidate5};</li>
            <li className="ml-5  text-md">• {t.candidate6}.</li>
          </ul>
        </div>
      </div>
      <div className="bg-[#D4DCE3]">
        <div className="text-[#275274E5] container mx-auto font-bold text-3xl py-4">
          {t.spec}
        </div>
        <ul className="container mx-auto text-[#275274E5] text-lg pb-8 pl-10">
          <li>1. {t.spec1};</li>
          <li>2. {t.spec2};</li>
          <li>3. {t.spec3};</li>
          <li>4. {t.spec4};</li>
          <li>5. {t.spec5};</li>
          <li>6. {t.spec6};</li>
          <li>7. {t.spec7};</li>
          <li>8. {t.spec8};</li>
          <li>9. {t.spec9}.</li>
        </ul>
      </div>
      <div className="bg-[url('../public/contact-bg.png')] bg-no-repeat bg-center bg-cover mb-10">
        <div className="container mx-auto">
          <h1 className="py-8 text-2xl font-bold">{t.talimtitle}</h1>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-5">
          <div className="border-r-2 border-gray-200 ">
            <div className="flex flex-col text-center">
              <div>
                <LocationOnIcon fontSize="large" color="info" />
              </div>
              <div>{t.taladres}</div>
            </div>
          </div>
          <div className="border-r-2 border-gray-200 ">
            <div className="flex flex-col text-center">
              <div>
                <PhoneIcon fontSize="large" color="info" />
              </div>
              <div>
                <Link href="tel:87078427058">{t.talnumber}</Link>
              </div>
            </div>
          </div>
          <div className="border-r-2 border-gray-200 ">
            <div className="flex flex-col text-center">
              <div>
                <EmailIcon fontSize="large" color="info" />
              </div>
              <div>managercspk@ustudy.kz</div>
            </div>
          </div>
        </div>
      </div>
      <div class="container my-24 px-6 mx-auto"></div>
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
            {/* <table className="mb-10 table-auto">
              <tbody>
                <tr>
                  <td>Компания</td>
                  <td>{t.talimtitle}</td>
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

export default Talimger;
