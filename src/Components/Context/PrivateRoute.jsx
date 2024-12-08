import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./MainContext";

const PrivateRoute = ({ children }) => {
    const { user, loading,datas } = useContext(AuthContext)
    console.log(loading)
    if (loading) {
        return <div className="h-screen flex justify-center items-center">
            <div className="flex flex-col m-8 rounded shadow-md w-60 sm:w-80 animate-pulse h-96">
                <div className="h-48 rounded-t bg-zinc-800"></div>
                <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 bg-zinc-700">
                    <div className="w-full h-6 rounded bg-zinc-800"></div>
                    <div className="w-full h-6 rounded bg-zinc-800"></div>
                    <div className="w-3/4 h-6 rounded bg-zinc-800"></div>
                </div>
            </div>
        </div>
    }
    if (user && datas ) {
        return children
    }
    else {
        return (
            <Navigate state={location.pathname} to={'/login'}></Navigate>
        )
    }
};

export default PrivateRoute;