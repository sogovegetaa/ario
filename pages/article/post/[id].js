import Link from "next/link";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Toplink from "../../components/Toplink";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import Comments from "../../components/Comments";
import Axios from "axios";
import Footer from "../../components/Footer";
import { useRouter } from "next/router";
import ru from "../../../locales/ru";
import kz from "../../../locales/kz";
import en from "../../../locales/en";
const Innerpost = ({ data }) => {
  const navigate = useRouter();
  const router = useRouter();
  const { locale } = router;
  const t = locale === "ru" ? ru : locale === "kz" ? kz : locale === "en" ? en : null;
  const url = "https://arioapi.pythonanywhere.com/api/comment/";
  const [qata, setQata] = useState({
    name: "",
    comment: "",
    artticle: data.id,
  });

  function submit(e) {
    
    Axios.post(url, {
      name: qata.name,
      comment: qata.comment,
      artticle: data.id,
    }).then((res) => {
      console.log(res.data);
      
    });
  }

  function handle(e) {
    const newqata = { ...qata };
    newqata[e.target.id] = e.target.value;
    setQata(newqata);
  }
  const [comment, setComment] = useState([]);

  useEffect(() => {
    fetch("https://arioapi.pythonanywhere.com/api/comment/")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setComment(data);
        console.log(data);
      });
  }, []);
  function artiDesc() {
    return {
      __html: `${data.desc}`,
    };
  }

  return (
    <>
      <Toplink />
      <Navbar />
      <div className="bg-[url('../public/title-bg.png')] bg-no-repeat bg-center bg-cover">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold py-8">{t.nav5}</h1>
        </div>
      </div>
      <div className="container mx-auto bg-[#275274CC] p-10 mt-11 rounded-3xl mb-11">
        <h1 className="text-3xl font-bold">{t.srticle}</h1>
        <h1 className="text-4xl font-bold md:p-11 p-0 md:pt-0 pt-5">
          {data.title}
        </h1>
        <p className="pl-11 pb-8 text-lg">Автор: {data.author}</p>
        <div
          className="md:pl-11 pl-0 text-3xl"
          dangerouslySetInnerHTML={artiDesc()}
        />

        <Link href="/article">
          <button className="bg-[#306194] py-4 px-10 rounded-lg text-white font-bold text-xl md:w-1/4 w-full mt-10 hover:bg-sky-900 duration-300">
            {t.goback}
          </button>
        </Link>
        <div className="mt-7 flex justify-between">
          <div>
            <RemoveRedEyeOutlinedIcon fontSize="large" />
            <span className="font-bold pl-2 pr-5">350</span>
            <ChatBubbleOutlineOutlinedIcon fontSize="large" />
            <span className="font-bold pl-2">{comment.length}</span>
          </div>
          <div>
            <span className="font-bold text-xl">{data.date}</span>
          </div>
        </div>
        <hr className="my-8 h-[2px] bg-gray-200 border-0 dark:bg-gray-700" />
        <p className="pt-10 text-bold text-xl underline italic ">{t.comment}</p>
        <form className="pt-10" onSubmit={(e) => submit(e)}>
          <input
            type="text"
            name="name"
            id="name"
            className="bg-[#30619E] bg-opacity-70 py-4 px-8 mr-7 rounded-lg text-xl text-gray-900 text-bold w-1/2"
            placeholder={`${t.name}:`}
            onChange={(e) => handle(e)}
            value={qata.name}
          />

          <textarea
            id="comment"
            rows="4"
            name="comment"
            className="block p-4 px-8 w-full text-xl mt-10 text-gray-900 bg-[#30619E] bg-opacity-70 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
            placeholder={`${t.writecomment}`}
            onChange={(e) => handle(e)}
            value={qata.comment}
          />
          <div className="flex md:justify-end justify-start">
            <button className="bg-[#306194] py-4 px-10 rounded-lg text-white font-bold text-lg md:w-1/4 w-full mt-10 hover:bg-sky-900 duration-300">
              {t.putcomment}
            </button>
          </div>
        </form>
        <hr className="my-8 h-[2px] bg-gray-200 border-0 dark:bg-gray-700" />
        <Comments dataid={data.id} />
      </div>
      <Footer />
    </>
  );
};

export async function getServerSideProps({ params }) {
  const res = await fetch(
    `https://arioapi.pythonanywhere.com/api/articles/${params.id}`
  );
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default Innerpost;
