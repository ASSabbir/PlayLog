import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/MainContext";
import ReviewCard from "./ReviewCard";
import { data } from "react-router-dom";


const AllReview = () => {
    const { datas, loading } = useContext(AuthContext)

    
    if (!datas.length) {
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
      
    return (
        <div>
            {
                
                    <div className="mx-[10vw]">
                        <div className="bg-gray-00 text-white min-h-screen mt-[5vw]">
                            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 border-b-2 pb-5">

                                <div className="flex-1">

                                    <div className="relative bg-gray-800 rounded-lg overflow-hidden">
                                        <img
                                            src={datas[0].gameCover}
                                            alt="Plane"
                                            className="w-full object-cover"
                                        />

                                    </div>
                                </div>


                                <div className="w-full md:w-1/3">
                                    <h2 className="text-xl font-bold mb-4">Popular Reviews</h2>
                                    <ul className="space-y-4">
                                        {[
                                            {
                                                rank: "01",
                                                title: "Microsoft Flight Simulator 2024 Review",
                                                time: "18h",
                                                comments: 277,
                                            },
                                            {
                                                rank: "02",
                                                title: "Delta Force Review in Progress",
                                                time: "3d",
                                                comments: 124,
                                            },
                                            {
                                                rank: "03",
                                                title: "STALKER 2: Heart of Chornobyl Review",
                                                time: "13d",
                                                comments: 1200,
                                            },
                                            {
                                                rank: "04",
                                                title: "Dragon Age: The Veilguard Review",
                                                time: "Oct 28, 2024",
                                                comments: 4000,
                                            },
                                            {
                                                rank: "05",
                                                title: "Aliens: Dark Descent Review",
                                                time: "Jun 20, 2023",
                                                comments: 166,
                                            },
                                        ].map((review, index) => (
                                            <li key={index} className="flex items-start gap-4">
                                                <span className="text-primary font-bold text-lg">{review.rank}</span>
                                                <div>
                                                    <h3 className="text-lg font-semibold">{review.title}</h3>
                                                    <p className="text-gray-400 text-sm">
                                                        {review.time} • {review.comments} comments
                                                    </p>
                                                </div>
                                            </li>
                                        ))}

                                    </ul>
                                </div>
                            </div>
                            <div>
                                {
                                    datas.map(data => <ReviewCard key={data._id} data={data}></ReviewCard>)
                                }
                            </div>
                        </div>
                    </div>
            }
        </div>
    );
};

export default AllReview;