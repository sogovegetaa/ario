import Link from "next/link";
import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Toplink from "../components/Toplink";
import { useRouter } from "next/router";
import ru from "../../locales/ru";
import kz from "../../locales/kz";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import en from "../../locales/en";
const Ariojoin = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "ru" ? ru : locale === "kz" ? kz : locale === "en" ? en : null;
  return (
    <div>
      <Toplink />
      <Navbar />
      <div className="bg-[url('../public/title-bg.png')] bg-no-repeat bg-center bg-cover">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold py-8">{t.join1}</h1>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="w-full">
          <div className="flex flex-col w-11/12 text-md pl-9">
            <div className="flex pb-3 pt-5 border-b border-gray-300 bg-gray-200 p-4 rounded-md mb-1 mt-9 text-2xl font-medium">
              {t.join2}
            </div>
            <div className="flex pb-3 pt-5 border-b border-gray-300 bg-gray-200 p-4 rounded-md mb-1 ml-9">
              <span className="font-mono font-bold text-3xl pr-5">01</span>
              {t.list1};
            </div>
            <div className="flex pb-3 border-b border-gray-300 bg-gray-200 p-4 rounded-md mb-1 ml-9">
              <span className="font-mono font-bold text-3xl pr-5">02</span>
              {t.list2};
            </div>
            <div className="flex pb-3 border-b border-gray-300 bg-gray-200 p-4 rounded-md mb-1 ml-9">
              <span className="font-mono font-bold text-3xl pr-5">03</span>
              {t.list3};
            </div>
            <div className="flex pb-3 border-b border-gray-300 bg-gray-200 p-4 rounded-md mb-1 ml-9">
              <span className="font-mono font-bold text-3xl pr-5">04</span>
              {t.list4};
            </div>
            <div className="flex pb-3 border-b border-gray-300 bg-gray-200 p-4 rounded-md mb-1 ml-9">
              <span className="font-mono font-bold text-3xl pr-5">05</span>
              {t.list5};
            </div>
            <div className="flex pb-3 border-b border-gray-300 bg-gray-200 p-4 rounded-md mb-1 ml-9">
              <span className="font-mono font-bold text-3xl pr-5">06</span>
              {t.list6};
            </div>
            <div className="flex pb-3 border-b border-gray-300 bg-gray-200 p-4 rounded-md mb-1 ml-9">
              <span className="font-mono font-bold text-3xl pr-5">07</span>
              {t.list7}
            </div>
          </div>

          <div className="flex flex-col w-11/12 text-md pl-9">
            <div className="flex pb-3 pt-5 border-b border-gray-300 bg-gray-200 p-4 rounded-md mb-1 mt-9 text-xl font-medium">
              {t.protocol}
            </div>
            <div className="flex pb-3 pt-5 border-b border-gray-300 bg-gray-200 p-4 rounded-md mb-1 ml-9">
              <span className="font-mono font-bold text-3xl pr-5">
                <ArrowForwardIcon fontSize="large" />
              </span>
              {t.protocol1};
            </div>
            <div className="flex pb-3 border-b border-gray-300 bg-gray-200 p-4 rounded-md mb-1 ml-9">
              <span className="font-mono font-bold text-3xl pr-5">
                <ArrowForwardIcon fontSize="large" />
              </span>
              {t.protocol2}.
            </div>
          </div>

          <div className="container mx-auto">
            
            <div
              class="flex items-center bg-blue-400 text-white text-md font-bold px-4 py-3 mb-8 mx-11"
              role="alert"
            >
              <svg
                class="fill-current w-4 h-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" />
              </svg>
              <p>{t.forgive}</p>
            </div>
          </div>

          <Link href="/join/demand">
            {" "}
            <button className="bg-green-500 px-11 py-3 mt-10 mb-10 rounded-3xl text-white font-bold hover:bg-black duration-300">
              {t.zavbtn}
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Ariojoin;
