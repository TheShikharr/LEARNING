import LeftContent from "./LeftContent"
import RightContent from "./RightContent"

function Page1Content(props) {
    return (
        <div className="pb-20 px-13 h-[85vh] flex items-center gap-10">
            <LeftContent />
            <RightContent users={props.users} />
        </div>
    )
}

export default Page1Content
