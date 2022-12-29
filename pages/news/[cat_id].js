import Link from "next/link";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Toplink from "../components/Toplink";
import Category from "../components/Category";
import Pagination from "../components/Pagination";
import Post from "./post/Post";
import Footer from "../components/Footer";
import Image from "next/image";
import NotFound from "../../public/asas.jpg";
import { useRouter } from "next/router";
import ru from "../../locales/ru";
import kz from "../../locales/kz";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import en from "../../locales/en";
const Catid = ({ articles, cat_id }) => {
  const [noOfElement, setOfElement] = useState(9);
  const router = useRouter();
  const { locale } = router;
  const t = locale === "ru" ? ru : locale === "kz" ? kz : locale === "en" ? en : null;
  const loadMore = () => {
    setOfElement(noOfElement + noOfElement);
  };
  const slice = articles.slice(0, noOfElement);
  return (
    <>
      <Toplink />
      <Navbar />
      <div className="bg-[url('../public/title-bg.png')] bg-no-repeat bg-center bg-cover">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold py-8">{t.nav4}</h1>
        </div>
      </div>
      <Category />
      <div className="container mx-auto">
      <div className="grid grid-cols-3 gap-5">
        {slice.length === 0 ? (
          <div className="text-center font-bold text-2xl pt-10">{t.nonew}</div>
        ) : (
          slice.map((item) => (
            <div key={item.id} className="container mx-auto py-5">
              
                <div className="p-10">
                  <div className="group relative flex aspect-[3/2] w-full justify-center overflow-hidden">
                    <span className="pixer">
                      <Image
                        src={item?.img ? item?.img : NotFound}
                        width={340}
                        height={227}
                        className="bg-light-500 pixer2 w-full"
                        alt=""
                      />
                    </span>
                    <div className="absolute top-0 left-0 z-10 flex h-full w-full cursor-pointer items-center justify-center gap-9 bg-dark/60 p-4 opacity-0 backdrop-blur-sm transition-all group-hover:gap-5 group-hover:opacity-100 ">
                      <Link href={`/news/post/${item?.id}`}>
                        <h1 className="font-bold text-xl bg-gray-500 p-3 rounded-md hover:bg-gray-400">
                          {t.read}
                        </h1>
                      </Link>
                    </div>
                  </div>
                  <div className="font-medium my-2 text-[#37517]">
                    12.06.2022
                  </div>
                  <div
                    className="mb-2 uppercase text-md font-medium"
                    dangerouslySetInnerHTML={{ __html: `${item?.title}` }}
                  />
                </div>
              </div>
           
          ))
        )}
        </div>
      </div>

      <div className="my-11 flex justify-center">
        {slice.lenght > 2 ? (
          <button
            onClick={loadMore}
            className="bg-[#306194] mt-5 py-4 px-10 rounded-lg text-white font-bold text-xl md:w-1/4 w-full hover:bg-sky-900 duration-300"
          >
            {t.loadmore}
          </button>
        ) : null}
      </div>
      <Footer />
    </>
  );
};

export default Catid;
export async function getServerSideProps(context) {
  const { params } = context;
  const { cat_id } = params;

  const res = await fetch(
    `https://arioapi.pythonanywhere.com/api/posts/?cat_id=${cat_id}`
  );
  const data = await res.json();
  return {
    props: {
      articles: data,
      cat_id,
    },
  };
}
