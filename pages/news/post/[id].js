import Image from "next/image";
import { useRouter } from "next/router";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Toplink from "../../components/Toplink";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import Link from "next/link";
import { InsertEmoticon } from "@mui/icons-material";
import ru from "../../../locales/ru";
import kz from "../../../locales/kz";
import en from "../../../locales/en";
export default function Post({ post }) {
  const { query } = useRouter();
  const router = useRouter();
  const { locale } = router;
  const t = locale === "ru" ? ru : locale === "kz" ? kz : locale === "en" ? en : null;
  function postTitle() {
    return {
      __html: `
      <style>
        h1 {
          font-size: 2.25rem;
          line-height: 2.5rem;

          margin-bottom: 2.5rem;
        }
      </style>
      <h1>${post.title}</h1>`,
    };
  }
  function postDes() {
    return {
      __html: `<style>p{margin-bottom: 17px}</style>${post.desc}`,
    };
  }
  return (
    <div>
      <Toplink />
      <Navbar />
      <div className="bg-[url('../public/title-bg.png')] bg-no-repeat bg-center bg-cover">
        <div className="container mx-auto">
          <p className="text-4xl font-bold py-8">{t.news}</p>
        </div>
      </div>

      <div className="container mx-auto  p-10 mt-11 rounded-3xl mb-11">
        <h1 className="text-4xl font-bold ">
          <div dangerouslySetInnerHTML={postTitle()} />
        </h1>
        <div className="flex flex-col justify-center">
          <p className="text-xl my-3 font-medium">
            {post.about}
          </p>
          <Image
            src={`https://arioapi.pythonanywhere.com/${post.img}`}
            width={500}
            height={322}
            alt=""
            className="h-[322px]"
          />
        </div>
        <div
          className="text-[20px] leading-[26px] pt-5 max-w-5xl md:pl-[100px] pl-0"
          dangerouslySetInnerHTML={postDes()}
        />

        <Link href="/news">
          <button className="bg-[#306194] py-4 px-10 rounded-lg text-white font-bold text-xl md:w-1/4 w-full mt-10 hover:bg-sky-900 duration-300">
            {t.goback}
          </button>
        </Link>
        <div className="mt-7 flex justify-between">
          <div>
            <RemoveRedEyeOutlinedIcon fontSize="large" />
            <span className="font-bold pl-2 pr-5">350</span>
            <ChatBubbleOutlineOutlinedIcon fontSize="large" />
            <span className="font-bold pl-2">50</span>
          </div>
          <div>
            <span className="font-bold text-xl">12.12.2012</span>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
export async function getServerSideProps({ params }) {
  const res = await fetch(
    `https://arioapi.pythonanywhere.com/api/post/${params.id}`
  );
  const post = await res.json();

  return {
    props: { post },
  };
}
