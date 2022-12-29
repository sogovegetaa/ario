import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Toplink from "../components/Toplink";
import axios from "axios";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import ru from "../../locales/ru";
import kz from "../../locales/kz";
import en from "../../locales/en";

const Talimpost = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "ru" ? ru : locale === "kz" ? kz : locale === "en" ? en : null;
  const [isSend, setIsSend] = useState(false);
  const [isError, setIsError] = useState(false);
  const [btnSend, setBtnSend] = useState(true);
  const [selectedFileUdostoverenie, setSelectedFileUdostoverenie] =
    React.useState(null);
  const [selectedFileDiplom, setSelectedFileDiplom] = React.useState(null);
  const [selectedFileUdCategory, setSelectedFileUdCategory] =
    React.useState(null);
  const [selectedFileDokStaj, setSelectedFileDokStaj] = React.useState(null);
  const [selectedFileProlojenie, setSelectedFileProlojenie] =
    React.useState(null);
  const url = "https://arioapi.pythonanywhere.com/apir/talimger-request/";

  const [data, setData] = useState({
    job_location: "",
    job_title: "",
    surname: "",
    name: "",
    father_name: "",
    number: "",
    email: "",
    adres: "",
    cvalification: "",
    comment: "",
  });
  function submit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("udostoverenie", selectedFileUdostoverenie);
    formData.append("diplom", selectedFileDiplom);
    formData.append("dok_staj", selectedFileDokStaj);
    formData.append("udostoverenie_category", selectedFileUdCategory);
    formData.append("prolojenie", selectedFileProlojenie);
    formData.append("job_location", data.job_location);
    formData.append("job_title", data.job_title);
    formData.append("surname", data.surname);
    formData.append("name", data.name);
    formData.append("father_name", data.father_name);
    formData.append("number", data.number);
    formData.append("email", data.email);
    formData.append("adres", data.adres);
    formData.append("cvalification", data.cvalification);
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
          cvalification: "",
          comment: "",
        });
      })
      .catch((err) => {
        console.log(err);
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
          <h1 className="text-4xl font-bold py-8">{t.podz}</h1>
        </div>
      </div>
      <div className="container mx-auto mb-10">
        <form onSubmit={(e) => submit(e)}>
          <div className="grid grid-cols-2 gap-10">
            <div>
              <h1 className="font-bold text-2xl my-5">{t.jobwork}</h1>
              <div className="py-3">
                <label
                  htmlFor="job_location "
                  className="mr-7 rounded-lg text-xl text-dark text-center text-bold w-[30%]"
                >
                  {t.qjoblocation}
                </label>
                <input
                  required
                  onChange={(e) => handle(e)}
                  type="text"
                  id="job_location"
                  name="job_location"
                  className=" border border-gray-300  text-dark text-bold  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder={`${t.ejoblocation}`}
                />
              </div>
              {/* ================= */}
              <div className="py-3">
                <label
                  htmlFor="job_title"
                  className="mr-7 rounded-lg text-xl text-dark text-center text-bold w-[30%]"
                >
                  {t.qdoljnost}
                </label>
                <input
                  required
                  onChange={(e) => handle(e)}
                  type="text"
                  id="job_title"
                  name="job_title"
                  className=" border border-gray-300  text-dark text-bold  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder={`${t.edoljnost}`}
                />
              </div>
              <h1 className="font-bold text-2xl my-5">{t.treb}</h1>
              {/* ================= */}
              <div className="py-3">
                <label
                  htmlFor="cvalification"
                  className="mr-7 rounded-lg text-xl text-dark text-center text-bold w-[30%]"
                >
                  {t.qcval}
                </label>
                <input
                  required
                  onChange={(e) => handle(e)}
                  type="text"
                  id="cvalification"
                  name="cvalification"
                  className=" border border-gray-300  text-dark text-bold  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder={`${t.ecval}`}
                />
              </div>
              {/* ================= */}
              <div className="py-3">
                <label
                  htmlFor="udostoverenie"
                  className="mr-7 rounded-lg text-xl text-dark text-center text-bold w-[30%]"
                >
                  {t.qpasport}
                </label>
                <input
                  required
                  onChange={(e) =>
                    setSelectedFileUdostoverenie(e.target.files[0])
                  }
                  type="file"
                  id="udostoverenie"
                  name="udostoverenie"
                  className=" border border-gray-300  text-[#9C9DA9] text-bold  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                />
              </div>
              {/* ================= */}
              <div className="py-3">
                <label
                  htmlFor="diplom"
                  className="mr-7 rounded-lg text-dark text-center text-bold w-[30%]"
                >
                  {t.qdiplom}
                </label>
                <input
                  required
                  onChange={(e) => setSelectedFileDiplom(e.target.files[0])}
                  type="file"
                  id="diplom"
                  name="diplom"
                  className=" border border-gray-300  text-[#9C9DA9] text-bold  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                />
              </div>
              {/* ================= */}
              <div className="py-3">
                <label
                  htmlFor="udostoverenie_category"
                  className="mr-7 rounded-lg  text-dark text-center text-bold w-[30%]"
                >
                  {t.qudastak}
                </label>
                <input
                  required
                  onChange={(e) => setSelectedFileUdCategory(e.target.files[0])}
                  type="file"
                  id="udostoverenie_category"
                  name="udostoverenie_category"
                  className=" border border-gray-300  text-[#9C9DA9] text-bold  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                />
              </div>
              {/* ================= */}
              <div className="py-3">
                <label
                  htmlFor="dok_staj"
                  className="mr-7 rounded-lg  text-dark text-center text-bold w-[30%]"
                >
                  {t.qknijka}
                </label>
                <input
                  required
                  onChange={(e) => setSelectedFileDokStaj(e.target.files[0])}
                  type="file"
                  id="dok_staj"
                  name="dok_staj"
                  className=" border border-gray-300  text-[#9C9DA9] text-bold  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                />
              </div>
            </div>
            <div>
              <h1 className="font-bold text-2xl my-5">{t.dann}</h1>
              {/* ================= */}
              <div className="py-3">
                <label
                  htmlFor="surname"
                  className="mr-7 rounded-lg text-xl text-dark text-center text-bold w-[30%]"
                >
                  {t.qsecondname}
                </label>
                <input
                  required
                  onChange={(e) => handle(e)}
                  type="text"
                  id="surname"
                  name="surname"
                  className=" border border-gray-300  text-dark text-bold  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder={`${t.esecondname}`}
                />
              </div>
              {/* ================= */}
              <div className="py-3">
                <label
                  htmlFor="name"
                  className="mr-7 rounded-lg text-xl text-dark text-center text-bold w-[30%]"
                >
                  {t.qname}
                </label>
                <input
                  required
                  onChange={(e) => handle(e)}
                  type="text"
                  id="name"
                  name="name"
                  className=" border border-gray-300  text-dark text-bold  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder={`${t.ename}`}
                />
              </div>
              {/* ================= */}
              <div className="py-3">
                <label
                  htmlFor="father_name"
                  className="mr-7 rounded-lg text-xl text-dark text-center text-bold w-[30%]"
                >
                  {t.qfathername}
                </label>
                <input
                  required
                  onChange={(e) => handle(e)}
                  type="text"
                  id="father_name"
                  name="father_name"
                  className=" border border-gray-300  text-dark text-bold  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder={`${t.efathername}`}
                />
              </div>
              {/* ================= */}
              <div className="py-3">
                <label
                  htmlFor="number"
                  className="mr-7 rounded-lg text-xl text-dark text-center text-bold w-[30%]"
                >
                  {t.qnumber}
                </label>
                <input
                  required
                  onChange={(e) => handle(e)}
                  type="text"
                  id="number"
                  name="number"
                  className=" border border-gray-300  text-dark text-bold  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder={`${t.enumber}`}
                />
              </div>
              {/* ================= */}
              <div className="py-3">
                <label
                  htmlFor="email"
                  className="mr-7 rounded-lg text-xl text-dark text-center text-bold w-[30%]"
                >
                  {t.qmail}
                </label>
                <input
                  required
                  onChange={(e) => handle(e)}
                  type="text"
                  id="email"
                  name="email"
                  className=" border border-gray-300  text-dark text-bold  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder={`${t.email}`}
                />
              </div>
              {/* ================= */}
              <div className="py-3">
                <label
                  htmlFor="adres"
                  className="mr-7 rounded-lg text-xl text-dark text-center text-bold w-[30%]"
                >
                  {t.qfactadress}
                </label>
                <input
                  required
                  onChange={(e) => handle(e)}
                  type="text"
                  id="adres"
                  name="adres"
                  className=" border border-gray-300  text-dark text-bold  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder={`${t.efactadress}`}
                />
              </div>
              <h1 className="font-bold text-2xl my-5">{t.moreinf}</h1>
              {/* ================= */}
              <div className="py-3">
                <label
                  htmlFor="comment"
                  className="mr-7 rounded-lg  text-dark text-center text-bold w-[30%]"
                >
                  {t.qcomment}
                </label>
                <input
                  required
                  onChange={(e) => handle(e)}
                  type="text"
                  id="comment"
                  name="comment"
                  className=" border border-gray-300  text-dark text-bold text-2xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder={`${t.ecomment}`}
                />
              </div>
              {/* ================= */}
              <div className="py-3">
                <label
                  htmlFor="prolojenie"
                  className=" mr-7 rounded-lg  text-dark text-center text-bold w-[30%]"
                >
                  {t.qprilojenie}
                </label>
                <input
                  required
                  onChange={(e) => setSelectedFileProlojenie(e.target.files[0])}
                  type="file"
                  id="prolojenie"
                  name="prolojenie"
                  className=" border border-gray-300  text-[#9C9DA9] text-bold  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
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

export default Talimpost;
