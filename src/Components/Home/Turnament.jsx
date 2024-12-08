

const Turnament = () => {
    return (
        <div
            className="relative h-screen bg-cover bg-center flex items-center justify-center"
            style={{
                backgroundImage: `url('/gaming_tournament_background.jpg')`,
            }}
        >
           
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>

           
            <div className="relative max-w-6xl mx-auto px-3 flex flex-col md:flex-row items-stretch text-white h-[70%]">
              
                <div className="md:w-1/2 h-full">
                    <img
                        src="/mahdi-bafande-1FevRdpPjkM-unsplash.jpg"
                        alt="Gaming Image"
                        className="h-full w-full rounded-lg shadow-lg object-cover"
                    />
                </div>

               
                <div className="md:w-1/2 border-r-2 border-primary flex flex-col justify-center p-5 md:p-20 bg-zinc-900 space-y-6">
                    <h1 className="text-4xl font-title font-bold">Gaming Tournaments</h1>
                    <div className="flex items-center gap-4">
                        <img
                            src="https://marketplace.canva.com/EAGALYqSH7g/1/0/1600w/canva-red-and-black-illustrative-wolf-gaming-logo-cSzFMRU1Vrg.jpg" // Replace with avatar URL
                            alt="User Avatar"
                            className="w-12 h-12 rounded-full border-2 border-primary"
                        />
                        <div className="border-t border-white w-16"></div>
                    </div>
                    <p className="text-lg leading-relaxed">
                        Discover a world of competitive gaming with tournaments and events,
                        all in one spot. Dive into thrilling battles and connect with
                        gamers globally.
                    </p>
                    <button className="border-2 border-primary hover:bg-transparent w-40 px-5 py-3 bg-primary duration-200">
                        Join Us
                    </button>
                </div>
            </div>
        </div>


    );
};

export default Turnament;