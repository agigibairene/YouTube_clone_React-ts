import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../reduxStore/store";
import logo from "../assets/logo.png";
import { IoMdMenu } from "react-icons/io";
import { handleToogleSideBar } from "../reduxStore/sidebarSlice";

interface sideBarInterface{
    icon: String,
    title: String
}


export default function SideBar(){

    const toggleSideBar = useSelector((state: RootState) => state.sideBarSliceReducer.toggleSideBar);
    const dispatch = useDispatch<AppDispatch>()

    const home : sideBarInterface[]= [
        {icon: 'bi bi-house-door', title: "Home"},
        {icon: "", title: "Shorts"},
        {icon: "", title: "Videos"},
        {icon: "", title: "Live"}
    ]

    const subscriptions: sideBarInterface[] =[
        {icon: "", title: "Music"},
        {icon: "", title: "Sports"},
        {icon: "", title: "Gaming"},
        {icon: "", title: "Movies"}
    ]

    const watchLater: sideBarInterface[] =[
        {icon: "", title: ""}
    ]

    return(
        <aside className={`fixed top-0 left-0 w-60 h-full pl-4 bg-white z-50 shadow transform transition-transform duration-300 overflow-y-auto ${toggleSideBar ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className="flex items-center gap-6">
                <IoMdMenu className="ml-4 cursor-pointer" size={30} onClick={()=>dispatch(handleToogleSideBar())}/>
                <img src={logo} className="w-[7rem] cursor-pointer" alt="" />
            </div>
            <ul>
                {
                    home.map((item, index)=>{
                        const {icon, title} = item;
                        return <li key={index}>
                            <SideBarList  icon={icon} title={title}/>
                        </li>
                    })
                }
            </ul>
            <h1 className="font-bold pt-5">Subscription</h1>
            <ul>
                {
                    subscriptions.map((item, index)=>{
                        const {icon, title} = item;
                        return <li key={index}>
                            <SideBarList  icon={icon} title={title}/>
                        </li>
                    })
                }
            </ul>

            <h1 className="font-bold pt-5">Watch Later</h1>
            <ul>
                {
                    watchLater.map((item, index)=>{
                        const {icon, title} = item;
                        return <li key={index}>
                            <SideBarList  icon={icon} title={title}/>
                        </li>
                    })
                }
            </ul>
        </aside>
    )
}

export function SideBarList({icon, title} : sideBarInterface){
    return(
        <button>
            <i className={`${icon} text-xl`}></i>
            <span>{title}</span>
        </button>
    )
}

