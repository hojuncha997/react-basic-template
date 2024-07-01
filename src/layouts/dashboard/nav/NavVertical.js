import navConfig from "./nav-config";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NAV } from "../../../config-global";


export function NavVertical() {
    const [refresh, setRefresh] = useState(false);
    const navigate = useNavigate();

    const handleNavigate  = (path) => {
        setRefresh(!refresh);
        navigate(path);
    }



    return (
        <div style={{ border:"1px solid black" , width: `${NAV.W_DASHBOARD}px` , height:"100vh"}}>
            {/* <h1>NavVertical</h1> */}
            <ul style={{listStyleType:'none'}}>
                {navConfig.map((item, index) => (
                    <li key={index}>
                        <h3>{item.subheader}</h3>
                        <ul>
                            {item.items.map((navItem, index) => (
                                <li key={index} style={{
                                    listStyleType: "none",
                                }}>
                                    {/* <a href={navItem.path}>{navItem.title}</a> */}
                                    <span onClick={() => handleNavigate(navItem.path)} style={{cursor:"pointer" , fontSize:"0.8em"}}>{navItem.title}</span>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
}