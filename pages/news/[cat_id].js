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
            <Post key={item.id} articles={articles} item={item} />
          ))
        )}
        </div>
      </div>

      <div className="my-11 flex justify-center">
        
          <button
            onClick={loadMore}
            className="bg-[#306194] mt-5 py-4 px-10 rounded-lg text-white font-bold text-xl md:w-1/4 w-full hover:bg-sky-900 duration-300"
          >
            {t.loadmore}
          </button>
     
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
