import React, { useState, useEffect } from "react";

const Comments = ({dataid}) => {
  const [comment, setComment] = useState([]);

  useEffect(() => {
    fetch(`https://arioapi.pythonanywhere.com/api/comment/?artticle=${dataid}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setComment(data);
        console.log(data);
      });
  }, []);
  
  
  return (
    <>
  {comment.map((item) => (
        <div key={item.id} className="drop-shadow-xl mt-8">
          <div className="bg-[#30619480] bg-opacity-50 flex justify-between border-b-[1px] border-black" id="comme">
            <p className="text-dark font-bold text-xl px-11 py-5">
              {item.name}
            </p>
            <p className="text-dark font-bold text-xl md:px-11 px-0 py-5">
              {item.date}
            </p>
          </div>
          <div className="bg-[#30619480] bg-opacity-50 flex justify-between drop-shadow-xl">
            <p className="text-dark text-xl px-11 py-5">{item.comment}</p>
          </div>
        </div>
      ))} 
    </>
  );
};

export default Comments;
// export async function getServerSideProps(){
//   const res = await fetch('https://arioapi.pythonanywhere.com/api/comment/')
//   const com = await res.json()

//   return {
//     props: {com}
//   }
// }
