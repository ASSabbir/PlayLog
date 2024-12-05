import { Outlet } from "react-router-dom";
import Nav from "./Nav";


const Root = () => {
    return (
        <div className="font-description bg-zinc-900 text-white">
            <Nav></Nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;