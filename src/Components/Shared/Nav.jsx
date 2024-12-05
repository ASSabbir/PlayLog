import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/MainContext";
import { Tooltip } from 'react-tooltip'
import Swal from "sweetalert2";

const Nav = () => {
    const { user,logout } = useContext(AuthContext)
    console.log(user)
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    });
    const handelLogOut=()=>{
        logout()
        .then(() => {
            Toast.fire({
                icon: "success",
                title: `Bye See You Again`
            });
        })
        .catch(error => {
            console.log(error)
        })
    }

    const navlink = <>
        <li className="pr-2">Home</li>
        <li className="pr-2">Home</li>
        <li className="pr-2">Home</li>
        <li className="pr-2">Home</li>
    </>
    return (
        <div className="navbar px-[10vw] font-title">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navlink}
                    </ul>
                </div>
                <a className=" text-xl font-title">Play Log</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 ">
                    {navlink}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <div className="flex items-center gap-2">
                            <div className="avatar tooltip tooltip-left" data-tip={user.email}>
                                <div className="w-12 rounded-full">
                                    <img src={user.photoURL} />
                                </div>
                            </div>
                            <button onClick={handelLogOut} className="text-primary underline underline-offset-4 cursor-pointer">Log Out</button>
                        </div>

                        :
                        <Link to={'/login'}><h1 className="text-primary underline underline-offset-4 cursor-pointer">Login</h1></Link>
                }
            </div>
        </div>
    );
};

export default Nav;