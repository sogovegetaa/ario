import Link from "next/link";
import React from "react";

const Pagination = ({ i, item, pag, params }) => {

  return (
    <>
      <li
        key={i}
        
        className="border border-[#172F42] rounded-full w-[45px] h-[45px] text-center leading-10 cursor-pointer hover:bg-[#172F42] hover:text-white duration-200"
      >
        <Link href={`${pag}`}>{i + 1}</Link>
      </li>
    </>
  );
};
export async function getServerSideProps({params}) {
  const res = await fetch(`${params.next}`)
  const pag = await res.json()
  return {
    props: {pag},
  };
}
export default Pagination;
