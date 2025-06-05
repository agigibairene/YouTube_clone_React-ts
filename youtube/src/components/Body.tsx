import AsideBar from "./Aside"

export default function Body(){
    return(
        <section className="flex gap-4">
            <AsideBar/>
            <div>
                 <h1>HEY, I'M THE BODY</h1>
            </div>
        </section>
    )
}