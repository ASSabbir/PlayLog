import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";


const Root = () => {
    return (
        <div className="font-description bg-zinc-900 text-white">
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;