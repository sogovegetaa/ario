import Link from "next/link";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Toplink from "../components/Toplink";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import ru from "../../locales/ru";
import kz from "../../locales/kz";
import en from "../../locales/en";
const Article = ({ arti }) => {
  const [comment, setComment] = useState([]);
  const router = useRouter();
  const { locale } = router;
  const t =
    locale === "ru" ? ru : locale === "kz" ? kz : locale === "en" ? en : null;
  useEffect(() => {
    fetch("https://arioapi.pythonanywhere.com/api/comment/")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setComment(data);
      });
  }, []);
  //console.log(comment[0].artticle);
  return (
    <div>
      <Toplink />
      <Navbar />
      <div className="bg-[url('../public/title-bg.png')] bg-no-repeat bg-center bg-cover">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold py-8">{t.article}</h1>
        </div>
      </div>
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-dark pt-10">{t.article}</h1>
        <section class="text-gray-600 body-font overflow-hidden">
          <div class="container px-5 py-24 mx-auto">
            <div class="-my-8 divide-y-2 divide-gray-100">
              {arti.map((item)=>(
                <div key={item.id} class="py-8 flex flex-wrap md:flex-nowrap">
                <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <span class="font-semibold title-font text-gray-700">
                    {item.author}
                  </span>
                  <span class="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
                </div>
                <div class="md:flex-grow">
                  <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">
                  {item.title}
                  </h2>
                  <p class="leading-relaxed">
                    Glossier echo park pug, church-key sartorial biodiesel
                    vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf
                    moon party messenger bag selfies, poke vaporware kombucha
                    lumbersexual pork belly polaroid hoodie portland craft beer.
                  </p>
                  <Link href={`/article/post/${item.id}`} class="text-indigo-500 inline-flex items-center mt-4">
                    {t.read}
                    <svg
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
              ))}
            </div>
          </div>
        </section>
        
      </div>
      <Footer />
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch("https://arioapi.pythonanywhere.com/api/articles/");
  const data = await res.json();

  return {
    props: {
      arti: data,
    },
  };
}
export default Article;
