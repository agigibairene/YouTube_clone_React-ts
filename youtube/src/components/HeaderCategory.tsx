import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";


interface Categories{
    categories: string[],
    onSelect: (category:string)=>void,
    selectedCategory: string
}

export default function HeaderCategory({categories, onSelect, selectedCategory} : Categories){

    return(
        <div className="overflow-x-hidden relative">
            <div className="flex whitespace-nowrap gap-3 transition-transform w-[max-content]">
                {
                    categories.map((btn)=>
                    <button onClick={()=>onSelect(btn)} key={btn} 
className={`py-1 cursor-pointer px-3 rounded-lg whitespace-nowrap font-semibold items-center ${
  btn === selectedCategory ? 'bg-gray-800 text-white' : 'bg-gray-300'
}`}                    >
                        {btn}
                    </button>
                    )
                }
            </div>
            <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-white from-50% to-transparent"> 
                <FaAngleLeft className="cursor-pointer"/>
            </div>
        </div>
    )
}