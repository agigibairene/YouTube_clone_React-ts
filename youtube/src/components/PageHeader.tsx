import logo from "../assets/logo.png";
import { IoMdMenu } from "react-icons/io";
import SideBar from "./SideBar";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from '../reduxStore/store';
import { handleToogleSideBar } from "../reduxStore/sidebarSlice";


export default function Header(){
    const toggleSidebar = useSelector((state : RootState)=>state.sideBarSliceReducer.toggleSideBar);
    const dispatch = useDispatch<AppDispatch>();


    return(
        <header className="flex gap-10 lg:gap-20 justify-between items-center pt-4">
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

                <div className="flex items-center">
                    <div className="flex items-center justify-between border border-gray-300 w-[400px] pl-4 rounded-3xl mr-4">
                        <input 
                            type="text"  
                            name="" id="" 
                            placeholder="Search"
                            className="border-0 outline-0 flex-1 bg-transparent"
                        />
                       <button className="border-l border-gray-300 px-4 rounded-r-3xl bg-gray-100 cursor-pointer">
                         <i className="bi bi-search"></i>
                       </button>
                    </div>
                    <button className="w-10 rounded-full cursor-pointer bg-gray-100 hover:bg-gray-300">
                      <i className="bi bi-mic"></i>                   
                    </button> 
                </div>

                <div className="flex">
                    <button className="flex items-center rounded-3xl cursor-pointer py-0 bg-gray-100 hover:bg-gray-300 px-4 mr-6">
                        <i className="bi bi-plus"></i>
                        <p>Create</p>
                    </button>
                    <i className="bi bi-bell mr-6 flex cursor-pointer h-10 w-10 items-center justify-center rounded-full p-2 hover:bg-gray-300 transition duration-200"></i>
                    <i className="bi bi-person mr-6 cursor-pointer"></i>
                </div>
            {/* </nav> */}

        </header>
    )
}