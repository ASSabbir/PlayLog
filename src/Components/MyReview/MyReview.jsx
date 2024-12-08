import  { useContext, useState } from 'react';
import { AuthContext } from '../Context/MainContext';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';



const MyReview = () => {

    const { user, datas,setDatas } = useContext(AuthContext)
    console.log(user, datas)
    const temp = datas.filter(data => data.userEmail == user.email)
    const [myData, setMyData] = useState(temp)

    // handel delete 
    const handelDelete = (data) => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: " border-2 text-gray-50 border-primary hover:bg-transparent w-40 px-5 py-3 bg-primary duration-200",
                cancelButton: "border-2 text-gray-50 mr-5 border-primary px-5 py-3 w-40 hover:bg-primary duration-200",
                title: "font-title text- text-white",
                text: "font-description text-white",
                popup: "bg-zinc-900"
            },
            buttonsStyling: false,
        });

        swalWithBootstrapButtons
            .fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Yes, delete it!",
                cancelButtonText: "No, cancel!",
                reverseButtons: true,
            })
            .then((result) => {
                if (result.isConfirmed) {
                    fetch(`https://server-alpha-blue.vercel.app/deleteReview/${data._id}`, {
                        method: 'DELETE',

                    })
                        .then(response => response.json())
                        .then(result => {
                            console.log(result)

                        })
                        .catch(error => {
                            console.error(error);

                        });
                    setMyData(myData.filter(da => da._id !== data._id))
                    setDatas(datas.filter(da => da._id !== data._id))
                    swalWithBootstrapButtons.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success",
                    });

                } else if (result.dismiss === Swal.DismissReason.cancel) {
                    swalWithBootstrapButtons.fire({
                        title: "Cancelled",
                        text: "Your imaginary file is safe :)",
                        icon: "error",
                    });
                }
            });
    };

    if (myData.length == 0) {
        return <div className='h-[calc(100vh-64px)] font-title text-4xl flex-col flex justify-center items-center'>
            <h1>You Didnt Add Any Games</h1>
            <h1 className='text-lg text-zinc-500 mt-9'>- Please go Add Review page and add games -</h1>
        </div>
    }
    return (
        <div className=''>
            <div className="min-h-screen px-[10vw]   text-white p-8">
                {
                    myData.map(data => <div key={data._id} className="  mx-auto border-t p-5 gap-9 pb-9  border-white flex flex-col xl:flex-row items-start  space-y-10">

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
                            <div className='gap-5 flex'>
                                <button onClick={() => handelDelete(data)} className="mt-4 border-2 border-primary hover:bg-transparent w-40 px-5 py-3 bg-primary duration-200">Delete</button>
                                <Link to={`/update/${data._id}`}>
                                    <button className="mt-4 border-2 border-primary px-5 py-3 w-40 hover:bg-primary duration-200">Update</button>
                                </Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyReview;