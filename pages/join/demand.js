import React, { useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Toplink from "../components/Toplink";
import Axios from "axios";
import { sendError } from "next/dist/server/api-utils";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import ru from "../../locales/ru";
import kz from "../../locales/kz";
import en from "../../locales/en";
const Demand = () => {
  const [isSend, setIsSend] = useState(false);
  const [isError, setIsError] = useState(false);
  const [btnSend, setBtnSend] = useState(true);
  const router = useRouter();
  const { locale } = router;
  const t =
    locale === "ru" ? ru : locale === "kz" ? kz : locale === "en" ? en : null;
  const url = "https://arioapi.pythonanywhere.com/apir/request/";
  const [data, setData] = useState({
    ur_name: "",
    biin: "",
    fio: "",
    job_title: "",
    email: "",
    number: "",
    city_number: "",
    ur_adres: "",
    post_adres: "",
    post_index: "",
  });
  function submit(e) {
    e.preventDefault();
    Axios.post(url, {
      ur_name: data.ur_name,
      biin: data.biin,
      fio: data.fio,
      job_title: data.job_title,
      email: data.email,
      number: data.number,
      city_number: data.city_number,
      ur_adres: data.ur_adres,
      post_adres: data.post_adres,
      post_index: data.post_index,
    })
      .then((res) => {
        console.log(res.data);
        setIsSend(true);
        setTimeout(() => setIsSend(false), 2000);

        setData({
          ur_name: "",
          biin: "",
          fio: "",
          job_title: "",
          email: "",
          number: "",
          city_number: "",
          ur_adres: "",
          post_adres: "",
          post_index: "",
        });
      })
      .catch((err) => {
        console.log(err.message);
        setIsError(true);
        setTimeout(() => setIsError(false), 2000);
      });
  }
  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
  }
  function sendBtn() {
    setBtnSend(false);
    setTimeout(() => setBtnSend(true), 1000);
  }
  return (
    <div>
      <Toplink />
      <Navbar />
      <div className="bg-[url('../public/title-bg.png')] bg-no-repeat bg-center bg-cover">
        <div className="container mx-auto">
          <h1 className="py-8 text-4xl font-bold">{t.zavbtn}</h1>
        </div>
      </div>
      <div className="container mx-auto mb-10">
        <p className="text-green-500 md:text-bold  mt-10 md:text-2xl text-xl md:w-[75%] w-full">
          {t.forasoc}
        </p>
        {isSend && (
          <div
            className="fixed flex p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg top-3 right-3 dark:bg-green-200 dark:text-green-800"
            role="alert"
          >
            <svg
              aria-hidden="true"
              className="flex-shrink-0 inline w-5 h-5 mr-3"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Info</span>
            <div>
              <span className="font-medium">Ваша заявка отправлена!</span>
            </div>
          </div>
        )}
        {isError && (
          <div
            className="fixed flex p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg top-3 right-3 dark:bg-red-200 dark:text-red-800"
            role="alert"
          >
            <svg
              aria-hidden="true"
              className="flex-shrink-0 inline w-5 h-5 mr-3"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Info</span>
            <div>
              <span className="font-medium">Ошабка!</span> Пожалуйста повторите
              попытку позже!
            </div>
          </div>
        )}

        <h1 className="text-3xl font-bold mt-7">{t.forasoc1}</h1>

        <form onSubmit={(e) => submit(e)}>
          <div className="grid grid-cols-2 gap-10">
            <div>
              <h1 className="my-5 text-2xl font-bold">{t.aboutasoc}</h1>
              <div className="">
                <label
                  htmlFor="ur_name"
                  className="p-2.5 md:mr-7 mr-0 rounded-lg md:text-md text-sm text-dark text-center text-bold w-[30%]"
                >
                  {t.asocinput1}
                </label>
                <input
                  required
                  onChange={(e) => handle(e)}
                  value={data.ur_name}
                  type="text"
                  id="ur_name"
                  name="ur_name"
                  className="border border-gray-300  text-dark text-bold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder={`${t.asocinput1}`}
                />
              </div>
              <div className="mt-8 ">
                <label
                  htmlFor="biin"
                  className="p-2.5 md:mr-7 mr-0 rounded-lg md:text-md text-sm text-dark text-center text-bold w-[30%]"
                >
                  {t.asocinput2}
                </label>
                <input
                  required
                  onChange={(e) => handle(e)}
                  value={data.biin}
                  type="text"
                  id="biin"
                  name="biin"
                  className="border border-gray-300  text-dark text-bold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder={`${t.asocinput2}`}
                />
              </div>
            </div>
            <div>
              <h1 className="my-5 font-bold">{t.forasoc2}</h1>
              <div className="mt-8 ">
                <label
                  htmlFor="fio"
                  className="p-2.5 md:mr-7 mr-0 rounded-lg md:text-md text-sm text-dark text-center text-bold w-[30%]"
                >
                  {t.asocinput3}
                </label>
                <input
                  required
                  onChange={(e) => handle(e)}
                  value={data.fio}
                  type="text"
                  id="fio"
                  name="fio"
                  className="border border-gray-300  text-dark text-bold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder={`${t.asocinput3}`}
                />
              </div>
              <div className="mt-8 ">
                <label
                  htmlFor="job_title"
                  className="p-2.5 md:mr-7 mr-0 rounded-lg md:text-md text-sm text-dark text-center text-bold w-[30%]"
                >
                  {t.asocinput4}
                </label>
                <input
                  required
                  onChange={(e) => handle(e)}
                  value={data.job_title}
                  type="text"
                  id="job_title"
                  name="job_title"
                  className="border border-gray-300  text-dark text-bold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder={`${t.asocinput4}`}
                />
              </div>
              <div className="mt-8 ">
                <label
                  htmlFor="email"
                  className="p-2.5 md:mr-7 mr-0 rounded-lg md:text-md text-sm text-dark text-center text-bold w-[30%]"
                >
                  {t.asocinput5}
                </label>
                <input
                  required
                  onChange={(e) => handle(e)}
                  value={data.email}
                  type="text"
                  id="email"
                  name="email"
                  className="border border-gray-300  text-dark text-bold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder={`${t.asocinput5}`}
                />
              </div>
              <div className="mt-8 ">
                <label
                  htmlFor="number"
                  className="p-2.5 md:mr-7 mr-0 rounded-lg md:text-md text-sm text-dark text-center text-bold w-[30%]"
                >
                  {t.asocinput6}
                </label>
                <input
                  required
                  onChange={(e) => handle(e)}
                  value={data.number}
                  type="tel"
                  id="number"
                  name="number"
                  className="border border-gray-300  text-dark text-bold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder={`${t.asocinput6}`}
                />
              </div>
              <div className="mt-8 ">
                <label
                  htmlFor="city_number"
                  className="p-2.5 md:mr-7 mr-0 rounded-lg md:text-md text-sm text-dark text-center text-bold w-[30%]"
                >
                  {t.asocinput7}
                </label>
                <input
                  required
                  onChange={(e) => handle(e)}
                  value={data.city_number}
                  type="text"
                  id="city_number"
                  name="city_number"
                  className="border border-gray-300  text-dark text-bold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder={`${t.asocinput7}`}
                />
              </div>
              <div className="mt-8 ">
                <label
                  htmlFor="ur_adress"
                  className="p-2.5 md:mr-7 mr-0 rounded-lg md:text-md text-sm text-dark text-center text-bold w-[30%]"
                >
                  {t.asocinput8}
                </label>
                <input
                  required
                  onChange={(e) => handle(e)}
                  value={data.ur_adres}
                  type="text"
                  id="ur_adres"
                  name="ur_adress"
                  className="border border-gray-300  text-dark text-bold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder={`${t.asocinput8}`}
                />
              </div>
              <div className="mt-8 ">
                <label
                  htmlFor="post_adress"
                  className="p-2.5 md:mr-7 mr-0 rounded-lg md:text-md text-sm text-dark text-center text-bold w-[30%]"
                >
                  {t.asocinput9}
                </label>
                <input
                  required
                  onChange={(e) => handle(e)}
                  value={data.post_adres}
                  type="text"
                  id="post_adres"
                  name="post_adress"
                  className="border border-gray-300  text-dark text-bold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder={`${t.asocinput9}`}
                />
              </div>
              <div className="mt-8 ">
                <label
                  htmlFor="post_index"
                  className="p-2.5 md:mr-7 mr-0 rounded-lg md:text-md text-sm text-dark text-center text-bold w-[30%]"
                >
                  {t.asocinput10}
                </label>
                <input
                  required
                  onChange={(e) => handle(e)}
                  value={data.post_index}
                  type="text"
                  id="post_index"
                  name="post_index"
                  className="border border-gray-300  text-dark text-bold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder={`${t.asocinput10}`}
                />
              </div>
            </div>
          </div>

          <button
            className={
              btnSend
                ? "bg-green-500 px-11 py-3 mt-10 rounded-3xl text-white font-bold hover:bg-black duration-300 w-[250px]"
                : "bg-green-900 px-11 py-3 mt-10 rounded-3xl text-white font-bold hover:bg-black duration-300 w-[250px]"
            }
            onClick={sendBtn}
          >
            {btnSend ? <p>{t.sendbtn1}</p> : <p>{t.sendbtn2}</p>}
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Demand;
