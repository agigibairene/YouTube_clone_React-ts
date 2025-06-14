import logo from "../assets/logo.png";
import { IoMdMenu } from "react-icons/io";
import SideBar from "./SideBar";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from '../reduxStore/store';
import { handleToogleSideBar } from "../reduxStore/sidebarSlice";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";



export default function Header(){
    const toggleSidebar = useSelector((state : RootState)=>state.sideBarSliceReducer.toggleSideBar);
    const dispatch = useDispatch<AppDispatch>();
    const [showFullWidthOfSearchBar, setShowFullWidthOfSearchBar] = useState<boolean>(false);


    return(
        <header className="flex gap-10 lg:gap-20 justify-between items-center pt-4 mb-6">
            {/* <nav className="flex items-center justify-between"> */}
                <div className="flex items-center gap-6 flex-shrink-0">
                    <IoMdMenu   className="ml-4 p-2 cursor-pointer rounded-full hover:bg-gray-200 transition duration-200"
                        size={50} onClick={()=>dispatch(handleToogleSideBar())}/>
                    <img src={logo} className="w-[7rem] cursor-pointer" alt="" />
                </div>
                {
                    toggleSidebar && (
                        <div className="fixed inset-0 bg-black bg-opacity-90 z-40">
                            <SideBar/> 
                        </div>
                    )
                }
                <form className={`hidden gap-4 justify-center items-center ${showFullWidthOfSearchBar ? 'flex' : 'hidden md:flex'}`}>
                   {
                    showFullWidthOfSearchBar &&
                        <FaArrowLeft 
                            className="w-12 h-12 p-3 cursor-pointer flex items-center rounded-full hover:bg-gray-300" 
                            onClick={()=>setShowFullWidthOfSearchBar(false)}
                        />
                    }
                    <div className="flex items-center flex-grow justify-between border border-gray-300 max-w-[600px] pl-4 rounded-3xl mr-4">
                        <input 
                            type="text"  
                            placeholder="Search"
                            className="border-0 outline-none flex-1 bg-transparent"
                        />
                       <button className="border-l border-gray-300 px-4 rounded-r-3xl bg-gray-100 cursor-pointer">
                         <i className="bi bi-search"></i>
                       </button>
                    </div>
                    <button className="w-10 flex-shrink-0 rounded-full cursor-pointer bg-gray-100 hover:bg-gray-300">
                      <i className="bi bi-mic"></i>                   
                    </button> 
                </form>     

                <div className={`flex-shrink-0 md:gap-2 ${showFullWidthOfSearchBar ? 'hidden' : 'flex'}`}>
                    <button 
                        onClick={()=>setShowFullWidthOfSearchBar(true)} 
                        className="md:hidden flex w-12 h-12 items-center justify-center p-4 rounded-full hover:bg-gray-300 cursor-pointer"
                    >
                    <i className="bi bia-search"></i>
                    </button>
                    <button className="flex items-center rounded-3xl cursor-pointer py-0 bg-gray-100 hover:bg-gray-300 px-4 ">
                        <i className="bi bi-plus"></i>
                        <p>Create</p>
                    </button>
                    <i className="bi bi-bell flex cursor-pointer h-10 w-10 items-center justify-center rounded-full p-2 hover:bg-gray-300 transition duration-200"></i>
                    <i className="bi bi-person cursor-pointer"></i>
                </div>
        </header>
    )
}