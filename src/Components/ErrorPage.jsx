
import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div className="h-screen flex flex-col justify-center items-center bg-zinc-950 text-primary">
            <h1 className="text-6xl font-bold font-title mb-4">Oops!</h1>
            <h2 className="text-2xl font-title mb-6">Something went wrong.</h2>
            <p className="text-lg text-gray-400 mb-4">
                {error?.statusText || error?.message || "Unknown Error"}
            </p>
            <p className="text-gray-500 mb-10">
                {error?.status ? `Error Code: ${error.status}` : ""}
            </p>
            <Link to="/" className='border-2 border-primary hover:text-black px-5 py-3  hover:bg-primary duration-200'>
                Back to Home
            </Link>
        </div>
    );
};

export default ErrorPage;
