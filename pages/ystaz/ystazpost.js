import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Toplink from "../components/Toplink";
import axios from "axios";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import ru from "../../locales/ru";
import kz from "../../locales/kz";
import en from "../../locales/en";

const Ystazpost = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "ru" ? ru : locale === "kz" ? kz : locale === "en" ? en : null;
  const url = "https://arioapi.pythonanywhere.com/apir/ustaz-request/";
  const [isSend, setIsSend] = useState(false);
  const [isError, setIsError] = useState(false);
  const [btnSend, setBtnSend] = useState(true);
  const [selectedFileDocument, setSelectedFileDocument] = useState(null);
  const [data, setData] = useState({
    job_location: "",
    job_title: "",
    surname: "",
    name: "",
    father_name: "",
    number: "",
    email: "",
    adres: "",
    lgota: "",
    comment: "",
  });
  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
  }
  function submit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("dokument", selectedFileDocument);
    formData.append("job_location", data.job_location);
    formData.append("job_title", data.job_title);
    formData.append("surname", data.surname);
    formData.append("name", data.name);
    formData.append("father_name", data.father_name);
    formData.append("number", data.number);
    formData.append("email", data.email);
    formData.append("adres", data.adres);
    formData.append("lgota", data.lgota);
    formData.append("comment", data.comment);

    axios
      .post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res.data);
        setIsSend(true);
        setTimeout(() => setIsSend(false), 2000);

        setData({
          job_location: "",
          job_title: "",
          surname: "",
          name: "",
          father_name: "",
          number: "",
          email: "",
          adres: "",
          lgota: "",
          comment: "",
        });
      })
      .catch((err) => {
        console.log(err);
        setIsError(true);
        setTimeout(() => setIsError(false), 2000);
      });
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
          <h1 className="text-4xl font-bold py-8">Подать заявку</h1>
        </div>
      </div>
      <div className="container mx-auto mb-10">
        <form onSubmit={(e) => submit(e)}>
          <div className="grid grid-cols-2 gap-10">
            <div className="first">
              <h1 className="font-bold text-2xl my-5">{t.jobwork}</h1>
              <div className="py-3">
                <label
                  htmlFor="job_location"
                  className="mr-7 rounded-lg text-dark text-center text-bold w-[30%]"
                >
                  {t.qjoblocation}
                </label>
                <input
                  required
                  value={data.job_location}
                  onChange={(e) => handle(e)}
                  type="text"
                  id="job_location"
                  name="job_location"
                  className="border border-gray-300  text-dark text-bold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder={`${t.ejoblocation}`}
                />
              </div>
              <div className="py-3">
                <label
                  htmlFor="job_title"
                  className="mr-7 rounded-lg text-dark text-center text-bold w-[30%]"
                >
                  {t.qdoljnost}
                </label>
                <input
                  required
                  value={data.job_title}
                  onChange={(e) => handle(e)}
                  type="text"
                  id="job_title"
                  name="job_title"
                  className="border border-gray-300  text-dark text-bold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder={`${t.edoljnost}`}
                />
              </div>
              <h1 className="font-bold text-2xl my-5">{t.treb}</h1>
              <div className="py-3">
                <label
                  htmlFor="lgota"
                  className="mr-7 rounded-lg text-dark text-center text-bold w-[30%]"
                >
                  {t.catlgot}
                </label>
                <input
                  required
                  value={data.lgota}
                  onChange={(e) => handle(e)}
                  type="text"
                  id="lgota"
                  name="lgota"
                  className="border border-gray-300  text-dark text-bold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder={`${t.ecatlgot}`}
                />
              </div>
              <div className="py-3">
                <label
                  htmlFor="dokument"
                  className="mr-7 rounded-lg text-dark text-center text-bold w-[30%]"
                >
                  {t.podr}
                </label>
                <input
                  required
                  value={data.dokument}
                  onChange={(e) => setSelectedFileDocument(e.target.files[0])}
                  type="file"
                  id="dokument"
                  name="dokument"
                  className="border border-gray-300  text-dark text-bold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                />
              </div>
              <h1 className="font-bold text-2xl my-5">{t.moreinf}</h1>
              <div className="py-3">
                <label
                  htmlFor="comment"
                  className="mr-7 rounded-lg text-dark text-center text-bold w-[30%]"
                >
                  {t.qcomment}
                </label>
                <input
                  required
                  value={data.comment}
                  onChange={(e) => handle(e)}
                  type="text"
                  id="comment"
                  name="comment"
                  className="border border-gray-300  text-dark text-bold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder={`${t.ecomment}`}
                />
              </div>
            </div>
            <div className="second">
              <h1 className="font-bold text-2xl my-5">{t.dann}</h1>
              <div className="py-3">
                <label
                  htmlFor="surname"
                  className="mr-7 rounded-lg text-dark text-center text-bold w-[30%]"
                >
                  {t.qsecondname}
                </label>
                <input
                  required
                  value={data.surname}
                  onChange={(e) => handle(e)}
                  type="text"
                  id="surname"
                  name="surname"
                  className="border border-gray-300  text-dark text-bold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder={`${t.esecondname}`}
                />
              </div>
              <div className="py-3">
                <label
                  htmlFor="name"
                  className="mr-7 rounded-lg text-dark text-center text-bold w-[30%]"
                >
                  {t.qname}
                </label>
                <input
                  required
                  value={data.name}
                  onChange={(e) => handle(e)}
                  type="text"
                  id="name"
                  name="name"
                  className="border border-gray-300  text-dark text-bold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder={`${t.ename}`}
                />
              </div>
              <div className="py-3">
                <label
                  htmlFor="father_name"
                  className="mr-7 rounded-lg text-dark text-center text-bold w-[30%]"
                >
                  {t.qfathername}
                </label>
                <input
                  required
                  value={data.father_name}
                  onChange={(e) => handle(e)}
                  type="text"
                  id="father_name"
                  name="father_name"
                  className="border border-gray-300  text-dark text-bold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder={`${t.efathername}`}
                />
              </div>
              <div className="py-3">
                <label
                  htmlFor="number"
                  className="mr-7 rounded-lg text-dark text-center text-bold w-[30%]"
                >
                  {t.qnumber}
                </label>
                <input
                  required
                  value={data.number}
                  onChange={(e) => handle(e)}
                  type="text"
                  id="number"
                  name="number"
                  className="border border-gray-300  text-dark text-bold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder={`${t.enumber}`}
                />
              </div>
              <div className="py-3">
                <label
                  htmlFor="email"
                  className="mr-7 rounded-lg text-dark text-center text-bold w-[30%]"
                >
                  {t.qmail}
                </label>
                <input
                  required
                  value={data.email}
                  onChange={(e) => handle(e)}
                  type="text"
                  id="email"
                  name="email"
                  className="border border-gray-300  text-dark text-bold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder={`${t.email}`}
                />
              </div>
              <div className="py-3">
                <label
                  htmlFor="adres"
                  className="mr-7 rounded-lg text-dark text-center text-bold w-[30%]"
                >
                  {t.qfactadress}
                </label>
                <input
                  required
                  value={data.adres}
                  onChange={(e) => handle(e)}
                  type="text"
                  id="adres"
                  name="adres"
                  className="border border-gray-300  text-dark text-bold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder={`${t.efactadress}`}
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
      {isSend && (
        <div
          className="top-3 right-3 fixed flex p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
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
          className="top-3 right-3 fixed flex p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
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
      <Footer />
    </div>
  );
};

export default Ystazpost;
