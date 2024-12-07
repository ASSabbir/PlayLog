import React from 'react';
import { Link } from 'react-router-dom';

const ReviewCard = ({ data }) => {
    const { gameCover, gameTitle, reviewDescription, rating, genres, userName } = data
    return (
        <div className="bg-g my-5 border-b-2 text-white py-9  flex md:flex-row flex-col items-center gap-4">

            <div className="md:w-32 w-full h-24 flex-shrink-0 overflow-hidden ">
                <img
                    src={gameCover}
                    alt="Indiana Jones"
                    className="w-full h-full object-cover"
                />
            </div>

            
            <div className="flex-1">
                <h2 className="text-lg font-bold">
                    {gameTitle}
                </h2>
                <p className="text-gray-400 text-sm mt-1">
                    {reviewDescription}
                </p>
                <div className="flex md:flex-row flex-col md:items-center gap-4 text-gray-400 text-sm mt-2">
                    <span className="flex items-center gap-1">
                    explore Indiana Jones and
                    the Great Circle
                    </span>
                    <span className="flex items-center gap-1">
                        <span className="material-icons">person</span> {userName}
                    </span>
                    <span className="flex items-center gap-1">
                        <span className="material-icons">Rating:</span> {rating}
                    </span>
                </div>
            </div>

            <Link to={`/review/${data._id}`} className="border-2 border-primary hover:bg-transparent w-40 px-5 py-3 bg-primary duration-200">
                Explore Details
            </Link >

        </div>
    );
};

export default ReviewCard;