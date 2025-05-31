import { useSelector } from "react-redux"
import type { RootState } from "../reduxStore/store"


export default function SideBar(){
    const toggleSideBar = useSelector((state: RootState) => state.sideBarSliceReducer.toggleSideBar);


    return(
        <aside className={`fixed top-0 left-0 w-60 h-full bg-white z-50 shadow transform transition-transform duration-300 ${toggleSideBar ? 'translate-x-0' : '-translate-x-full'}`}>
            <SideBarList icon='bi bi-house-door' title='Home'/>
            <SideBarList icon='bi bi-house-door' title='Home'/>

        </aside>
    )
}

interface sideBarInterface{
    icon: String,
    title: String
}


export function SideBarList({icon, title} : sideBarInterface){
    return(
        <button>
            <i className={`${icon} text-xl`}></i>
            <span>{title}</span>
        </button>
    )
}

