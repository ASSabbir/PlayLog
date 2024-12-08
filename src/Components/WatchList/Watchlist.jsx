import { useContext, useState } from 'react';
import { AuthContext } from '../Context/MainContext';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const Watchlist = () => {
    const { user, watchData, setWatchData } = useContext(AuthContext)
    console.log(user, watchData)
    const watch = watchData.filter(data => data.addedUser == user.email)



    if (!watchData.length) {
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
    if (watch.length == 0) {
        return <div className='h-[calc(100vh-64px)] font-title text-4xl flex-col flex justify-center items-center'>
            <h1>You Didnt Add Any Games</h1>
            <h1 className='text-lg text-zinc-500 mt-9'>- Please go GameDetails page and add games to you inventory -</h1>
        </div>
    }
    return (
        <div className=''>
            <div className="min-h-screen px-[10vw]   text-white p-8">
                {
                    watch.map(data => <div key={data._id} className="  mx-auto border-t p-5 gap-9 pb-9  border-white flex flex-col xl:flex-row items-start  space-y-10">

                        <div className="w-full  lg:min-w-[700px] flex-1 ">
                            <img
                                src={data.gameCover}
                                alt={data.gameTitle}
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                        <div className="w-full flex-1  space-y-4 ">
                            <h1 className="text-3xl font-bold">{data.gameTitle}</h1>
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

                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Watchlist;