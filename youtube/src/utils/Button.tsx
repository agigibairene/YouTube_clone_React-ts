
type Props = {
    name : string
}

export default function Button({name}: Props){
    return(
        <button className="px-5 py-2 m-3 bg-gray-200 rounded-lg">
            {name}
        </button>
    )
}