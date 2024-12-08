import { Link } from "react-router-dom";


const TopgamesCard = ({ data }) => {
    const { gameCover, gameTitle, reviewDescription, rating } = data

    return (
        <div>
            <Link to={`/review/${data._id}`}>
                <div className="relative  cursor-pointer h-80 bg-gray-800 text-white  overflow-hidden group">
                    <div className="absolute inset-0 h-full w-full">
                        <img
                            src={gameCover}
                            alt="Game Thumbnail"
                            className="absolute inset-0 h-full w-full object-cover opacity-100 scale-100 transform group-hover:scale-110 group-hover:opacity-25  transition-transform duration-500 ease-in-out"
                        />
                    </div>


                    <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black via-transparent to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-500 ease-in-out">
                        <h3 className="text-lg font-bold">{gameTitle}</h3>
                        <div className="flex items-center space-x-1 mt-2">
                            <div className="flex text-yellow-400">
                                <span>★</span><span>★</span><span>★</span><span>☆</span><span>☆</span>
                            </div>
                            <span className="text-sm text-gray-300">(3.0)</span>
                        </div>

                    </div>


                    <div className="absolute inset-0 flex items-center justify-center opacity-0 translate-y-full group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-in-out">
                        <div className="text-center px-4">
                            <h4 className="text-xl font-bold">Review:</h4>
                            <p className="text-sm mt-2">
                                {reviewDescription}
                            </p>
                        </div>
                    </div>
                </div>
            </Link>


        </div>
    );
};

export default TopgamesCard;