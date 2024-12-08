import { useContext } from 'react';
import { AuthContext } from '../Context/MainContext';
import { useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';

const Details = () => {
    const { user, datas,setWatchData,watchData,loading } = useContext(AuthContext)
    const { pathname } = useLocation()
    const id = pathname.replace('/review/', '')
    const data = datas.find(data => data._id === id)
    console.log(data)
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
    const handleAddToWatchlist = (data) => {
        if (!user) {

            Toast.fire({
                icon: "error",
                title: "Please log in to add reviews to your watchlist."
            });
            return;
        }
        
        const updateddata={...data,'addedUser':user.email}
        delete updateddata._id
        console.log(updateddata)
        setWatchData([...watchData,updateddata])

        fetch("https://server-alpha-blue.vercel.app/watchlist", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updateddata),
        })
            .then((res) => res.json())
            .then((data) => {
                Toast.fire({
                    icon: "success",
                    title: "Added to your watchlist."
                });
                console.log(data)})
            .catch(error=>console.log(error))
    };
    if (!datas.length) {
        return (
            <div className="h-screen flex justify-center items-center">
                <div className="flex flex-col m-8 rounded shadow-md w-60 sm:w-80 animate-pulse h-96">
                    <div className="h-48 rounded-t bg-zinc-800"></div>
                    <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 bg-zinc-700">
                        <div className="w-full h-6 rounded bg-zinc-800"></div>
                        <div className="w-full h-6 rounded bg-zinc-800"></div>
                        <div className="w-3/4 h-6 rounded bg-zinc-800"></div>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div>
            <div className="min-h-screen px-[10vw]  text-white p-8">
                <div className=" mx-auto  items-start gap-8 space-y-10">

                    <div className="w-full ">
                        <img
                            src={data.gameCover}
                            alt={data.gameTitle}
                            className="rounded-lg shadow-lg"
                        />
                    </div>

                    <div className="w-full md:w-2/3 space-y-4">
                        <h1 className="text-3xl font-title font-bold">{data.gameTitle}</h1>
                        <p className="text-gray-400 text-sm">
                            Reviewed by: {data.userName} ({data.userEmail})
                        </p>
                        <p>{data.reviewDescription}</p>
                        <p>
                            <strong>Rating:</strong> {data.rating}/10
                        </p>
                        <p>
                            <strong>Genre:</strong> {data.genres}
                        </p>
                        <p>
                            <strong>Published in:</strong> {data.publishingYear}
                        </p>
                        {data.topGame && (
                            <div className="mt-2 px-3 py-1 bg-yellow-500 text-black rounded">
                                🌟 Top Game
                            </div>
                        )}
                        <button
                            className="mt-4 border-2 border-primary hover:bg-transparent w-40 px-5 py-3 bg-primary duration-200"
                            onClick={() => handleAddToWatchlist(data)}
                        >
                            Add to WatchList
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};



export default Details;