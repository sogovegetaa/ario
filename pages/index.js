import Head from "next/head";
import Toplink from "./components/Toplink";
import Mainnav from "./components/Mainnav";
import Footer from "./components/Footer";
import Link from "next/link";
import { useRouter } from "next/router";
import ru from "../locales/ru";
import kz from "../locales/kz";
import Image from "next/image";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import NotFound from "../public/noimg.png";
import { useState } from "react";
import en from "../locales/en";
export default function Home({ data }) {
  const [noOfElement, setOfElement] = useState(3);
  const router = useRouter();
  const { locale } = router;
  const t =
    locale === "ru" ? ru : locale === "kz" ? kz : locale === "en" ? en : null;
  const slice = data.slice(0, noOfElement);

  return (
    <div>
      <Head>
        <title>Ario</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Toplink />
      <div className="bg-[#275274]">
        <div className="container flex justify-between py-10 mx-auto main-head ">
          <Image
            src="/logo.png"
            alt=""
            className="hidden md:block"
            width={150}
            height={150}
          />
          <h1 className="w-full px-1 my-auto text-4xl font-bold text-center text-white md:text-right md:w-1/2 md:px-0">
            {t.asoc}
          </h1>
        </div>
      </div>
      <Mainnav />

      <div className="bg-[url('../public/bg-1.png')] bg-no-repeat bg-center bg-cover py-4">
        <div className="container grid grid-cols-1 mx-auto md:grid-cols-2">
          <div className="flex flex-col justify-center col-span-1">
            <h1
              dangerouslySetInnerHTML={{ __html: `${t.hometitle}` }}
              className="mb-5 text-2xl font-bold text-center text-dark"
            />
            <p className="text-xl font-bold text-center text-dark">
              {t.homesubtitle}
            </p>
          </div>
          <div className="col-span-1">
            <Image src="/hero-img.png" width={546} height={452} alt="" />
          </div>
        </div>
      </div>
      <section className="bg-[#f3f5fa] py-3 text-center">
        <div className="container mx-auto">
          <div className="grid grid-cols-3 md:grid-cols-9">
            <div className="hidden md:block"></div>
            <div className="hidden md:block"></div>
            <div className="flex items-center justify-center">
              <Image
                src="/logo-ru.png"
                width={200}
                height={62}
                className="py-[15px]"
                alt=""
              />
            </div>
            <div className="hidden md:block"></div>
            <div className="flex items-center justify-center">
              <Link href="/talimger">
                {" "}
                <Image
                  src="/talimger-logo.png"
                  width={200}
                  height={62}
                  className="py-[15px]"
                  alt=""
                />
              </Link>
            </div>
            <div className="hidden md:block"></div>
            <div className="flex items-center justify-center">
              <Link href="/ystaz">
                {" "}
                <Image
                  src="/ystaz-logo.png"
                  width={200}
                  height={62}
                  className="py-[15px]"
                  alt=""
                />
              </Link>
            </div>
            <div className="hidden md:block"></div>
          </div>
        </div>
      </section>
      <div className="relative pb-5 pt-11">
        <h1 className="text-[#37517] text-3xl text-center font-bold uppercase  exers">
          {t.exer}
        </h1>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 pt-5 pb-10 md:grid-cols-2">
          <div className="flex flex-wrap mx-auto text-2xl md:flex-col">
            <p className="py-1">
              <DoneAllIcon color="primary" sx={{ marginRight: "15px" }} />
              {t.exerr1}
            </p>

            <p className="py-1">
              <DoneAllIcon color="primary" sx={{ marginRight: "15px" }} />
              {t.exerr2}
            </p>

            <p className="py-1">
              <DoneAllIcon color="primary" sx={{ marginRight: "15px" }} />
              {t.exerr3}
            </p>
          </div>
          <div className="flex items-center justify-center text-xl font-medium">
            {t.exer2}
          </div>
        </div>
      </div>
      <div className="container py-5 mx-auto">
        <div className="mb-8 text-3xl font-bold uppercase">{t.nav4}:</div>
        <div className="grid grid-cols-3 gap-5">
          {slice.map((item) => (
            <div key={item.id} className="p-10">
              <div className="group relative flex aspect-[3/2] w-full justify-center overflow-hidden">
                <span className="pixer">
                  <Image
                    src={item?.img ? item?.img : NotFound}
                    width={340}
                    height={227}
                    className="w-full bg-light-500 pixer2"
                    alt=""
                  />
                </span>
                <div className="absolute top-0 left-0 z-10 flex items-center justify-center w-full h-full p-4 transition-all opacity-0 cursor-pointer gap-9 bg-dark/60 backdrop-blur-sm group-hover:gap-5 group-hover:opacity-100 ">
                  <Link href={`/news/post/${item?.id}`}>
                    <h1 className="p-3 text-xl font-bold bg-gray-500 rounded-md hover:bg-gray-400">
                      {t.read}
                    </h1>
                  </Link>
                </div>
              </div>
              <div className="font-medium my-2 text-[#37517]">12.06.2022</div>
              <div className="mb-5 font-medium uppercase text-md">
                {item.title}
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <Link href="/news">
            <button className="pb-3 text-gray-500 duration-200 border-b border-gray-500 hover:bg-gray-200 hover:p-3">
              {t.loadmore}
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export async function getServerSideProps(context) {
  const res = await fetch("https://arioapi.pythonanywhere.com/api/posts/");
  const data = await res.json();
  return {
    props: { data }, // will be passed to the page component as props
  };
}
