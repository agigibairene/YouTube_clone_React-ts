import logo from "../assets/logo.png";

export default function Header(){
    return(
        <header className="w-full h-20 sticky top-0 z-100">
            <nav className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                    <i className="bi bi-list ml-4"></i>
                    <img src={logo} className="w-[7rem]" alt="" />
                </div>

                <div className="flex items-center">
                    <div className="flex items-center justify-between border border-gray-300 w-[400px] pl-4 rounded-3xl mr-4">
                        <input 
                            type="text"  
                            name="" id="" 
                            placeholder="Search"
                            className="border-0 outline-0 flex-1 bg-transparent"
                        />
                       <button className="border-l border-gray-300 px-4 rounded-r-3xl bg-gray-100">
                         <i className="bi bi-search"></i>
                       </button>
                    </div>
                    <button className="w-10 rounded-full cursor-pointer bg-gray-100">
                      <i className="bi bi-mic"></i>                   
                    </button>
                </div>

                <div className="flex">
                    <button className="flex items-center rounded-2xl cursor-pointer bg-gray-100 px-2 mr-6">
                        <i className="bi bi-plus"></i>
                        <p>Create</p>
                    </button>
                    <i className="bi bi-bell mr-6"></i>
                    <i className="bi bi-person mr-6"></i>
                </div>
            </nav>
        </header>
    )
}