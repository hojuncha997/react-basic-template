import { NAV } from "../../../config-global";

const Header  = () => {
    return (
        <div>
            <h1 style={{border:"1px solid black" , width:`calc(100vw - ${NAV.W_DASHBOARD + 1}px)`, zIndex:"1000"}}>Header</h1>
        </div>
    )
}
export default Header;