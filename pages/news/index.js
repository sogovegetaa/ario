import Link from "next/link";
import React, { useState } from "react";
import Category from "../components/Category";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Pagination from "../components/Pagination";
import axios from "axios";
import Toplink from "../components/Toplink";
import Post from "./post/Post";
import { useRouter } from "next/router";
import ru from "../../locales/ru";
import kz from "../../locales/kz";
import en from "../../locales/en";
const News = ({ data }) => {
  const [noOfElement, setOfElement] = useState(3);
  const router = useRouter();
  const { locale } = router;
  const t = locale === "ru" ? ru : locale === "kz" ? kz : locale === "en" ? en : null;
  const loadMore = () => {
    setOfElement(noOfElement + noOfElement);
  };
  const slice = data.slice(0, noOfElement);
  console.log(data);
  return (
    <div>
      <Toplink />
      <Navbar />
      <div className="bg-[url('../public/title-bg.png')] bg-no-repeat bg-center bg-cover">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold py-8">{t.nav4}</h1>
        </div>
      </div>
      <Category />
      <div className="container mx-auto py-5">
        <div className="grid grid-cols-3 gap-5">
        {slice.map((item) => (
        <Post key={item.id} data={data} item={item} />
      ))}
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
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch("https://arioapi.pythonanywhere.com/api/posts/?cat_id=");
  const data = await res.json();

  return {
    props: { data },
  };
}
export default News;
