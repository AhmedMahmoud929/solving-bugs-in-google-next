"use client";
import {RxCross2} from "react-icons/rx";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
import { useState } from "react";
import { useSearchParams,useRouter } from "next/navigation";
export default function SearchBox() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const searchTerm = searchParams.get('searchTerm');
    const [term,setTerm]=useState(searchTerm || '');
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!term.trim()) return;
        router.push(`/search/web?searchTerm=${term}`);
    };
  return (
    <form onSubmit={handleSubmit} className="flex flex-grow  max-w-3xl items-center rounded-full border
    border-gray-200 px-6 py-3 ml-10 mr-5  shadow-lg hover:shadow-xl focus-within:shadow-xl transition-shadow">

    <input type="text" className="w-full focus:outline-none" value={term} onChange={(e)=>setTerm(e.target.value)} />
    <RxCross2 className="text-2xl text-gray-500 sm:mr-3 cursor-pointer" onClick={()=> setTerm('')}/>
    <BsFillMicFill className="hidden sm:inline-flex text-4xl text-blue-500 border-l-2 border-gray-300 mr-3 pl-4"/>
    <AiOutlineSearch onClick={handleSubmit} className="hidden sm:inline-flex text-2xl text-blue-500  "/>
    
    </form>
  )
}
