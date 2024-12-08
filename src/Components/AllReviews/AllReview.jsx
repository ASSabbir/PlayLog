import { useContext, useState } from "react";
import { AuthContext } from "../Context/MainContext";
import ReviewCard from "./ReviewCard";

const AllReview = () => {
    const { datas, loading } = useContext(AuthContext);
    const [sortedReviews, setSortedReviews] = useState(datas);
    const [selectedGenre, setSelectedGenre] = useState("All");

    const handleSort = (type, order) => {
        const sorted = [...sortedReviews].sort((a, b) => {
            if (type === "rating") {
                return order === "asc" ? a.rating - b.rating : b.rating - a.rating;
            } else if (type === "year") {
                return order === "asc"
                    ? a.publishingYear - b.publishingYear
                    : b.publishingYear - a.publishingYear;
            }
            return 0;
        });
        setSortedReviews(sorted);
    };

    // Handle filtering by genre
    const handleFilter = (genre) => {
        setSelectedGenre(genre);
        if (genre === "All") {
            setSortedReviews(datas);
        } else {
            const filtered = datas.filter((review) => review.genres.includes(genre));
            setSortedReviews(filtered);
        }
    };

    if (loading || !datas.length) {
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
        <div className="mx-[10vw]">
          
            <div className="flex flex-col gap-2 md:flex-row justify-between items-center bg-zinc-800 p-5  mb-5">
               
                <select
                    className="bg-zinc-900 text-white p-2 "
                    onChange={(e) => handleFilter(e.target.value)}
                >
                    <option value="All">All Genres</option>
                    {[...new Set(datas.map((data) => data.genres))].map((genre, index) => (
                        <option key={index} value={genre}>
                            {genre}
                        </option>
                    ))}
                </select>

                
                <div className="flex flex-col md:flex-row gap-2 space-x-4">
                    <button
                        onClick={() => handleSort("rating", "asc")}
                        className="bg-zinc-900 text-white p-2 "
                    >
                        Sort by Rating (Asc)
                    </button>
                    <button
                        onClick={() => handleSort("rating", "desc")}
                        className="bg-zinc-900 text-white p-2 "
                    >
                        Sort by Rating (Desc)
                    </button>
                    <button
                        onClick={() => handleSort("year", "asc")}
                        className="bg-zinc-900 text-white p-2 "
                    >
                        Sort by Year (Asc)
                    </button>
                    <button
                        onClick={() => handleSort("year", "desc")}
                        className="bg-zinc-900 text-white p-2 "
                    >
                        Sort by Year (Desc)
                    </button>
                </div>
            </div>

            <div className="min-h-screen">
                {sortedReviews.map((data) => (
                    <ReviewCard key={data._id} data={data} />
                ))}
            </div>
        </div>
    );
};

export default AllReview;
