import { useContext } from "react";
import { AuthContext } from "./MainContext";


const Loading = ({ children }) => {
    const { loading } = useContext(AuthContext)

    if (loading) {
        <div className="h-[calc(100vh-90px)] flex justify-center items-center">
            <div className="flex flex-col m-8 rounded shadow-md w-60 sm:w-80 animate-pulse h-96">
                <div className="h-48 rounded-t bg-gray-300"></div>
                <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 bg-gray-50">
                    <div className="w-full h-6 rounded bg-gray-300"></div>
                    <div className="w-full h-6 rounded bg-gray-300"></div>
                    <div className="w-3/4 h-6 rounded bg-gray-300"></div>
                </div>
            </div>
        </div>
    }
    else {
        return children
    }

};

export default Loading;