import logo from "../assets/logo.png";

export default function Header(){
    return(
        <header className="w-full h-20">
            <nav className="flex items-center justify-between">
                <div className="flex items-center">
                    <i className="bi bi-list"></i>
                    <img src={logo} className="w-[10rem]" alt="" />
                </div>

                <div className="flex items-center">
                    <div className="flex items-center border-1 px-4 rounded-3xl mr-4">
                        <input 
                            type="text"  
                            name="" id="" 
                            placeholder="Search"
                            className="border-0 outline-0 flex-1"
                        />
                        <i className="bi bi-search"></i>
                    </div>
                    <button>
                    <i className="bi bi-mic"></i>                    </button>
                </div>

                <div className="flex">
                    <button className="flex items-center">
                        <i className="bi bi-plus"></i>
                        <p>Create</p>
                    </button>
                    <i className="bi bi-bell"></i>
                    <i className="bi bi-person"></i>
                </div>
            </nav>
        </header>
    )
}