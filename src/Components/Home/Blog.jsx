

const Blog = () => {
    return (
        <div
            className="relative pt-[10vw] pb-[10vw] bg-cover bg-center flex items-center justify-center"
            style={{
                backgroundImage: `url('/blog_posts_background.png')`, 
            }}
        >
            <div className="absolute inset-0  bg-opacity-70"></div>
            <div className="relative max-w-7xl mx-auto px-4 py-10 text-white">
               
                <h1 className='text-6xl font-bold font-title text-center pb-[5vw] pt-[5vw]'>Latest Blog Posts</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    
                    <div className="bg-zinc-800 rounded-lg overflow-hidden shadow-md">
                        <img
                            src="/sean-do-EHLd2utEf68-unsplash.jpg" 
                            alt="Blog 1"
                            className="w-full h-60 object-cover"
                        />
                        <div className="p-4">
                            <p className="text-sm text-gray-400 mb-2">
                                <i className="fa fa-calendar"></i> 29 Aug, 2024 | by administrator
                            </p>
                            <h3 className="text-lg font-semibold mb-3">
                                The Rise of E-Sports: How Gaming Became a Global Phenomenon
                            </h3>
                            <button className="text-primary font-bold hover:underline">
                                Read More
                            </button>
                        </div>
                    </div>

                    
                    <div className="bg-zinc-800 rounded-lg overflow-hidden shadow-md">
                        <img
                            src="/rohit-choudhari-tk2_RBZq7RA-unsplash.jpg" // Replace with blog image
                            alt="Blog 2"
                            className="w-full h-60 object-cover"
                        />
                        <div className="p-4">
                            <p className="text-sm text-gray-400 mb-2">
                                <i className="fa fa-calendar"></i> 29 Aug, 2024 | by administrator
                            </p>
                            <h3 className="text-lg font-semibold mb-3">
                                Top 5 E-Sports Games You Need to Watch in 2024
                            </h3>
                            <button className="text-primary font-bold hover:underline">
                                Read More
                            </button>
                        </div>
                    </div>

                    {/* Blog Card 3 */}
                    <div className="bg-zinc-800 rounded-lg overflow-hidden shadow-md">
                        <img
                            src="/fabio-magalhaes-nmTm7knUnqs-unsplash.jpg" // Replace with blog image
                            alt="Blog 3"
                            className="w-full h-60 object-cover"
                        />
                        <div className="p-4">
                            <p className="text-sm text-gray-400 mb-2">
                                <i className="fa fa-calendar"></i> 29 Aug, 2024 | by administrator
                            </p>
                            <h3 className="text-lg font-semibold mb-3">
                                How to Start a Career in E-Sports: A Beginner’s Guide
                            </h3>
                            <button className="text-primary font-bold hover:underline">
                                Read More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Blog;