import RightCard from "./RightCard"

function RightContent(props) {
    return (
        <div id="right" className="h-full flex flex-nowrap overflow-x-auto gap-10 p-3 w-2/3">
            {props.users.map(function(elem, idx){
                return <RightCard key={idx} id={idx} img={elem.img} intro={elem.intro} tag={elem.tag} />
            })}
        </div>
    )
}

export default RightContent