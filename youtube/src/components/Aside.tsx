
interface sideBarInterface{
    icon: String,
    title: String
}


export default function AsideBar(){

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
        <aside className={`left-0 w-40 h-full pl-4 bg-white overflow-y-auto`}>
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
            <span className="ml-4">{title}</span>
        </button>
    )
}

