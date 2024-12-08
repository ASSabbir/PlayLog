import { useState, useContext } from "react";
import { AuthContext } from "../Context/MainContext";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const Update = () => {
    const { user,datas } = useContext(AuthContext);
    const { pathname } = useLocation()
    const id = pathname.replace('/update/', '')
    const data = datas.find(data => data._id === id)
    
    const navigate = useNavigate();
    const [formData, setFormData] = useState(data);



    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const updateData = {
            ...formData,
            userEmail: user.email,
            userName: user.displayName,
        };
        console.log(updateData)


        // fetch(`https://server-alpha-blue.vercel.app/update/${}`, {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(updateData),
        // })
        //     .then((res) => res.json())
        //     .then((data) => {
        //         if (data.insertedId) {
                    
        //             Swal.fire("Success!", "Review added successfully!", "success");
        //             navigate("/");
        //         }
        //     })
        //     .catch((error) => {
        //         Swal.fire("Error", "Failed to add review.", "error");
        //         console.log(error)
        //     });
        fetch(`https://server-alpha-blue.vercel.app/update/${id}`, {
            method: "PUT", // Use PUT or PATCH
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updateData),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.modifiedCount > 0) {
                    Swal.fire("Success!", "Review updated successfully!", "success");
                    navigate("/");
                } else {
                    Swal.fire("Error", "Failed to update review.", "error");
                }
            })
            .catch((error) => {
                Swal.fire("Error", "Something went wrong.", "error");
                console.error("Error updating review:", error);
            });
    };

    return (
        <div style={{ backgroundImage: "url('/b2.jpg')" }} className="flex flex-col items-center  p-8">

            <h1 className="text-3xl font-bold font-title text-center mb-6">Update {formData.gameTitle}</h1>
            <div className="w-full max-w-2xl  bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-8 shadow-lg">
                <form
                    onSubmit={handleSubmit}
                    className="max-w-2xl mx-auto  rounded-lg    space-y-4  ">
                    
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Game Cover Image URL:
                        </label>
                        <input
                            type="url"
                            name="gameCover"
                            value={formData.gameCover}
                            onChange={handleChange}
                            className="w-full px-4 py-2  bg-gray-700 bg-opacity-50 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                            required
                        />
                    </div>

                    
                    <div>
                        <label className="block text-sm font-medium mb-1">Game Title:</label>
                        <input
                            type="text"
                            name="gameTitle"
                            value={formData.gameTitle}
                            onChange={handleChange}
                            className="w-full px-4 py-2  bg-gray-700 bg-opacity-50 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                            required
                        />
                    </div>

                    
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Review Description:
                        </label>
                        <textarea
                            name="reviewDescription"
                            value={formData.reviewDescription}
                            onChange={handleChange}
                            className="w-full px-4 py-2  bg-gray-700 bg-opacity-50 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                            rows="4"
                            required
                        ></textarea>
                    </div>

                    
                    <div>
                        <label className="block text-sm font-medium mb-1">Rating :</label>
                        <input
                            type="number"
                            name="rating"
                            value={formData.rating}
                            onChange={handleChange}
                            className="w-full px-4 py-2  bg-gray-700 bg-opacity-50 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                            min="1"
                            max="10"
                            required
                        />
                    </div>

                    
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Publishing Year:
                        </label>
                        
                        <input
                            type="text"
                            name="publishingYear"
                            value={formData.publishingYear}
                            onChange={handleChange}
                            className="w-full px-4 py-2  bg-gray-700 bg-opacity-50 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                            required
                        />
                    </div>

                    
                    <div>
                        <label className="block text-sm font-medium mb-1">Genre:</label>
                        <select
                            name="genres"
                            value={formData.genres}
                            onChange={handleChange}
                            className="w-full px-4 py-2  bg-gray-700 bg-opacity-50 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                            required
                        >
                            <option value="Action">Action</option>
                            <option value="RPG">RPG</option>
                            <option value="Adventure">Adventure</option>
                            <option value="Shooter">Shooter</option>
                            <option value="Sports">Sports</option>
                        </select>
                    </div>

                    
                    <div>
                        <label className="block text-sm font-medium mb-1">User Email:</label>
                        <input
                            type="email"
                            value={user.email}
                            className="w-full px-4 py-2  bg-gray-700 bg-opacity-50 text-gray-600 focus:outline-none focus:ring-0 focus:ring-primary"
                            readOnly
                        />
                    </div>

                    
                    <div>
                        <label className="block text-sm font-medium mb-1">User Name:</label>
                        <input
                            type="text"
                            value={user.displayName}
                            className="w-full px-4 py-2 text-gray-600  bg-gray-700 bg-opacity-50  focus:outline-none focus:ring-0 focus:ring-primary"
                            readOnly
                        />
                    </div>

                   
                    <div>
                        <button
                            type="submit"
                            className="mt-4 border-2 border-primary hover:bg-transparent  px-5 py-3 bg-primary duration-200 w-full"
                        >
                            Update Review
                        </button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default Update;